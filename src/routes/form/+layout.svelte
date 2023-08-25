<script>
	import { Link } from 'carbon-components-svelte';
</script>

<div class="container">
	<nav>
		<Link href="/form/add">Adicionar /</Link>
		<Link href="/form/delete">Excluir /</Link>
		<Link href="/form/ai">OpenAI /</Link>
		<Link href="/">Página principal</Link>
	</nav>
</div>

<div class="container">
	<div class="placeholder">
		<p>&nbsp</p>
	</div>
	<slot />
</div>

<style>
	.container {
		display: flex;
		margin: auto;
		align-items: flex-start;
		justify-content: center;
	}
	nav {
		display: flex;
		margin: auto;
		justify-content: flex-start;
	}
	.placeholder {
		display: flex;
		margin-top: 10%;
	}
</style>
