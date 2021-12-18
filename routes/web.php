<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UploadController;
use Laravel\Ui\Presets\React;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth/login');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


// React
Route::get('/blog', function () {
    return view('react');
});

Route::get('blog/{any}', function () {
    return view('react');
})->where('any', '.*');


// Admin
Route::get('/create', [HomeController::class, 'create'])->name('create');
Route::post('/store', [HomeController::class, 'store'])->name('store');
Route::get('/edit/{id}', [HomeController::class, 'edit'])->name('edit');
Route::post('/update/{id}', [HomeController::class, 'update'])->name('update');
Route::get('/top', [HomeController::class, 'top'])->name('top');
Route::post('/top', [HomeController::class, 'top'])->name('top');
Route::get('/delete/{id}', [HomeController::class, 'delete'])->name('delete');

// img
Route::resource('/upload', UploadController::class);
