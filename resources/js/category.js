
$('#category').click(function(){
    $('#category').remove();
    $('#addLot').remove();
    $('#con').append('<input type="submit" id="addCat" class="btn btn-success" value="Add">\n')
    $('#but').append('<button href="#" id="lots" class="btn btn-danger" data-toggle="modal"><span>Lots</span></button>\n')
    $('tbody').find('td').remove(  );
    ajaxCat()
});
