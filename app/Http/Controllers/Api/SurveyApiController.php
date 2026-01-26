<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\FileUpload;
use App\Models\SurveyResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Google\Client;
use Google\Service\Sheets;
use Google\Service\Sheets\ValueRange;

class SurveyApiController extends Controller
{
    public function uploadImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:10240',
        ]);

        $file = $request->file('image');
        $path = $file->store('uploads/images', 'public');

        $upload = FileUpload::create([
            'path' => $path,
            'original_name' => $file->getClientOriginalName(),
            'mime' => $file->getClientMimeType(),
            'created_by' => $request->user()?->id,
        ]);

        return response()->json([
            'id' => $upload->id,
            'name' => str_replace("uploads/images/", "", $path),
        ]);
    }

    public function viewImage(string $id)
    {
        $path = 'uploads/images/' . $id;

        if (!Storage::disk('public')->exists($path)) {
            abort(404);
        }

        return response()->file(
            Storage::disk('public')->path($path)
        );
    }

    public function storeSurveyResponse(Request $request)
    {
        // $data = $request->validate([
        //     'survey_response' => 'required',
        // ]);

        $data = $request->json("survey_response");

        $resp = SurveyResponse::create([
            'survey_response' => $data,
            'created_by' => $request->user()?->id,
        ]);

        $sheet = trim(strtolower($data["Target"])) === "pelanggan" ? "Pelanggan" : "Non Pelanggan";

        $spreadsheet = $this->storeToSpreadsheet(
            '1JRVXPeTmY5zf4iVZfWylp5Y33CdSoz78BlVAWr8mV1I',
            $sheet,
            $data
        );

        return response()->json([
            'id' => $resp->id,
            'spreadsheet' => $spreadsheet,
        ], 201);
    }


    public function resolveDataForSpreadsheet($data)
    {
        $result = [];

        foreach ($data as $key => $value) {

            $name = preg_replace('/_|p_/', ' ', $key);
            $name = trim(preg_replace('/\s+/', ' ', $name));
            $name = ucwords(strtolower($name));

            if (is_array($value)) {
                $result[$name] = implode(" | ", $value);
            } else {
                $result[$name] = $value;
            }
        }
        return $result;
    }


    public function storeToSpreadsheet($spreadsheetId, $sheetName, $data)
    {

        if (empty($data)) {
            return ['error' => 'Empty payload'];
        }

        $data = $this->resolveDataForSpreadsheet($data);

        // 2️⃣ Setup Google Client
        $client = new Client();
        $client->setApplicationName('PPTR Google Sheets');
        $client->setScopes([Sheets::SPREADSHEETS]);
        $client->setAuthConfig(storage_path('app/google/credentials.json'));

        $service = new Sheets($client);

        // $spreadsheetId = config('services.google.sheet_id');
        // $spreadsheetId = '1JRVXPeTmY5zf4iVZfWylp5Y33CdSoz78BlVAWr8mV1I';
        // $sheetName = 'Sheet1';

        // 3️⃣ Ambil header yang sudah ada
        $headerResponse = $service->spreadsheets_values->get(
            $spreadsheetId,
            "{$sheetName}!1:1"
        );

        $existingHeaders = $headerResponse->getValues()[0] ?? [];

        // 4️⃣ Header baru dari key JSON
        $newHeaders = array_keys($data);

        // 5️⃣ Merge header (biar urut & tidak duplikat)
        $finalHeaders = array_values(array_unique([
            ...$existingHeaders,
            ...$newHeaders
        ]));

        // 6️⃣ Update header ke sheet (jika berubah)
        if ($finalHeaders !== $existingHeaders) {
            $service->spreadsheets_values->update(
                $spreadsheetId,
                "{$sheetName}!1:1",
                new ValueRange([
                    'values' => [$finalHeaders]
                ]),
                ['valueInputOption' => 'RAW']
            );
        }

        // 7️⃣ Susun row sesuai urutan header
        $row = [];
        foreach ($finalHeaders as $header) {
            $row[] = $data[$header] ?? '';
        }

        // 8️⃣ Append row
        $service->spreadsheets_values->append(
            $spreadsheetId,
            "{$sheetName}!A:A",
            new ValueRange([
                'values' => [$row]
            ]),
            ['valueInputOption' => 'USER_ENTERED']
        );

        return [
            'status' => 'success',
            'headers' => $finalHeaders,
            'row' => $row
        ];
    }

    public function isHasSurvey(Request $request)
    {
        // $data = $request->validate([
        //     'survey_response' => 'required',
        // ]);

        $npa = $request->get("npa");

        $resp = SurveyResponse::where([
            'created_by' => $npa,
        ]);

        return response()->json($resp, 201);
    }
}
