$(document).ready(function(){
    // Activate tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Select/Deselect checkboxes
    var checkbox = $('table tbody input[type="checkbox"]');
    $("#selectAll").click(function(){
        if(this.checked){
            checkbox.each(function(){
                this.checked = true;
            });
        } else{
            checkbox.each(function(){
                this.checked = false;
            });
        }
    });
    checkbox.click(function(){
        if(!this.checked){
            $("#selectAll").prop("checked", false);
        }
    });

    getLot()

});
function getLot(){
    $('tbody').find('td').remove();


    $.ajax({
        url: "api/lots", success: function (response) {

            var data = response.data
            console.log(response)
            console.log(data);
            for (let value of data) {

                var cat = value.categotries


                for(let val of cat){
                    $("select").append(
                        '<option value="'+val.id+'">'+val.name+'</option>\n'

                    )    }


                $("table").append('<tr>' +


                    '<td>' + value.id + '</td>' +

                    '<td>' + value.name + '</td>' +
                    '<td>' + value.description + '</td>' +
                    '<td><label>'+'category'+'</label><select></select> </td>' +
                    '<td>' +
                    '<a class="btn btn-success editLot" data-bs-toggle="modal" data-bs-target="#EditLot" data-id="'+value.id+'" title="Edit"><i class="lar la-edit"></i></a>' +
                    '<a class="btn btn-danger lotdel" data-id="'+value.id+'" data-name="'+value.name+'" data-description="'+value.description+'" title="Delete" ><i>&#xE872;</i></a>' +
                    '</td>'
                )

            }
        }
    })
}
$('body').on('click', '.catlist', function () {
    console.log('jlol')
    getCat()

})
$('body').on('click', '.lotlist', function () {
    console.log('jlol')
    getLot()

})
$(document).on('click', '.editLot', function (){

    let id = $(this).data('id')
    let name = $(this).data('name')
    let description = $(this).data('description')
    $('#idEditLot').val(id)
    $('#nameEditLot').val(name)
    $('#descEditLot').val(description)
    console.log(id)
})

/*  ---- DELETE LOT FUNCTION ---- */

$('body').on('click', '.lotdel', function (e) {
    e.preventDefault()

    let lot_id = $(this).data('id');
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


/* ---- ADD  LOT FUNCTION  ---- */


$('body').on('click', '.add_lot', function (e) {
    e.preventDefault();
    let name = $('#nameAddLot').val()
    let description = $('#descAddLot').val()

    $.ajax({
        url: "api/lots",
        data: {

            name: name,
            description: description,
        },
        type: "POST",


        success: function (data) {

            console.log(data)

            getLot()

        },
        error: function (data) {
            console.log('Error:', data);

        }

    });
})


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

$('body').on('click', '.lotdel', function (e) {
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

/*  ----CATEGORY FUNCTIONS----  */

$(document).on('click', '.editCat', function (){

    let id = $(this).data('id')
    let name = $(this).data('name')

    $('#idEditCat').val(id)
    $('#nameEditCat').val(name)

    console.log(id)
})


/*  ----LIST OF CATEGORIES FUNCTIONS----  */

function getCat(){
    $('tbody').find('td').remove();


    $.ajax({
        url: "api/categories", success: function (response) {

            var data = response.data
            console.log(response)
            console.log(data);
            for (let value of data) {

                var cat = value.lots


                for(let val of cat){
                    $("select").append(
                        '<option value="'+val.id+'">'+val.name+'</option>\n'

                    )    }


                $("table").append('<tr>' +


                    '<td>' + value.id + '</td>' +

                    '<td>' + value.name + '</td>' +

                    '<td>     </td>' +

                    '<td><label>'+'category'+'</label><select></select> </td>' +
                    '<td>' +
                    '<a class="btn btn-success editCat" data-bs-toggle="modal" data-bs-target="#EditCatModal" data-id="'+value.id+'" title="Edit"><i class="lar la-edit"></i></a>' +
                    '<a class="btn btn-danger catdel" data-id="'+value.id+'" data-name="'+value.name+'"  title="Delete" ><i>&#xE872;</i></a>' +
                    '</td>'





                )

            }
        }
    })
}

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


/* ---- ADD category FUNCTION  ---- */


$('body').on('click', '.add_lot', function (e) {
    e.preventDefault();
    let name = $('#nameAddLot').val()
    let description = $('#descAddLot').val()

    $.ajax({
        url: "api/lots",
        data: {
            description: description,
            name: name,
        },
        type: "POST",


        success: function (data) {

            console.log(data)

            getCat()

        },
        error: function (data) {
            console.log('Error:', data);

        }

    });
})

/*  ----EDIT CATEGORY FUNCTION----  */



$('body').on('click', '.edit_cat', function (e) {
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
