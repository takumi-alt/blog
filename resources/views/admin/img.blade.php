<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <link href="../css/app.css" rel="stylesheet">
    <title>image</title>
</head>

<body class="bg-regal-black">
    <div class="w-2/3 mx-auto mt-12">
        <p class="text-regal-white text-3xl">imageファイルの管理</p>
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
        <img src="/storage/プログラミング.jpg" width="100" height="100">
        <a href="/storage/プログラミング.jpg">aaaa</a>
    </div>


</body>

</html>