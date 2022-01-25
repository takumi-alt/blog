<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\Contact;
use App\Models\Post;
use App\Models\Category;

class ApiController extends Controller
{
    //
    public function contact(Request $request)
    {
        $data = $request->all();

        $new_contact = Contact::insertGetId(['name' => $data['name'], 'mail' => $data['mail'], 'title' => $data['title'], 'content' => $data['content']]);

        return redirect('/blog/contact');
    }

    public function article($path)
    {
        $posts = Post::where('path', $path)->first();
        $category = Category::where('id', $posts['category_id'])->first();
        $date = Carbon::createFromFormat('Y-m-d H:i:s', $posts->created_at)->format('Y-m-d');

        return ['posts' => $posts, 'date' => $date, 'category' => $category['category']];
    }

    public function all()
    {

        $posts = Post::where('status', 1)->orderBy('id', 'desc')->get();
        // 記事の投稿日だけを抽出するためにcreated_atに投稿日を配列で入れて渡す
        $created_at = [];
        $categorys = [];

        foreach ($posts as $post) {
            $date = Carbon::createFromFormat('Y-m-d H:i:s', $post->created_at)->format('Y-m-d');
            array_push($created_at, $date);

            $category = Category::where('id', $post['category_id'])->first();
            array_push($categorys, $category['category']);
        }

        return response()->json(['posts' => $posts, 'date' => $created_at, 'category' => $categorys]);
    }

    public function category($path)
    {
        $category_line = Category::where('category', $path)->first();
        $posts = Post::where('status', 1)->where('category_id', $category_line['id'])->get();

        $created_at = [];
        $categorys = [];

        foreach ($posts as $post) {
            $date = Carbon::createFromFormat('Y-m-d H:i:s', $post->created_at)->format('Y-m-d');
            array_push($created_at, $date);

            $category = Category::where('id', $post['category_id'])->first();
            array_push($categorys, $category['category']);
        }
        return response()->json(['posts' => $posts, 'date' => $created_at, 'category' => $categorys]);
    }
}
