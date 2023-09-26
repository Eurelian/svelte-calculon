<script lang="ts">
	import RadioInput from '$lib/radio-input/radio-input.svelte';
	import FormInput from '$lib/form-input/form-input.svelte';
	import type { CalculatorField } from '$lib/types/calculator';

	import { evaluate } from 'mathjs';
	import { setResult } from '$lib/context';

	export let calculatorFields: CalculatorField[] | [] = [];
	export let formula: string = '';
	let formData: Record<string, string | number> = {};
	const handleSubmit = (e) => {
		const result = evaluate(formula, formData);
		setResult(result);
		console.log(formData);
		console.log(result);
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	{#each calculatorFields as { name, type, options, field }}
		{#if type === 'radio'}
			<RadioInput bind:value={formData[field]} {options} />
		{:else}
			<FormInput bind:value={formData[field]} label={name} {type} />
		{/if}
	{/each}
	<button
		class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>Submit</button
	>
</form>
