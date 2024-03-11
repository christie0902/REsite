<?php

use App\Http\Controllers\Admin\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/


Route::group(['middleware' => 'can:admin'], function () {


    // Route::get('/admin', function () {
    //     return view('admin.index');
    // })->name('admin.index');

    // Route::get('/authors/create', ['App\Http\Controllers\Admin\AuthorController', 'create'])->name('admin.author.create');
    // Route::post('/authors/store', ['App\Http\Controllers\Admin\AuthorController', 'store'])->name('admin.author.store');

    // Route::get('/books', [BookController::class, 'index'])->name('admin.book.index');
    // Route::get('/books/create', ['App\Http\Controllers\Admin\BookController', 'edit'])->name('admin.book.create');
    // Route::get('/books/edit/{id}', ['App\Http\Controllers\Admin\BookController', 'edit'])->name('admin.book.edit');
    // Route::post('/books/store', ['App\Http\Controllers\Admin\BookController', 'store'])->name('admin.book.store');
    // Route::put('/books/update/{id?}', ['App\Http\Controllers\Admin\BookController', 'store'])->name('admin.book.update');
    // Route::get('/users', [UserController::class, 'index'])->name('users.list');
    // Route::delete('/books/{book_id}/reviews/{id}', [BookController::class, 'deleteReview'])->name('review.delete');
});