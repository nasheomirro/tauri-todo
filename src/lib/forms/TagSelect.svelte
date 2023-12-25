<script lang="ts">
	import { tags } from '$lib/app';
	import type { Tag } from '$lib/types';
	import type { EventWith } from '$lib/types.utils';

	export let selected: Tag[];

	let filter = '';
	$: items = $tags.filter((tag) => {
		return (
			!selected.find((_tag) => _tag.id === tag.id) &&
			tag.name.toLowerCase().startsWith(filter.toLowerCase())
		);
	});

	const handleFilterInput = (evt: EventWith<HTMLInputElement>) => {
		filter = evt.currentTarget.value;
	};

	const handleSelectClick = (tag: Tag) => (evt: MouseEvent) => {
		selected.push(tag);
		selected = selected;
	};
</script>

<div>
	<input on:input={handleFilterInput} value={filter} name="select-filter" />
	<div class="opts">
		<ul>
			{#each selected as item}
				<li>{item.name}</li>
			{/each}
		</ul>
		<ul>
			{#if items.length > 0}
				{#each items as item}
					<li>
						<button type="button" on:click={handleSelectClick(item)}>{item.name}</button>
					</li>
				{/each}
			{:else}
				<li>No options available</li>
			{/if}
		</ul>
	</div>
</div>

<style lang="scss">
	.opts {
		display: grid;
    width: 300px;
		grid-template-columns: 1fr 1fr;
	}
</style>
