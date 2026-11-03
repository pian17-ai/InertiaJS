<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function() {
    return Inertia::render('Public/Pian');
});

Route::get('/users', [UserController::class, 'index'])->name('user');
Route::get('/users/add', [UserController::class, 'add']);
Route::post('/users', [UserController::class, 'store']);

Route::get('/posts', [PostController::class, 'index']);

Route::get('/admin', function() {
    return Inertia::render('Admin/DashboardPage');
});

// EXAMPLE FOR ANY WRITE
// Route::inertia('/users', 'Student/AllPage');
// Route::get('/student', function() {
//     $student = [
//         'nim' => 29123982,
//         'name' => 'Alvian Cahyo Pambudi',
//         'major' => 'Computer Science',
//         'faculty' => 'Faculty of Computer Science',
//         'university' => 'Universitas Indonesia'
//     ];

//     return Inertia::render('Public/Student/AllPage', [
//         'student' => $student
//     ]);
//     // return inertia('Student/AllPage');
// });