<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ApiController extends Controller
{
    //
    public function contact(Request $request)
    {
        $data = $request->all();

        $new_contact = Contact::insertGetId(['name' => $data['name'], 'mail' => $data['mail'], 'title' => $data['title'], 'content' => $data['content']]);

        return redirect('/blog/contact');
    }
}
