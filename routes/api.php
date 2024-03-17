<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\TagController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/products', [ProductController::class, 'index']);
Route::get('/featured', [ProductController::class, 'featured']);
Route::get('/products/details/{id}', [ProductController::class, 'show']);

Route::get('/products/search/{search_query}', [ProductController::class, 'search']);
Route::get('/products/filter-by-color/{color}', [ProductController::class, 'filterByColor']);
// Route::get('/products/filter-by-tag/{tag_id}', [ProductController::class, 'filterByTag']);
Route::get('/products/filter-by-tags', [ProductController::class, 'filterByTags']);

Route::get('/products/tags', [TagController::class, 'index']);