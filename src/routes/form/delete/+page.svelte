<script>
	import { db } from '$lib/firebase.client';
	import { Grid, Row, Column } from 'carbon-components-svelte';
	import { getDocs, collection } from 'firebase/firestore';
	import { onMount } from 'svelte';

	let docs = [];
	onMount(async () => {
		const querySnapshot = await getDocs(collection(db, 'countries'));
		docs = querySnapshot.docs.map((doc) => doc.data());
		console.log(docs);
	});
	console.log(docs);
	console.log(db);
</script>

<div style="display:flex; margin: auto;">
	<Grid>
		{#each docs as doc}
			<Row>
				<Column>{doc.country}</Column>
				<Column>{doc.value}</Column>
			</Row>
		{/each}
	</Grid>
</div>
