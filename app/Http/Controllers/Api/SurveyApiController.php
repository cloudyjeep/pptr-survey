<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\FileUpload;
use App\Models\SurveyResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
            'url' => Storage::disk('public')->url($path),
        ]);
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

        return response()->json(['id' => $resp->id], 201);
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
