// $('#createNewProduct').click(function () {
//     $('#saveBtn').val("create-product");
//     $('#product_id').val('');
//     $('#productForm').trigger("reset");
//     $('#modelHeading').html("Create New Product");
//     $('#ajaxModel').modal('show');
// });

/*------------------------------------------
-------------------------------- ------------
Click to Edit Button
--------------------------------------------
--------------------------------------------*/
$('body').on('click', '.editcat', function () {
    var product_id = $(this).data('id');
    $.get("{{ route('products-ajax-crud.index') }}" +'/' + product_id +'/edit', function (data) {
        $('#modelHeading').html("Edit Product");
        $('#saveBtn').val("edit-user");
        $('#ajaxModel').modal('show');
        $('#product_id').val(data.id);
        $('#name').val(data.name);

    })
});

/*------------------------------------------
--------------------------------------------
Create Product Code
--------------------------------------------
--------------------------------------------*/

$('#CatForm').on('submit', function (e) {
    e.preventDefault();
    var data =  new FormData(this);


    $.ajax({
        url: "api/categories",
        data:data,
        type: "POST",
        dataType: 'json',
        processData:false,
        contentType: false,
        success: function (data) {
            console.log(data)
            alert('huray')
            // $('#productForm').trigger("reset");
            // $('#ajaxModel').modal('hide');
            table.draw();

        },
        error: function (data) {
            console.log('Error:', data);
            $('#saveBtn').html('Save Changes');
        }
    });
});

/*------------------------------------------
--------------------------------------------
Delete Product Code
--------------------------------------------
--------------------------------------------*/
$('body').on('click', '.catdel', function (e) {
    e.preventDefault()
    let cat_id = $(this).data('id');

    confirm("Are You sure want to delete !");
    console.log(cat_id)

    $.ajax({
        type: "DELETE",
        url: "api/categories/"+cat_id,
        success: function ( ) {
            ajaxCat()
        },
        error: function (data) {
            console.log('Error:', data);
        }
   });
});


