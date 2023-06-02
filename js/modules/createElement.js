const container = document.querySelector('.app-container');
container.classList.add('vh-100', 'w-100', 'd-flex', 'align-items-center',
    'justify-content-center', 'flex-column');

const overlayModal = document.querySelector('.modal__overlay');
const modal = document.querySelector('.modal');

container.insertAdjacentHTML('beforeend', `
<h3>Todo App</h3>
    <form class="d-flex align-items-center mb-3">
      <label class="form-group me-3 mb-0">
        <input type="text" class="form-control" placeholder="ввести задачу">
      </label>

      <select class="btn me-3 btn-dark" name="important" id="important-select">
        <option value="table-light">Обычная</option>
        <option value="table-warning">Важная</option>
        <option value="table-danger">Срочная</option>
      </select>

      <button type="submit" class="btn btn-primary me-3">
        Сохранить
      </button>

      <button type="reset" class="btn btn-warning">
        Очистить
      </button>
    </form>

    <div class="table-wrapper">
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>№</th>
            <th>Задача</th>
            <th>Статус</th>
            <th>Действия</th>
          </tr>
        </thead>

        <tbody>
          
        </tbody>
      </table>
    </div>
`);

const tbody = document.querySelector('tbody');
const createTask = (id, value) => {
  tbody.insertAdjacentHTML('beforeend', `
    <tr class="table-light">
            <td>${id}</td>
            <td class="task" contenteditable ='true'>
              ${value}
            </td>
            <td>В процессе</td>
            <td>
              <button class="btn btn-danger">
                Удалить
              </button>
              <button class="btn btn-success">
                Завершить
              </button>
            </td>
          </tr>
    `);
};


export {
  tbody,
  createTask,
  overlayModal,
  modal,
};
