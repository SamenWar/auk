// get lots




$("#lots").click(function(){
    $.ajax({
        url: "api/lots", success: function (response) {
            $('#lots').remove();
            $('#but').append('<button type="button" id="category" class="btn btn-info add-new">Categories</button>\n')
            $('tbody').find('td').remove();
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
                    '<a class="add" title="Add" data-toggle="tooltip" value="'+value.id+'"><i class="material-icons">&#xE03B;</i></a>\n' +
                    '<a class="edit" title="Edit" data-toggle="tooltip" value="'+value.id+'"><i class="material-icons">&#xE254;</i></a>\n' +
                    '<a class="delete" title="Delete" data-toggle="tooltip" value="'+value.id+'"><i class="material-icons">&#xE872;</i></a>\n' +
                    '</td>'





                )

            }
        }
    })
})


;
