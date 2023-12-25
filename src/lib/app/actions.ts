import { get } from 'svelte/store';

import type { Tag, Todo } from '$lib/types';
import type { TagStore } from './tags.state';
import type { TodoStore } from './todo.state';

export class Actions {
	#todos: TodoStore;
	#tags: TagStore;

	constructor(todos: TodoStore, tags: TagStore) {
		this.#todos = todos;
		this.#tags = tags;
	}

	addTodo(todo: Todo) {
		this.#todos.update((todos) => [...todos, todo]);
	}

	updateTodo(todo: Todo) {
		const todos = get(this.#todos);
		if (todos.find((_todo) => _todo.id === todo.id)) {
			this.#todos.update((todos) => todos.map((_todo) => (_todo.id === todo.id ? todo : _todo)));
		}
	}

	deleteTodo(todo: Tag) {
		this.#todos.update((todos) => todos.filter((_todo) => _todo.id !== todo.id));
	}

	addTag(tag: Tag) {
		this.#tags.update((tags) => [...tags, tag]);
	}

	updateTag(tag: Tag) {
		const tags = get(this.#tags);
		if (tags.find((_tag) => _tag.id === tag.id)) {
			this.#tags.update((tags) => tags.map((_tag) => (_tag.id === tag.id ? tag : _tag)));
		}
	}

	deleteTag(tag: Tag) {
		this.#tags.update((tags) => tags.filter((_tag) => _tag.id !== tag.id));
		this.#todos.update((todos) =>
			todos.map((todo) => ({
				...todo,
				tags: todo.tags.filter((_tag) => _tag.id !== tag.id)
			}))
		);
	}
}
