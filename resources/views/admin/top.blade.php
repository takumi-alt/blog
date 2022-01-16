<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../css/app.css" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <title>Document</title>
</head>

<body class="bg-regal-black">
    <div class="mt-8 w-4/5 mx-auto flex justify-between">
        <h1 class="text-regal-white border-regal-white w-5/6">DashBoard</h1>
        <!-- logout -->
        <li class="nav-item dropdown list-none text-regal-white w-1/6">
            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                {{ Auth::user()->name }}
            </a>

            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                    {{ __('Logout') }}
                </a>

                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                    @csrf
                </form>
            </div>
        </li>
        <!--  -->
    </div>
    <div class="w-4/5 mx-auto">
        <a href="/create" class="bg-gray-500 rounded-2xl mr-2 my-2 py-2">
            <span class="text-regal-white p-6 text-3xl">create</span>
        </a>
        <a href="/upload" class="bg-gray-500 rounded-2xl m-2 py-2">
            <span class="text-regal-white p-6 text-3xl">insert image</span>
        </a>
        <a href="/category" class="bg-gray-500 rounded-2xl m-2 py-2">
            <span class="text-regal-white p-6 text-3xl">create category</span>
        </a>

    </div>
    <div class="border-2 border-gray-500 w-4/5 mx-auto mt-10">
        @foreach ($posts as $post)
        <div class="h-12 mx-auto border-b-2 border-gray-500">
            <div class="h-12 inline-block w-1/9 ml-8 border-r-2 border-gray-500">
                <span class="text-regal-white">{{ $post['id'] }}</span>
            </div>
            <div class="h-12 inline-block w-2/3 border-r-2 border-gray-500">
                <span class="text-regal-white">{{ $post['title'] }}</span>
            </div>
            <div class="h-12 inline-block w-1/9 border-r-2 border-gray-500">
                <a href="/edit/{{$post['id']}}" class="bg-regal-indigo text-regal-white mr-32">Edit</a>
            </div>
            <div class="h-12 inline-block w-1/9">
                <a href="/delete/{{$post['id']}}" class="bg-regal-indigo text-regal-white mr-32">delete</a>
            </div>

        </div>
        @endforeach
    </div>



</body>

</html>