<script>
	import { FluidForm, TextInput, Button } from 'carbon-components-svelte';
	import { collection, addDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase.client';
	let country = '';
	let valor = '';
	$: console.log(country);
	$: console.log(valor);
	console.log(db);

	async function sendData() {
		// the second parameter of the addDoc function is the object to be saved
		const docRef = await addDoc(collection(db, 'countries'), {
			country: country.trim(),
			value: valor.trim()
		});
		console.log('Document written with reference: ', docRef);
		country = '';
		valor = '';
	}
</script>

<FluidForm>
	<TextInput
		labelText="País"
		placeholder="Digite o nome do país..."
		bind:value={country}
		required
	/>
	<TextInput labelText="População" placeholder="(em milhões)" bind:value={valor} required />
	<Button on:click={sendData}>Enviar</Button>
</FluidForm>
