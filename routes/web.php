<?php

use App\Models\FileUpload;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Surveys page (reads JSON from resources/surveys)
    Route::get('surveys', [\App\Http\Controllers\SurveyController::class, 'index'])
        ->name('surveys.index');

    // Maintenance: surveys management pages
    Route::get('maintenance/surveys', [\App\Http\Controllers\MaintenanceController::class, 'surveysList'])
        ->name('maintenance.surveys.index');

    Route::get('maintenance/surveys/create', [\App\Http\Controllers\MaintenanceController::class, 'surveysCreate'])
        ->name('maintenance.surveys.create');

    Route::get('maintenance/surveys/rilis', [\App\Http\Controllers\MaintenanceController::class, 'surveysRelease'])
        ->name('maintenance.surveys.rilis');

    // Maintenance: users list page
    Route::get('maintenance/users/list', [\App\Http\Controllers\MaintenanceController::class, 'usersList'])
        ->name('maintenance.users.list');

    // Mock API for maintenance users (for UI scaffolding)
    Route::get('api/maintenance/users', function () {
        return response()->json([
            [
                'id' => 1,
                'name' => 'Alice Admin',
                'email' => 'alice@example.com',
                'roles' => ['Admin'],
                'status' => 'Active',
                'last_login' => '2026-01-10T10:20:00Z',
                'created_at' => '2025-12-01T08:00:00Z',
            ],
            [
                'id' => 2,
                'name' => 'Bob Manager',
                'email' => 'bob@example.com',
                'roles' => ['Manager'],
                'status' => 'Invited',
                'last_login' => null,
                'created_at' => '2026-01-02T09:30:00Z',
            ],
            [
                'id' => 3,
                'name' => 'Carol Editor',
                'email' => 'carol@example.com',
                'roles' => ['Editor'],
                'status' => 'Disabled',
                'last_login' => '2026-01-08T12:00:00Z',
                'created_at' => '2025-11-21T11:15:00Z',
            ],
        ]);
    });

    // API endpoints for SurveyJS integration
    Route::post('api/upload-image', [\App\Http\Controllers\Api\SurveyApiController::class, 'uploadImage']);
    Route::post('api/survey-responses', [\App\Http\Controllers\Api\SurveyApiController::class, 'storeSurveyResponse']);
    
});

Route::get('api/files/{id}', [\App\Http\Controllers\Api\SurveyApiController::class, 'viewImage']);

require __DIR__ . '/settings.php';
