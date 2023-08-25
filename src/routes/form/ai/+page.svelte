<script>
	import { TextArea } from 'carbon-components-svelte';
	import { llm } from '$lib/langchain.client';

	console.log(llm);

	let text = '';

	$: console.log(text);
</script>

<TextArea
	labelText="Description"
	helperText="A rich description helps us better recommend related products and services"
	placeholder="Enter a description..."
	bind:value={text}
/>
