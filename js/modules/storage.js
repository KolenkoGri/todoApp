import {allDelBtns, allSuccessBtn, allValueTd, formBlock} from './control.js';
import {createTask} from './createElement.js';

const userName = prompt('Введите Ваше имя');
const getStorage = (key) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
const setStorage = (key, object) => {
  console.log(key);
  if (key === '' || key === null) {
    key = 'anonymous';
  }
  const data = getStorage(key);
  data.push(object);
  localStorage.setItem(key, JSON.stringify(data));
};

const changeStorage = (key, object) => {
  const data = getStorage(key);
  console.log(data, object.id);
  data.map((d) => {
    console.log(d);
    if (d.id.toString() === object.id) {
      console.log('ss');
      d.value = object.value;
    }
  });
  localStorage.setItem(key, JSON.stringify(data));
};

const dataStorage = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  if (data) {
    return data.length;
  }
  return 0;
};

const startStorage = () => {
  if (dataStorage(userName) !== 0) {
    getStorage(userName).map((el) => {
      createTask(el.id, el.value);
    });
  }
  allSuccessBtn();
  allDelBtns();
  allValueTd();
  formBlock();
};

const stor = getStorage(userName);

const removeStorage = (key, id) => {
  const data = getStorage(key);
  const dataFiltered = data.filter((item) =>
    item.id !== +id);
  localStorage.setItem(key, JSON.stringify(dataFiltered));
};

export {
  userName,
  getStorage,
  setStorage,
  dataStorage,
  startStorage,
  stor,
  removeStorage,
  changeStorage,
};
