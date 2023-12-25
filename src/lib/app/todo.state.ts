import type { Todo } from "$lib/types";
import { writable, type Writable } from "svelte/store";

export type TodoStore = Writable<Todo[]>;

export function createTodoStore() {
  const store = writable<Todo[]>([]);
  return store;
}