<?php

use App\Http\Controllers\admin\ProductController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/


Route::group(['middleware' => 'can:admin'], function () {

    Route::get('/products', [ProductController::class, 'index'])->name('admin.products.index');
    
});