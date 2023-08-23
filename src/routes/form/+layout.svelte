<div class="container">
	<nav>
		<a href="/form/add">Adicionar /</a>
		<a href="/form/delete">Excluir /</a>
		<a href="/">Página principal</a>
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
