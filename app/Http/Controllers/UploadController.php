<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    //
    public function index()
    {
        $imgs = glob("storage/*.*");
        return view('admin/img', compact('imgs'));
    }

    // 画像の登録
    public function store(Request $request)
    {
        $file_name = $request->file('file')->getClientOriginalName();
        $request->file('file')->storeAs('public', $file_name);
        $imgs = glob("storage/*.*");

        return view('admin/img', compact('imgs'));
    }

    // 画像の削除
    public function delete_file(Request $request)
    {
        $index = $request->del_id;
        Storage::delete($index);
        $imgs = glob("storage/*.*");


        return view('admin/img', compact('imgs'));
    }
}
