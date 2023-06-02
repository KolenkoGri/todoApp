import {tbody, createTask} from './createElement.js';
import {userName,
  setStorage,
  dataStorage,
  stor,
  removeStorage,
  changeStorage} from './storage.js';

const addBtn = document.querySelector('.btn-primary');
const form = document.querySelector('.form-control');
addBtn.setAttribute('disabled', 'disabled');

const formBlock = () => {
  form.addEventListener('input', () => {
    if (form.value.trim()) {
      addBtn.removeAttribute('disabled');
    } else {
      addBtn.setAttribute('disabled', 'disabled');
    }
  });
};
let id = 1;

const allDelBtns = () => {
  const deleteBtn = document.querySelectorAll('.btn-danger');
  deleteBtn.forEach((el) => {
    el.addEventListener('click', (e) => {
      const agree = confirm('Вы действительно хотите удалить задачу?');
      if (agree) {
        const target = e.target;
        if (target.closest('.btn-danger')) {
          target.closest('tr').remove();
          const targetId =
            target.closest('tr').querySelector(`td:first-child`).textContent;
          removeStorage(userName, targetId);
        }
      }
    });
  });
};

const allSuccessBtn = () => {
  const successBtn = document.querySelectorAll('.btn.btn-success');
  successBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const target = e.target;
      if (target.closest('.btn.btn-success')) {
        target.closest('tr').className = 'table-success';
        target.closest('tr').querySelector('.task').className =
        'text-decoration-line-through';
        target.closest('tr').querySelector('td:nth-child(3)').textContent =
        'Выполнено';
      }
    });
  });
};

const allValueTd = () => {
  const allValueTd = document.querySelectorAll('.task');
  allValueTd.forEach((el) => {
    el.addEventListener('blur', () => {
      console.log(el.textContent);
      const newObj = {
        id: el.previousElementSibling.textContent,
        value: el.textContent,
      };
      changeStorage(userName, newObj);
    });
  });
};

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  id = stor !== [] ? dataStorage(userName) + 1 : 1;
  createTask(id, form.value);
  const newObj = {
    id,
    value: form.value,
  };
  setStorage(userName, newObj);
  form.value = '';
  id += 1;
  allDelBtns();
  allSuccessBtn();
  allValueTd();
  addBtn.setAttribute('disabled', 'disabled');
});

const resetBtn = document.querySelector('.btn.btn-warning');
resetBtn.addEventListener('click', (e) => {
  e.preventDefault();
  tbody.replaceChildren();
  id = 1;
  form.value = '';
  addBtn.setAttribute('disabled', 'disabled');
  localStorage.removeItem(userName);
});

export {
  addBtn,
  form,
  allDelBtns,
  resetBtn,
  allSuccessBtn,
  allValueTd,
  formBlock,
};
