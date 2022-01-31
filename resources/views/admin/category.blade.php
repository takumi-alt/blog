<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <link href="../css/app.css" rel="stylesheet">
    <title>Document</title>
</head>

<body class="bg-regal-black">
    <div class="w-3/4 mx-auto mt-10">
        <h1 class="text-regal-white border-regal-white w-5/6">Category</h1>

        <button class="bg-regal-white w-24 h-8 mt-4 rounded-lg">
            <a href="/top" class="w-full h-full text-regal-black">DashBoadへ</a>
        </button>

        <form method="POST" action="/add" enctype="multipart/form-data">
            @csrf
            <div>
                <input type='id' name="id" class="hidden">
                <input type="text" name="category" class="w-32 mr-4">
                <button type="submit" class="bg-regal-white rounded-lg w-12 py-2">追加</button>
            </div>
        </form>

        <ul class="mt-12">
            @foreach($categorys as $category)
            <li class="mb-4 list-none">
                <div class="text-regal-white mb-4 inline mr-4">{{$category['category']}}</div>
                <div class="inline">
                    <a href="/delete/category/{{$category['id']}}" class="bg-gray-400 px-2 py-1 text-regal-white mr-32 rounded-xl">delete</a>
                </div>
            </li>
            @endforeach
        </ul>



    </div>
</body>

</html>