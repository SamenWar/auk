<div class="modal fade" id="EditCatModal" tabindex="-1" aria-labelledby="EditCatModal" aria-hidden="true">
    <form action="#" method="post" id="EditCatModal">
        @csrf
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addModalLabel">Редактирование категории</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>
                <div class="modal-body">
                    <div class="errMsgContainer"></div>
                    <div class="form-group">
                        <label for="nameEditLot">Название категории</label>
                        <input class="form-control" id="nameAddCat" name="nameEditCat" type="text" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                    <button type="submit" class="btn btn-primary edit_cat" data-bs-dismiss="modal">Добавить Категорию</button>
                </div>
            </div>
        </div>
    </form>
</div>
