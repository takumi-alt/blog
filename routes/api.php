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

Route::get("/read/{path}", [ApiController::class, 'article'])->name('article');

Route::get("/all", [ApiController::class, 'all'])->name('all');

Route::post("/contact", [ApiController::class, 'contact'])->name('contact');

Route::get("/category/{path}", [ApiController::class, 'category'])->name('category');

Route::get("/categories", [ApiController::class, 'categories'])->name('categories');
