

$(Document).ready(function(){
    $('tbody').find('td').remove();
    ajaxCat()
});




$('#category').click(function(){
    $('#category').remove();
    $('#but').append('<button type="button" id="lots" class="btn btn-info add-new">Categories</button>\n')
    $('tbody').find('td').remove();
    ajaxCat()
});



function ajaxCat(){
    $.ajax({
        url: "api/categories", success: function (response) {

            var data = response.data
            console.log(data);
            for (let value of data) {

                var lots = value.lots

                for(let val of lots){
                    $("select").append(
                        '<option value="'+val.id+'">'+val.name+'</option>\n'

                    )    }


                $("table").append('<tr>' +


                    '<td><label>'+'lot'+'</label><select></select> </td>' +
                    '<td>' + value.name + '</td>' +
                    '<td>' + value.id + '</td>' +
                    '<td>' +
                    '<a class="add" title="Add" data-toggle="tooltip" value="'+value.id+'"><i class="material-icons">&#xE03B;</i></a>\n' +
                    '<a class="edit" title="Edit" data-toggle="tooltip" value="'+value.id+'"><i class="material-icons">&#xE254;</i></a>\n' +
                    '<a class="delete" title="Delete" data-toggle="tooltip" value="'+value.id+'"><i class="material-icons">&#xE872;</i></a>\n' +
                    '</td>'





                )

            }
        }
    })

}
