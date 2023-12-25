<script lang="ts">
	import { actions } from '$lib/app';
	import { nanoid } from 'nanoid';
	import type { Tag, Todo } from '$lib/types';
	import TagSelect from '$lib/forms/TagSelect.svelte';

	let tags: Tag[] = [];
	let name: string = '';

	const handleSubmit = (evt: SubmitEvent) => {
		const todo: Todo = {
			name,
			tags: tags,
			dateCreated: new Date(),
			id: nanoid(12)
		};

		actions.addTodo(todo);
	};
</script>

<form action="/" on:submit={handleSubmit}>
	<input bind:value={name} type="text" name="name" id="name" />
	<TagSelect bind:selected={tags} />
	<button>submit</button>
</form>
