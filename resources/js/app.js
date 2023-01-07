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
    $.ajax({
        url: "api/categories", success: function (response) {

            var data = response.data
            console.log(data);
            ajaxCat()
        }
    })
});







function ajaxCat(){
    $('tbody').find('td').remove();
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
                    '<a class="editcat" href="#editEmployeeModal"data-toggle="modal"  title="Edit" data-id="'+value.id+'"  value="'+value.id+'"><i data-toggle="tooltip" data-id="'+value.id+'" class="material-icons">&#xE254;</i></a>\n' +
                    '<a class="delete catdel" title="Delete" data-id="'+value.id+'"  value="'+value.id+'"><i class="material-icons">&#xE872;</i></a>\n' +
                    '</td>'



                )




            }
        }
    })

}

