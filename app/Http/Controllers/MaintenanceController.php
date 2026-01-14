<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class MaintenanceController extends Controller
{
    public function surveysList(Request $request)
    {
        return Inertia::render('maintenance/list');
    }

    public function surveysCreate(Request $request)
    {
        return Inertia::render('maintenance/create');
    }

    public function surveysRelease(Request $request)
    {
        return Inertia::render('maintenance/rilis');
    }

    public function usersList(Request $request)
    {
        return Inertia::render('maintenance/users/list');
    }
}
