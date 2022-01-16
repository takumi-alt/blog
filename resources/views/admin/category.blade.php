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

        <form method="POST" action="/add" enctype="multipart/form-data">
            @csrf
            <div>
                <input type='id' name="id" class="hidden">
                <input type="text" name="category" class="w-32 mr-4">
                <button type="submit" class="bg-regal-white rounded-lg w-12 py-2">追加</button>

            </div>
        </form>



    </div>
</body>

</html>