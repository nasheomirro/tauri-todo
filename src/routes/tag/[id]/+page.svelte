<script lang="ts">
	import TagForm from '$lib/forms/TagForm.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- we might not need it, it depends on future implementation -->
{#key data.id}
	<TagForm id={data.id} />
{/key}
