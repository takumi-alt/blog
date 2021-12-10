<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Post;
use App\Http\Controllers\ApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/read/{path}", function ($path) {
    // Modelのクラスを指定
    return [
        "posts" => Post::where('path', $path)->first()
    ];
});
Route::get("/all", function () {
    return response()->json(
        [
            'posts' => Post::orderBy('id', 'desc')->get()
        ]
    );
});

Route::post("/contact", [ApiController::class, 'contact'])->name('contact');
