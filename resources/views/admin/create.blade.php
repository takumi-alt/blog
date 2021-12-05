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

<body>
    <div class="flex">
        <!-- 記入欄 -->
        <div class="flex-1 bg-red-600">
            <div class="mx-6">
                <form action="/store" method="POST">
                    @csrf
                    <div>
                        <p class="">title</p>
                        <input cols="76" id="title" name="title" class="block">
                    </div>

                    <div class="flex justify-between">
                        <!-- アイキャッチ画像 -->
                        <div>
                            <p>img</p>
                            <input id="file" name="filepath" class="">
                        </div>
                        <!-- 記事のpath -->
                        <div>
                            <p>path</p>
                            <input id="id" name="path" class="">
                        </div>
                        <!-- 投稿status -->
                        <div>
                            <p>status</p>
                            <select name="status" class="">
                                <option value="1" lavel="1">1</option>
                                <option value="2" lavel="2">2</option>
                            </select>
                        </div>
                    </div>
                    <textarea id="user_answer_code" name="content" cols="76" rows="20" class="block"></textarea>
                    <button type="submit" class="btn block bg-green-600">保存</button>
                </form>
            </div>
        </div>
        <!-- プレビュー -->
        <div class="flex-1 bg-blue-400">
            <div class="h-64 bg-pink-600 mx-6 mt-10">
                <div id="title_markdown" class="px-4">title</div>
                <!-- <h1 class="text-green-500">takumi</h1> -->
                <div id="code_markdown" class="px-4">hello</div>
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