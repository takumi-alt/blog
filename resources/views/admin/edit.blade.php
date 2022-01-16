<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- tailwindcss -->
    <link href="../css/app.css" rel="stylesheet">

    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <!-- ここからハイライトjs -->
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/base16/atelier-cave-light.min.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js"></script>
    <script>
        hljs.highlightAll();
    </script>
    <title>Document</title>
</head>

<body>
    <div class="flex bg-regal-black">
        <!-- 記入欄 -->
        <div class="flex-1 bg-regal-black border-r-2 border-gray-600">
            <div class="mx-6">
                <button class="bg-regal-white w-24 h-8 mt-4 rounded-lg">
                    <a href="/top" class="w-full h-full text-regal-black">DashBoadへ</a>
                </button>
                <form action="{{ route('update', ['id' => $update['id'] ]) }}" method="POST">
                    @csrf
                    <div>
                        <p class="text-regal-white mb-0 mt-4">title</p>
                        <input cols="76" id="title" name="title" class="block rounded-2xl w-full" value="{{ $update['title'] }}">
                    </div>

                    <div class="flex justify-between mb-8">
                        <!-- アイキャッチ画像 -->
                        <div>
                            <p class="text-regal-white mb-0 mt-4">img</p>
                            <input id="file" name="filepath" class="rounded-2xl" value="{{ $update['filepath'] }}">
                        </div>
                        <!-- created_at -->
                        <div>
                            <p class="text-regal-white mb-0 mt-4">created_at</p>
                            <input id="time" name="created_at" class="rounded-2xl w-full" value="{{ $update['created_at'] }}">
                        </div>
                        <!-- 記事のpath -->
                        <div>
                            <p class="text-regal-white mb-0 mt-4">path</p>
                            <input id="id" name="path" class="rounded-2xl w-20" value="{{ $update['path'] }}">
                        </div>
                        <!-- id -->
                        <div>
                            <!-- <p class="text-regal-white mb-0 mt-4">id</p> -->
                            <input id="id" name="id" class="rounded-2xl w-8 hidden" value="{{ $update['id'] }}">
                        </div>
                        <!-- category -->
                        <div>
                            <p class="text-regal-white mb-0 mt-4">category</p>
                            <select id="category" name="category" class="rounded-2xl w-20">
                                @foreach($categorys as $category)
                                <option>{{$category['category']}}</option>
                                @endforeach
                            </select>
                        </div>
                        <!-- 投稿status -->
                        <div>
                            <p class="text-regal-white mb-0 mt-4">status</p>
                            <select name="status" class="rounded-2xl" value="{{ $update['status'] }}">
                                <option value="1" lavel="1">1</option>
                                <option value="2" lavel="2">2</option>
                            </select>
                        </div>
                    </div>
                    <textarea id="user_answer_code" name="content" cols="76" rows="17" class="block rounded-2xl">{{ $update['content'] }}</textarea>
                    <button type="submit" class="block bg-regal-white font-black rounded-xl text-regal-black w-16 h-8 mt-4">更新</button>
                </form>
            </div>
        </div>
        <!-- プレビュー -->
        <div class="flex-1 bg-regal-black">
            <div class="bg-regal-white mx-6 mt-10 transform scale-60 origin-top-left">
                <!-- head部分 -->
                <div class="flex justify-center items-center h-32 bg-white text-center relative">
                    <div class="absolute mx-0 flex">
                        <div class="w-24 h-24 rounded-part1 bg-regal-red mr-2"></div>
                        <div class="w-24 h-24 rounded-part2 bg-regal-green mr-2"></div>
                        <div class="w-24 h-24 rounded-part3 bg-regal-beige"></div>
                    </div>
                    <span class="text-5xl text-regal-black z-50">engineer blog</span>
                </div>
                <!-- navタグ部分 -->
                <div class="bg-white">
                    <div class="flex justify-center h-12 w-2/3 mx-auto">
                        <button class="text-regal-black h-12 font-mono text-xl my-auto pl-24 pr-24">home</button>
                        <button class="text-regal-black h-12 font-mono text-xl my-auto pl-24 pr-24">search</button>
                        <button class="text-regal-black h-12 font-mono text-xl my-auto pl-24 pr-24">contact</button>
                        <button class="text-regal-black h-12 font-mono text-xl my-auto pl-24 pr-24">info</button>
                    </div>
                </div>
                <div class="bg-regal-beige">
                    <div class="pt-8 w-4/5 mx-auto">
                        <!-- title部分 -->
                        <div id="title_markdown" class=""></div>
                        <!-- アイキャッチ画像部分 -->
                        <img id="image" width="600" class="mx-auto">
                        <!-- 本文部分 -->
                        <div id="code_markdown" class=""></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // img_fileの更新
        const filepath = document.getElementById('file');
        const filepath_value = `${filepath.value}`;

        function onload_filepath_load() {
            document.getElementById('image').src = `/storage/${filepath_value}`;
        }

        function filepath_load() {
            filepath.addEventListener('input', () => {
                const filepath_value = `${filepath.value}`;
                document.getElementById('image').src = `/storage/${filepath_value}`;
            })
            console.log(filepath);
        }


        // titleの更新
        const title = document.getElementById('title');
        const title_markdown = document.getElementById('title_markdown');

        function onload_markdownTitle() {
            const title_value = `${title.value}`;
            console.log(title_value);
            title_markdown.innerHTML = marked.parse(title_value);
        }

        function markdownTitle() {
            title.addEventListener('input', () => {
                onload_markdownTitle();
            });
        }


        // contentの更新
        const codeInput = document.getElementById('user_answer_code'); // idが'user_answer_code'のもの(textarea)
        const codeMarkdown = document.getElementById('code_markdown'); // idが'code_markdown'のもの(空のdiv)

        function onload_markdownCode() {
            const HTML = `${codeInput.value}`;
            if (HTML.match(/```/)) {
                codeMarkdown.innerHTML = marked.parse(HTML)
                const pre_code_nodes = document.querySelectorAll("pre code"); // ここがポイント
                for (let i = 0; i < pre_code_nodes.length; ++i) { // ここがポイント
                    hljs.highlightBlock(pre_code_nodes[i]); // ここがポイント
                }
            } else {
                codeMarkdown.innerHTML = marked.parse(HTML)
            }
        }

        function markdownCode() {
            if (codeInput == null || codeMarkdown == null) {
                return; // 該当ページでない場合はアーリーリターン
            }
            codeInput.addEventListener('input', () => {
                onload_markdownCode();
            });

        };

        window.addEventListener("load", markdownCode);
        window.addEventListener("load", markdownTitle);
        window.addEventListener("load", filepath_load);

        // ページ読み込み時に発動させる↓
        window.onload = function() {
            onload_markdownTitle();
            onload_markdownCode();
            onload_filepath_load();
        }
    </script>

</body>

</html>