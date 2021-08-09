'use strict';

import TodosController from '../scripts/controller/TodosController';

$(() => {
    new TodosController($('.container #todoList'));
});