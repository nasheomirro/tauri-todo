<script lang="ts">
	import { actions } from '$lib/app';
	import { nanoid } from 'nanoid';
	import type { Tag } from '$lib/types';

	const handleSubmit = (evt: SubmitEvent) => {
		const data = new FormData(evt.currentTarget as HTMLFormElement);
		const name = data.get('name');

		if (typeof name === 'string') {
			const tag: Tag = {
				name,
				color: 'red',
				id: nanoid(12)
			};

			actions.addTag(tag);
		}
	};
</script>

<form action="/" on:submit={handleSubmit}>
	<input type="text" name="name" id="name" />
	<button>submit</button>
</form>
