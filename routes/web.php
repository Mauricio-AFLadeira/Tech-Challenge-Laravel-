<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\GitHubController;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

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

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified'
])->group(function () {
    Route::get('/welcome', function () {
        return view('welcome');
    })->name('welcome');
});

Route::get('/auth/github', [GitHubController::class, 'gitRedirect']);
Route::get('/auth/github/callback', [GitHubController::class, 'gitCallback']);
