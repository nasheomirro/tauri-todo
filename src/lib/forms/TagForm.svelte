<script lang="ts">
	import { actions, tags, todos } from '$lib/app';
	import { nanoid } from 'nanoid';
	import type { Tag } from '$lib/types';
	import { getTagById } from '$lib/app/utils';

	export let id: string | undefined = undefined;

	let initialTag = id ? getTagById($tags, id) : null;

	let name = initialTag?.name || '';
	let color = initialTag?.color || 'red';
	let tagId = initialTag?.id || nanoid(12);

	const handleSubmit = () => {
		const tag: Tag = {
			name,
			color,
			id: tagId
		};

		if (initialTag) {
			actions.updateTag(tag);
		} else {
			actions.addTag(tag);
		}
	};
</script>

{#if initialTag || initialTag === null}
	<form action="/" on:submit={handleSubmit}>
		<input bind:value={name} type="text" name="name" id="name" />
		<button>submit</button>
	</form>
{:else}
	<h2>This tag does not exist!</h2>
{/if}
