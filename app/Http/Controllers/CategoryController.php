<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    //
    public function category()
    {
        $categorys = Category::select('category')->get();
        return view('admin/category', compact('categorys'));
    }

    public function add(Request $request)
    {
        $data = $request->all();
        $categorys = Category::all();

        $exist_category = Category::where('id', $data['id'])->where('category', $data['category']);

        if (empty($exit_category)) {
            $new_category = Category::insertGetId(['id' => $data['id'], 'category' => $data['category']]);
        } else {
            $new_category = $exist_category['id'];
        }

        return redirect()->route('category', compact('data', 'categorys'));
    }

    public function delete($id)
    {
        Category::where('id', $id)->delete();
        return redirect()->route('category');
    }
}
