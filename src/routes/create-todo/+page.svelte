<script lang="ts">
	import { actions } from '$lib/app';
	import { nanoid } from 'nanoid';
	import type { Todo } from '$lib/types';

	const handleSubmit = (evt: SubmitEvent) => {
		const data = new FormData(evt.currentTarget as HTMLFormElement);
		const name = data.get('name');

		if (typeof name === 'string') {
			const todo: Todo = {
				name,
				tags: [],
				dateCreated: new Date(),
				id: nanoid(12)
			};

			actions.addTodo(todo);
		}
	};
</script>

<form action="/" on:submit={handleSubmit}>
	<input type="text" name="name" id="name" />
	<button>submit</button>
</form>
