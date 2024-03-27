<?php

use App\Http\Controllers\Api\DashboardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\TagController;
use App\Http\Controllers\Api\CategoryController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\Api\UserAddressController;
use App\Http\Controllers\FileUploadController;
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
  //  dd(Auth::user());
    return $request->user();
});
Route::middleware('auth:sanctum')->get('/user/address', [UserAddressController::class, 'show']);

Route::get('/products', [ProductController::class, 'index']);
Route::get('/featured', [ProductController::class, 'featured']);
// Route::get('/products/details/{id}', [ProductController::class, 'show']);
Route::get('/products/details/{id}', [ProductController::class, 'getDetails']);

Route::get('/products/search/{search_query}', [ProductController::class, 'search']);
Route::get('/products/filter-by-color/{color}', [ProductController::class, 'filterByColor']);
// Route::get('/products/filter-by-tag/{tag_id}', [ProductController::class, 'filterByTag']);
Route::get('/products/filter-by-tags', [ProductController::class, 'filterByTags']);

Route::get('/products/tags', [TagController::class, 'index']);
Route::get('/products/categories', [CategoryController::class, 'index']);

Route::post('/checkout', [CheckoutController::class, 'process']);
Route::get('/orders/{order}', [OrderController::class, 'show'])->name('orders.show');
Route::post('/upload-image', [FileUploadController::class, 'storeUploads']);