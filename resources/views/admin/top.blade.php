<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../css/app.css" rel="stylesheet">
    <title>Document</title>
</head>

<body class="">
    <h1>topページです</h1>
    <div class="border-2 border-regal-red w-1/2 mx-auto mt-10">
        @foreach ($posts as $post)
        <div class="mb-8 mx-auto w-1/2 flex justify-between">
            <div>
                <span class="text-regal-white">{{ $post['id'] }}</span>
            </div>
            <div>
                <span class="text-regal-white">{{ $post['title'] }}</span>
            </div>
            <div>
                <a href="http://localhost:8000/edit/{{$post['id']}}" class="bg-regal-indigo text-regal-white">Edit</a>
            </div>
            <div>
                <form action="/delete" method="POST" class="inline-block">
                    <button type="submit" class="text-regal-white bg-regal-indigo">delete</button>
                </form>
            </div>

        </div>
        @endforeach
    </div>


</body>

</html>