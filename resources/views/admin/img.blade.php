<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <link href="../css/app.css" rel="stylesheet">
    <title>image</title>
</head>

<body class="bg-regal-black">

    <div class="w-5/6 mx-auto mt-12">
        <h1 class="text-regal-white border-regal-white">imageファイルの管理</h1>
        <button class="bg-regal-white w-24 rounded-lg mt-4 mb-4">
            <a href="/top" class="w-full h-full text-regal-black">DashBoadへ</a>
        </button>
        <form method="POST" action="/upload" enctype="multipart/form-data">
            @csrf
            <div class="flex">
                <div class="flex-1 w-1/2">
                    <input type="file" id="file" name="file" class="form-control">
                </div>
                <div class="flex-1 text-center">
                    <button type="submit" class="text-regal-white">アップロード</button>
                </div>
            </div>


        </form>
        <section class="flex flex-wrap mt-4">
            @foreach ($imgs as $index => $img)
            <form action="/delete_file" method="POST" class="w-84 mr-2 mb-4">
                @csrf
                <input type="value" value="{{$img}}" name="del_id" class="">
                <img src="{{$img}}" class="w-full">
                <a href="{{$img}}" class="text-regal-white">{{$img}}</a>
                <button type="submit" class="text-regal-black bg-regal-white rounded-md ml-4">Delete</button>
            </form>
            @endforeach
        </section>
    </div>


</body>

</html>