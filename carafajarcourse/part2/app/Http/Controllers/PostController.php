<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function index() {
        $posts = Post::all();

        return inertia('Public/Post/AllPage', [
            'posts' => $posts
        ]);
    }

    public function show(string $slug) {
        $post = Post::where('slug', $slug)->first();

        return inertia('Public/Post/ShowPage', [
            'post' => $post
        ]);
    }

    public function add() {
        return inertia('Public/Post/AddPage');
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'img' => 'required|file|image|mimes:png,jpg,jpeg'
        ]);

        $image = $request->file('img');
        $generateName = uniqid() . '.' . $image->getClientOriginalExtension();
        $file = $image->storeAs('posts', $generateName, 'public');

        Post::create([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'img' => $file,
            'slug' => Str::of($validated['title'])->slug('-')
        ]);

        return to_route('post');
    }
}
