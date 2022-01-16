<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function category()
    {
        return $this->belongTo('App\Models\Category');
    }

    public function myPost()
    {
        $get = $this::select('id', 'title', 'status')->get();
        return $get;
    }
}
