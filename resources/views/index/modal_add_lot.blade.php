<!-- Кнопка-триггер модального окна -->

<!-- Модальное окно добавление лотов -->
<div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
    <form action="#" method="post" id="addModal">
        @csrf
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addModalLabel">Добаввление лота</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>
                <div class="modal-body">
                    <div class="errMsgContainer"></div>
                    <div class="form-group">
                        <label for="name">Название лота</label>
                        <input class="form-control" id="nameAddLot" type="text" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="name">Описание лота</label>
                        <input class="form-control" id="descAddLot" type="text" name="desc" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                    <button type="submit" class="btn btn-primary add_lot" data-bs-dismiss="modal">Добавить Лот</button>
                </div>
            </div>
        </div>
    </form>

</div>
