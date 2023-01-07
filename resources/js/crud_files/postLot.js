

/*------------------------------------------
--------------------------------------------
create Product Code
--------------------------------------------
--------------------------------------------*/
$('#LotForm').on('submit', function (e) {
    e.preventDefault();
    var data =  new FormData(this);


    $.ajax({
        url: "api/lots ",
        data:data,
        type: "POST",
        dataType: 'json',
        processData:false,
        contentType: false,
        success: function (data) {
            console.log(data)
            alert('huray')

            table.draw();

        },
        error: function (data) {
            console.log('Error:', data);
            $('#saveBtn').html('Save Changes');
        }
    });
});


$('body').on('click', '.lotdel', function (e) {
    e.preventDefault()

    let lot_id = $(this).data('id');

    $.ajax({
        type: "DELETE",
        url: "api/lots/"+lot_id,
        success: function ( ) {
            ajaxCat()
        },
        error: function (data) {
            console.log('Error:', data);
        }
    });
});


/*------------------------------------------
--------------------------------------------
edit Product Code
--------------------------------------------
--------------------------------------------*/
$('body').on('click', '.lotdel', function (e) {
    e.preventDefault()
    $('.modal-body').append('<select class="form-select" id="add" aria-label="Default select example">\n'
    )

    let lot_id = $(this).data('id');
    $.ajax({
        url: "api/lots"+lot_id, success: function (response) {

            var data = response.data

            var cat = value.categotries


            for(let val of cat){
                $("#add").append(
                    '<option value="'+val.id+'">'+val.name+'</option>\n'


                )
            }
        }
    })
    $.ajax({
            type: "PUT",
            url: "api/lots/" + lot_id,
            data:data,
            dataType: 'json',
            processData:false,
            contentType: false,
            success: function () {
                ajaxCat()
            },
            error: function (data) {
                console.log('Error:', data);
            }
        }
    )
})

$.ajax({



})
