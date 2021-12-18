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
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/monokai.min.css">
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
                <form action="/store" method="POST">
                    @csrf
                    <div>
                        <p class="text-regal-white mb-0 mt-4">title</p>
                        <input cols="76" id="title" name="title" class="block rounded-2xl w-full">
                    </div>

                    <div class="flex justify-between mb-8">
                        <!-- アイキャッチ画像 -->
                        <div>
                            <p class="text-regal-white mb-0 mt-4">img</p>
                            <input id="file" name="filepath" class="rounded-2xl">
                        </div>
                        <!-- 記事のpath -->
                        <div>
                            <p class="text-regal-white mb-0 mt-4">path</p>
                            <input id="id" name="path" class="rounded-2xl w-full">
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
                    <button type="submit" class="btn block border-red-400 rounded-2xl text-regal-white">公開</button>
                </form>
            </div>
        </div>
        <!-- プレビュー -->
        <div class="bg-regal-black">
            <div class="bg-regal-white mx-6 mt-10 transform scale-60 -translate-y-6 -translate-x-52">
                <!-- head部分 -->
                <div class="flex justify-center items-center h-32 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-center">
                    <h3 class="font-black text-6xl text-regal-white m-4">Engineer</h3>
                    <h3 class="font-black text-6xl text-regal-white m-4">Blog❕</h3>
                </div>
                <!-- navタグ部分 -->
                <div class="bg-regal-white">
                    <div class="bg-regal-white flex justify-center h-12 w-2/3 mx-auto">
                        <p class="text-regal-black hover:bg-gray-300 ... cursor-pointer h-12 font-mono font-black text-xl my-auto border-l-2 border-gray-300 pl-24 pr-24">home</p>
                        <p class="text-regal-black hover:bg-gray-300 ... cursor-pointer h-12 font-mono font-black text-xl my-auto border-l-2 border-gray-300 pl-24 pr-24">search</p>
                        <p class="text-regal-black hover:bg-gray-300 ... cursor-pointer h-12 font-mono font-black text-xl my-auto border-l-2 border-gray-300 pl-24 pr-24">contact</p>
                        <p class="text-regal-black hover:bg-gray-300 ... cursor-pointer h-12 font-mono font-black text-xl my-auto border-l-2 border-gray-300 pl-24 pr-24 border-r-2">info</p>
                    </div>
                </div>
                <!-- ここから下に記事を反映する -->
                <div class="bg-gray-200">
                    <div class="bg-gray-200 pt-8 w-4/5 mx-auto">
                        <!-- title部分 -->
                        <div id="title_markdown" class="">title</div>
                        <!-- 本文部分 -->
                        <div id="code_markdown" class="">hello</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
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
    </script>

</body>

</html>