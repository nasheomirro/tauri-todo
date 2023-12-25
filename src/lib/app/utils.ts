import type { Tag, Todo } from '$lib/types';

export function getTagById(tags: Tag[], id: string) {
	return tags.find((tag) => tag.id === id);
}

export function getTodoById(todos: Todo[], id: string) {
	return todos.find((todo) => todo.id === id);
}

export function getTodoByTag(todos: Todo[], tag: Tag) {
	return todos.filter((todo) => todo.tags.find((_tag) => _tag.id === tag.id));
}

export function sortTodosByLatest(todos: Todo[]) {
	return [...todos].sort((a, b) => a.dateCreated.getTime() - b.dateCreated.getTime());
}

export function sortTagsByLexical(tags: Tag[]) {
	return [...tags].sort((a, b) => (a.name > b.name ? 1 : -1));
}
