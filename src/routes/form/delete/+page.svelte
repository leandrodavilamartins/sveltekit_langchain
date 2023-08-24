<script>
	import { db } from '$lib/firebase.client';
	import { Grid, Row, Column } from 'carbon-components-svelte';
	import { Button } from 'carbon-components-svelte';
	import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';

	let docs = [];

	onMount(async () => {
		const querySnapshot = await getDocs(collection(db, 'countries'));
		docs = querySnapshot.docs.map((doc) => {
			return { id: doc.id, country: doc.data().country, value: doc.data().value };
		});
		console.log(docs);
	});

	async function deleteItem(event) {
		let eventSource = event.target; // the button that triggers the event
		let idElement =
			eventSource.parentElement.previousElementSibling.previousElementSibling
				.previousElementSibling;
		//console.log(idElement);
		console.log(idElement.innerText);
		let id = idElement.innerText;
		let response = await deleteDoc(doc(db, 'countries', id));
		//console.log(response);
		//console.log(id);
		window.location.reload();
	}
</script>

<div style="display:flex; margin: auto;">
	<Grid padding fullWidth>
		{#each docs as doc}
			<Row>
				<Column hidden>{doc.id}</Column>
				<Column>{doc.country}</Column>
				<Column>{doc.value}</Column>
				<Column><Button on:click={deleteItem}>Excluir item</Button></Column>
			</Row>
		{/each}
	</Grid>
</div>
