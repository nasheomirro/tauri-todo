<script lang="ts">
	import TodoForm from '$lib/forms/TodoForm.svelte';
	export let data;
</script>

<!-- we might not need it, it depends on future implementation -->
{#key data.id}
	<TodoForm id={data.id} />
{/key}
