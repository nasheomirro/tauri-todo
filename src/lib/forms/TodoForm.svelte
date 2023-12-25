<script lang="ts">
	import { nanoid } from 'nanoid';

	import { actions, todos } from '$lib/app';
	import type { Tag, Todo } from '$lib/types';
	import { getTodoById } from '$lib/app/utils';
	import TagSelect from '$lib/forms/TagSelect.svelte';

	export let id: string | undefined = undefined;

	let initialTodo = id ? getTodoById($todos, id) : null;

	let name: string = initialTodo?.name || '';
	let tags: Tag[] = initialTodo?.tags || [];
	let tagId = initialTodo?.id || nanoid(12);
	let dateCreated = initialTodo?.dateCreated || new Date();

	const handleSubmit = () => {
		const todo: Todo = {
			name,
			tags,
			id: tagId,
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
		<TagSelect bind:selected={tags} />
		<button>submit</button>
	</form>
{:else}
	<div>
		<h2>this todo does not exist!</h2>
	</div>
{/if}
