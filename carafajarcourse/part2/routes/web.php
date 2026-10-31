<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function() {
    sleep(1);
    return Inertia::render('Public/Pian');
});

// Route::inertia('/users', 'Student/AllPage');
Route::get('/student', function() {
    $student = [
        'nim' => 29123982,
        'name' => 'Alvian Cahyo Pambudi',
        'major' => 'Computer Science',
        'faculty' => 'Faculty of Computer Science',
        'university' => 'Universitas Indonesia'
    ];

    sleep(1);
    return Inertia::render('Public/Student/AllPage', [
        'student' => $student
    ]);
    // return inertia('Student/AllPage');
});

Route::get('/admin', function() {
    sleep(1);
    return Inertia::render('Admin/DashboardPage');
});