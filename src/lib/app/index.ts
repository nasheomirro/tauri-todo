import { Actions } from './actions';
import { createTagStore } from './tags.state';
import { createTodoStore } from './todo.state';

export const tags = createTagStore();
export const todos = createTodoStore();

export const actions = new Actions(todos, tags);
