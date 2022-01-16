<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;
// use App\Views\Composers\MultiComposer;
use App\Models\Post;
use App\Models\Category;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        View::composer('*', function ($view) {
            $my_posts = new Post();
            $posts = $my_posts->myPost();

            $my_categorys = new Category();
            $categorys = $my_categorys->myCategory();

            $view->with('posts', $posts)->with('categorys', $categorys);
        });
    }
}
