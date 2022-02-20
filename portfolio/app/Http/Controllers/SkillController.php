<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Skill;

class SkillController extends Controller
{
    public function index(){
        return Skill::all();
    }

    public function create(Request $request){
        $skills = new Skill();
        $skills->name = $request->input('name');
        $skills->point = $request->input('point');

        $skills->save();
        return response()->json($skills);
    }
}