<script>
	export let data;
	console.log(data);
</script>

<h3>Página principal do formulário</h3>

{#each data.documents as d}
	<p>{d.country}</p>
{/each}
