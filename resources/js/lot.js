// get lots
$("#lots").click(function() {
    $('#lots').remove();
    $('#addCat').remove();
    $('#con').append('<input type="submit" id="addLot" class="btn btn-success" value="Add">\n')
    $('#but').append('<button type="button" id="category" class="btn btn-danger">Categories</button>\n')
    $('tbody').find('td').remove();


    $.ajax({
        url: "api/lots", success: function (response) {

            var data = response.data
            console.log(data);
            for (let value of data) {

                var cat = value.categotries


                for(let val of cat){
                    $("select").append(
                        '<option value="'+val.id+'">'+val.name+'</option>\n'

                    )    }


                $("table").append('<tr>' +


                    '<td><label>'+'category'+'</label><select></select> </td>' +
                    '<td>' + value.name + '</td>' +
                    '<td>' + value.id + '</td>' +
                    '<td>' +

                    '<a class="editlot" title="Edit" data-toggle="tooltip" data-id="'+value.id+'"><i class="material-icons">&#xE254;</i></a>\n' +
                    '<a href="#deleteEmployeeModal" class="deletelot" data-id="'+value.id+'" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>\n'+
                    '</td>'





                )

            }
        }
    })
})


;
