<script lang="ts">
	/** @type {import('./$types').PageData} */
	import Calculator from '$lib/calculator.svelte';
	import type { CalculatorProps } from '$lib/types/calculator';
	import { getResult } from '$lib/context';

	export let data: { selectedCalculator: CalculatorProps };
	let result = getResult();
</script>

<Calculator calculator={data.selectedCalculator} />
{#if result}
	<div class="result">
		<h2>Result</h2>
		<p>{result}</p>
	</div>
{/if}
