// import {tbody, createTask} from "./modules/createElement.js";
import {startStorage} from './modules/storage.js';
import {allValueTd} from './modules/control.js';

const initToDo = () => {
  startStorage();
  allValueTd();
};

initToDo();
