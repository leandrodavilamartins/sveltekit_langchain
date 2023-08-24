<script>
	import { Link } from 'carbon-components-svelte';
</script>

<div class="container">
	<nav>
		<Link href="/form/add">Adicionar /</Link>
		<Link href="/form/delete">Excluir /</Link>
		<Link href="/">Página principal</Link>
	</nav>
</div>

<slot />

<style>
	.container {
		display: flex;
		margin: auto;
		align-items: center;
	}
	nav {
		display: flex;
		margin: auto;
		justify-content: flex-start;
	}
</style>
