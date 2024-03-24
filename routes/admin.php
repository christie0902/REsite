<?php

use App\Http\Controllers\admin\ProductController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\Admin\DashboardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/


Route::group(['middleware' => 'can:admin'], function () {
    Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('admin.dashboard');
    Route::get('/products', [ProductController::class, 'index'])->name('admin.products.index');
    Route::delete('/products/{id}', [ProductController::class, 'delete'])->name('admin.products.delete');
    Route::get('/products/add', [ProductController::class, 'create'])->name('admin.products.add');
    Route::post('/products/store', [ProductController::class,'store'])->name('admin.products.store');
    Route::get('/admin/products/edit/{id}', [ProductController::class,'edit'])->name('admin.products.edit');
    Route::put('/admin/products/{id}', [ProductController::class,'update'])->name('admin.products.update');

    Route::get('/upload', [FileUploadController::class, 'showUploadForm']);
    Route::post('/upload',[FileUploadController::class, 'storeUploads'])->name('image.upload');
});