<script lang="ts">
	import { nanoid } from 'nanoid';

	import { actions, tags, todos } from '$lib/app';
	import type { Tag, Todo } from '$lib/types';
	import { filterTagByIds, getTodoById } from '$lib/app/utils';
	import TagSelect from '$lib/forms/TagSelect.svelte';

	export let id: string | undefined = undefined;

	let initialTodo = id ? getTodoById($todos, id) : null;

	let name: string = initialTodo?.name || '';
	let todoId = initialTodo?.id || nanoid(12);
	let dateCreated = initialTodo?.dateCreated || new Date();
	let attached: Tag[] = initialTodo?.tagIds ? filterTagByIds($tags, initialTodo.tagIds) : [];

	const handleSubmit = () => {
		const todo: Todo = {
			name,
			tagIds: attached.map((tag) => tag.id),
			id: todoId,
			dateCreated
		};

		if (initialTodo) {
			actions.updateTodo(todo);
		} else {
			actions.addTodo(todo);
		}
	};
</script>

{#if initialTodo || initialTodo === null}
	<form action="/" on:submit={handleSubmit}>
		<input bind:value={name} type="text" name="name" id="name" />
		<TagSelect bind:selected={attached} />
		<button>submit</button>
	</form>
{:else}
	<div>
		<h2>this todo does not exist!</h2>
	</div>
{/if}
