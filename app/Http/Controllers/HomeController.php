<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Post;
use App\Models\User;
use App\Models\Category;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function top()
    {
        return view('admin/top');
    }

    public function create()
    {
        return view('admin/create');
    }

    public function store(Request $request)
    {
        $data = $request->all();

        $user = Auth::user();
        $category = Category::where('category', $data['category'])->first();

        $exist_post = Post::where('id', $data['id'])->where('content', $data['content'])->first();
        if (empty($exist_psot)) {
            $new_post = Post::insertGetId(['id' => $data['id'], 'title' => $data['title'], 'path' => $data['path'], 'filepath' => $data['filepath'], 'status' => $data['status'], 'content' => $data['content'], 'created_at' => $data['created_at'], 'user_id' => $user['id'], 'category_id' => $category['id']]);
        } else {
            $new_post = $exist_post['id'];
        }
        return redirect()->route('top', compact('data'));
    }

    public function edit($id)
    {
        $update = Post::where('id', $id)->first();
        return view('admin/edit', compact('id', 'update'));
    }

    public function update(Request $request, $id)
    {
        $input = $request->all();
        $category = Category::where('category', $input['category'])->first();

        Post::where('id', $id)->update(['id' => $input['id'], 'title' => $input['title'], 'path' => $input['path'], 'filepath' => $input['filepath'], 'status' => $input['status'], 'content' => $input['content'], 'created_at' => $input['created_at'], 'category_id' => $category['id']]);
        return redirect()->route('top');
    }

    public function delete($id)
    {
        Post::where('id', $id)->delete();
        return redirect()->route('top');
    }
}
