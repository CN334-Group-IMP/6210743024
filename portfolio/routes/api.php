<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SkillController;

Route::get('/profile',[ProfileController::class, 'index']);
Route::get('/skill',[SkillController::class, 'index']);

Route::post('/skill',[SkillController::class, 'create']);