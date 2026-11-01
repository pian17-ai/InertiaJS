<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return inertia('Public/Student/AllPage', [
            'students' => $users
        ]);
    }

    public function add()
    {
        return inertia('Public/Student/AddPage');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nim' => 'required|integer|min_digits:5',
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string',
            'major' => 'required|string',
            'faculty' => 'required|string',
            'university' => 'required|string'
        ]);

        $validated['password'] = bcrypt($validated['password']);

        User::create($validated);

        return to_route('user');
    }
}
