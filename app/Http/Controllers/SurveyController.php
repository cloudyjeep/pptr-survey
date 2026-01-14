<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    /**
     * Display a survey by reading a JSON file in resources/surveys.
     */
    public function index(Request $request)
    {
        $path = resource_path('surveys/sample-survey.json');

        if (!file_exists($path)) {
            $survey = [
                'title' => 'Sample Survey',
                'pages' => [
                    [
                        'name' => 'page1',
                        'elements' => [
                            [
                                'type' => 'text',
                                'name' => 'q1',
                                'title' => 'What is your name?'
                            ]
                        ]
                    ]
                ]
            ];
        } else {
            $content = file_get_contents($path);
            $survey = json_decode($content, true) ?? [];
        }

        return Inertia::render('surveys/index', [
            'surveyJson' => $survey,
        ]);
    }
}
