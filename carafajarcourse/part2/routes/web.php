<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Pian');

// Route::inertia('/users', 'Student/AllPage');
Route::get('/student', function() {
    $student = [
        'nim' => 29123982,
        'name' => 'Alvian Cahyo Pambudi',
        'major' => 'Computer Science',
        'faculty' => 'Faculty of Computer Science',
        'university' => 'Universitas Indonesia'
    ];

    return Inertia::render('Student/AllPage', [
        'student' => $student
    ]);
    // return inertia('Student/AllPage');
});