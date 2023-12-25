<script lang="ts">
	import { actions, tags, todos } from '$lib/app';
	import { filterTagByIds, sortTagsByLexical, sortTodosByLatest } from '$lib/app/utils';

	$: sortedTodos = sortTodosByLatest($todos);
	$: sortedTags = sortTagsByLexical($tags);
</script>

<main>
	<h2>Todos</h2>
	<ul>
		{#each sortedTodos as todo}
			<li>
				<h3>{todo.name}</h3>
				<ul>
					{#each filterTagByIds($tags, todo.tagIds) as tag}
						<li>{tag.name}</li>
					{/each}
				</ul>
				<a href="/todo/{todo.id}">edit</a>
				<button on:click={() => actions.deleteTodo(todo)}>delete</button>
			</li>
		{/each}
	</ul>

	<h2>Tags</h2>
	<ul>
		{#each sortedTags as tag}
			<li>
				<h3>{tag.name}</h3>
				<a href="/tag/{tag.id}">edit</a>
				<button on:click={() => actions.deleteTag(tag)}>delete</button>
			</li>
		{/each}
	</ul>
</main>
