<script lang="ts">
	import type { CalculatorProps } from '$lib/types/calculator.js';
	import CalculatorForm from '$lib/calculator-form/calculator-form.svelte';
	import Card from '$lib/card/card.svelte';
	export let calculator: CalculatorProps;
</script>

<Card>
	{#if calculator}
		<h1>{calculator.name ?? ''} Calculator</h1>
		<CalculatorForm calculatorFields={calculator.fields} formula={calculator?.formula} />
	{:else}
		<p>Calculator not found</p>
	{/if}
</Card>
