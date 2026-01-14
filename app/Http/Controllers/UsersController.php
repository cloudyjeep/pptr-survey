<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('users/list');
    }

    public function create(Request $request)
    {
        return Inertia::render('users/create');
    }

    public function show(Request $request, $id)
    {
        return Inertia::render('users/detail', [
            'id' => $id,
        ]);
    }
}
