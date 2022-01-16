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
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/atom-one-light.min.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js"></script>
    <script>
        hljs.highlightAll();
    </script>

    <title>Document</title>
</head>

<body class="bg-regal-black">
    <div class="flex">
        <!-- 記入欄 -->
        <div class="bg-regal-black border-r-2 border-gray-600">
            <div class="mx-6">
                <button class="bg-regal-white w-24 h-8 mt-4 rounded-lg">
                    <a href="/top" class="w-full h-full text-regal-black">DashBoadへ</a>
                </button>
                <form action="/store" method="POST">
                    @csrf
                    <div>
                        <p class="text-regal-white mb-0 mt-4">title</p>
                        <input cols="76" id="title" name="title" class="block rounded-2xl w-full">
                    </div>

                    <div class="flex justify-between mb-8">
                        <!-- アイキャッチ画像 -->
                        <div>
                            <p id="img" class="text-regal-white mb-0 mt-4">img_path</p>
                            <input id="file" name="filepath" class="rounded-2xl">
                        </div>
                        <!-- created_at -->
                        <div>
                            <p class="text-regal-white mb-0 mt-4">created_at</p>
                            <input id="time" name="created_at" class="rounded-2xl w-full">
                        </div>
                        <!-- 記事のpath -->
                        <div>
                            <p class="text-regal-white mb-0 mt-4">path</p>
                            <input id="path" name="path" class="rounded-2xl w-20">
                        </div>
                        <!-- id -->
                        <div>
                            <!-- <p class="text-regal-white mb-0 mt-4">id</p> -->
                            <input id="id" name="id" class="rounded-2xl w-8 hidden">
                        </div>
                        <!-- 投稿status -->
                        <div>
                            <p class="text-regal-white mb-0 mt-4">status</p>
                            <select name="status" class="rounded-2xl">
                                <option value="1" lavel="1">1</option>
                                <option value="2" lavel="2">2</option>
                            </select>
                        </div>
                    </div>
                    <textarea id="user_answer_code" name="content" cols="76" rows="17" class="block rounded-2xl"></textarea>
                    <button type="submit" class="block bg-regal-white font-black rounded-xl text-regal-black w-16 h-8 mt-4">公開</button>
                </form>

            </div>
        </div>
        <!-- プレビュー -->
        <div class="bg-regal-black">
            <div class="bg-regal-white mx-6 mt-10 transform scale-60 origin-top-left">
                <!-- head部分 -->
                <div class="flex justify-center items-center h-32 bg-purple-600 text-center relative">
                    <div class="w-24 h-24 rounded-part1 bg-purple-300 absolute top-0 left-4"></div>
                    <div class="w-24 h-24 rounded-part2 bg-purple-400 absolute bottom-0 left-32"></div>
                    <div class="w-24 h-24 rounded-part3 bg-purple-500 absolute top-2 left-60"></div>
                    <span class="font-black text-5xl text-regal-white">engineer blog</span>
                </div>
                <!-- navタグ部分 -->
                <div class="bg-regal-white">
                    <div class="bg-regal-white flex justify-center h-12 w-2/3 mx-auto">
                        <p class="text-regal-black h-12 font-mono text-xl my-auto border-l-2 border-gray-300 pl-24 pr-24">home</p>
                        <p class="text-regal-black h-12 font-mono text-xl my-auto border-l-2 border-gray-300 pl-24 pr-24">search</p>
                        <p class="text-regal-black h-12 font-mono text-xl my-auto border-l-2 border-gray-300 pl-24 pr-24">contact</p>
                        <p class="text-regal-black h-12 font-mono text-xl my-auto border-l-2 border-gray-300 pl-24 pr-24 border-r-2">info</p>
                    </div>
                </div>
                <!-- ここから下に記事を反映する -->
                <div class="bg-gray-200">
                    <div class="bg-gray-200 pt-8 w-4/5 mx-auto">
                        <!-- title部分 -->
                        <div id="title_markdown" class=""></div>
                        <img id="image" width="600" class="mx-auto">
                        <!-- 本文部分 -->
                        <div id="code_markdown" class=""></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // 画像ファイルの読み込みを操作
        function filepath_load() {
            const filepath = document.getElementById('file');
            filepath.addEventListener('input', () => {
                const filepath_value = `${filepath.value}`;
                document.getElementById('image').src = `/storage/${filepath_value}`;
            })
            console.log(filepath);
        }


        function markdownTitle() {
            const title = document.getElementById('title');
            console.log(title);
            const title_markdown = document.getElementById('title_markdown');
            title.addEventListener('input', () => {
                const title_value = `${title.value}`;
                title_markdown.innerHTML = marked.parse(title_value);
            });
        }

        function markdownCode() {
            const codeInput = document.getElementById('user_answer_code'); // idが'user_answer_code'のもの(textarea)
            const codeMarkdown = document.getElementById('code_markdown'); // idが'code_markdown'のもの(空のdiv)
            if (codeInput == null || codeMarkdown == null) {
                return; // 該当ページでない場合はアーリーリターン
            }

            codeInput.addEventListener('input', () => {
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
            });

        };

        window.addEventListener("load", markdownCode);
        window.addEventListener("load", markdownTitle);
        window.addEventListener("load", filepath_load);
    </script>

</body>

</html>