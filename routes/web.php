<?php

use App\Http\Controllers\Admin\MainController;
use Illuminate\Support\Facades\Route;



Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix'=>'admin','namespace'=>'Admin'], function(){
    Route::get('/',[MainController::class,'index'])->name('admin.index');    
});