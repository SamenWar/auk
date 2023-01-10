<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
</head>
        <body>
        <div class="container">
            <div class="row">
                    <div class="col-md-2">


                    </div>

                    <div class="col-md-8">

                    <h2 class="my-5 text-center">Аукцион</h2>
                    <div class="table-data">
                        <button type="button" class="btn lotlist btn-primary">
                            Список Лотов
                        </button>
                        <button type="button" class="btn catlist btn-primary">
                            Список Категорий
                        </button>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addCatModal">
                            Добавить Категорию
                        </button>
                            <table class="table table-bordered">
                                <thead>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
                                    Добавить Лот
                                </button>


                                <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Имя</th>
                                        <th scope="col">Описание</th>
                                        <th scope="col">Категории</th>
                                        <th scope="col">Действия</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Sun</td>
                                        <td>glasses</td>
                                        <td><a class="btn btn-success editLot" data-bs-toggle="modal" data-bs-target="#addModal" title="Edit"><i class="lar la-edit"></i></a>
                                            <a class="btn btn-danger lotdel" title="Delete" ><i class="material-icons">&#xE872;</i></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include('index/modal_add_lot')
        @include('index/modal_edit_lot')
        @include('index/modal_edit_cat')
        @include('index/modal_add_cat')
        <script>
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
        </script>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </body>
</html>
<?php
