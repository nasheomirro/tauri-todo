<script lang="ts">
	import TodoForm from '$lib/forms/TodoForm.svelte';
	export let data;
</script>

<TodoForm id={data.id} />
