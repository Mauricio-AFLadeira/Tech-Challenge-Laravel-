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

        <h3>Insira seu user do Github</h3>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input id="name" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
        </div>

        <!-- <button type="submit" id="user" class="btn btn-outline-success">teste</button> -->
        <!-- <input type="submit" id="user" class="btn btn-outline-success"> -->

        <a type="submit" id="user" class="btn btn-outline-success">See repositories</a>
        <a href="{{route('graph')}}" class="btn btn-outline-success">Next</a>

        <ul></ul>
    </div>

    <script src="/js/welcome.js"></script>
</body>

</html>