



/*  ---- DELETE category FUNCTION ---- */

$('body').on('click', '.catdel', function (e) {
    e.preventDefault()

    let cat_id = $(this).data('id');
    console.log(cat_id)

    $.ajax({
        type: "DELETE",
        url: "api/categories/"+cat_id,
        success: function ( ) {
            getCat()
        },
        error: function (data) {
            console.log('Error:', data);
        }
    });
});




/*  ----EDIT LOT FUNCTION----  */



$('body').on('click', '.edit_lot', function (e) {
    e.preventDefault();
    let id = $('#idEditLot').val()
    let name = $('#nameEditLot').val()
    let description = $('#descEditLot').val()
    console.log(id+' '+name+' '+description)
    $.ajax({
        url: "api/lots/"+id,
        data: {
            description: description,
            name: name,
        },
        type: "PUT",


        success: function (data) {

            console.log(data)


            getLot()

        },
        error: function (data) {
            console.log('Error:', data);

        }

    });
})



/*  ----DELETE LOT FUNCTION----  */

$('body').on('click', '.catdel', function (e) {
    e.preventDefault()
    let lot_id = $(this).data('id');

    confirm("Are You sure want to delete !");
    console.log(lot_id)

    $.ajax({
        type: "DELETE",
        url: "api/lots/"+lot_id,
        success: function ( ) {
            getLot()
        },
        error: function (data) {
            console.log('Error:', data);
        }
    });
});



