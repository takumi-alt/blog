<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categorys';

    public function posts()
    {
        return $this->hasMany('App\Models\Post');
    }

    public function myCategory()
    {
        $get = $this::select('category')->get();
        return $get;
    }
}
