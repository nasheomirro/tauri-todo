<script lang="ts">
	import { tags, todos } from '$lib/app';
	import { sortTagsByLexical, sortTodosByLatest } from '$lib/app/utils';

	$: sortedTodos = sortTodosByLatest($todos);
	$: sortedTags = sortTagsByLexical($tags);
</script>

<nav>
	<ul>
		<li>
			<a href="create-todo">create todo</a>
		</li>
		<li>
			<a href="create-tag">create tag</a>
		</li>
	</ul>
</nav>

<main>
	<h2>Todos</h2>
	<ul>
		{#each sortedTodos as todo}
			<li>
				<h3>{todo.name}</h3>
				<ul>
					{#each todo.tags as tag}
						<li>{tag.name}</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>

	<h2>Tags</h2>
	<ul>
		{#each sortedTags as tag}
			<li>
				<h3>{tag.name}</h3>
			</li>
		{/each}
	</ul>
</main>
