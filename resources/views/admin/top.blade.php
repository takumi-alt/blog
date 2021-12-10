<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../css/app.css" rel="stylesheet">
    <title>Document</title>
</head>

<body class="bg-regal-black">
    <div class="mt-8">
        <h1 class="text-regal-white w-4/5 border-regal-white mx-auto">DashBoard</h1>
    </div>
    <div class="border-2 border-gray-500 w-4/5 mx-auto mt-10">
        @foreach ($posts as $post)
        <div class="h-12 mx-auto border-b-2 border-gray-500">
            <div class="h-12 inline-block w-20 ml-8 border-r-2 border-gray-500">
                <span class="text-regal-white">{{ $post['id'] }}</span>
            </div>
            <div class="h-12 inline-block w-2/3 border-r-2 border-gray-500">
                <span class="text-regal-white">{{ $post['title'] }}</span>
            </div>
            <div class="h-12 inline-block w-28 border-r-2 border-gray-500">
                <a href="http://localhost:8000/edit/{{$post['id']}}" class="bg-regal-indigo text-regal-white mr-32">Edit</a>
            </div>
            <div class="h-12 inline-block w-24">
                <form action="/delete" method="POST" class="inline-block">
                    <button type="submit" class="text-regal-white">delete</button>
                </form>
            </div>

        </div>
        @endforeach
    </div>
    <div class="w-4/5 mx-auto">
        <a href="http://localhost:8000/create" class="bg-gray-500 rounded-2xl">
            <span class="text-regal-white p-12 text-3xl">create</span>
        </a>
    </div>


</body>

</html>