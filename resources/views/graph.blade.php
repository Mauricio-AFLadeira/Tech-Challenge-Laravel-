<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Tech Challenge</title>

    <!-- Fonts -->
    <!-- <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet"> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/app.css">
</head>

<body>
    <div>
        <div class="header">
            <h1>Tech Challenge</h1>
            <hr />
        </div>

        <form>
            <div class="input-group mb-3">
                <span class="input-group-text">Owner</span>
                <input id="owner" type="text" class="form-control" aria-label="Sizing example input">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Repository</span>
                <input id="repo" type="text" class="form-control" aria-label="Sizing example input">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Branch</span>
                <input id="sha" type="text" class="form-control" aria-label="Sizing example input">
            </div>

            <input type="submit" id="send" class="btn btn-outline-success">
        </form>
        <div id="result"></div>

        <ul></ul>
    </div>

    <script src="/js/app.js"></script>
</body>

</html>