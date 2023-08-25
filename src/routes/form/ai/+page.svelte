<script>
	import { TextArea, Button } from 'carbon-components-svelte';
	import { llm, chat } from '$lib/langchain.client';
	import { HumanMessage, ChatMessage, SystemMessage } from 'langchain/schema';

	console.log(llm);
	console.log(chat);

	let text = '';
	let chatResponse = '';

	$: console.log(text);

	async function sendToGPT() {
		const response = await chat.predictMessages([new HumanMessage(`${text}`)]);
		console.log(response);
		console.log(response.content);
		chatResponse = response.content;
	}
</script>

<TextArea
	labelText="Description"
	helperText="A rich description helps us better recommend related products and services"
	placeholder="Enter a description..."
	bind:value={text}
/>

<div class="btnDiv">
	<Button on:click={sendToGPT}>Enviar</Button>
</div>

<p>{chatResponse}</p>
