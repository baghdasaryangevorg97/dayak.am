<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\UserInfoController;
use App\Http\Controllers;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::group(['middleware' => 'api'], function ($router) {
    Route::post('/signup', [App\Http\Controllers\UserInfoController::class, 'signUp']);
    Route::post('/signinForm', [App\Http\Controllers\UserInfoController::class, 'signinForm']);
    Route::post('/getMe', [App\Http\Controllers\UserInfoController::class, 'GetMe']);
    Route::post('/getGeneralInfo', [App\Http\Controllers\UserInfoController::class, 'getGeneralInfo']);
});




