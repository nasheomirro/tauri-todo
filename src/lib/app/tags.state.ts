import type { Tag } from "$lib/types";
import { writable, type Writable } from "svelte/store";

export type TagStore = Writable<Tag[]>;

export function createTagStore() {
  const store = writable<Tag[]>([]);
  return store;
}