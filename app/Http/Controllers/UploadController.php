<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    //
    public function index()
    {
        $imgs = glob("storage/*.*");
        return view('admin/img', compact('imgs'));
    }

    public function store(Request $request)
    {
        $file_name = $request->file('file')->getClientOriginalName();
        $request->file('file')->storeAs('public', $file_name);
        $imgs = glob("storage/*.*");

        return view('admin/img', compact('imgs'));
    }
}
