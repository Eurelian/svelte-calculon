<script lang="ts">
	export let options: string[] = [];

	export let value: string | number = '';
</script>

<div class="flex py-2 mt-2">
	{#each options as option, i}
		<div class="flex items-center mb-4 {i > 0 && 'pl-4'}">
			<input
				id={'input' + i}
				type="radio"
				bind:group={value}
				value={option}
				name="default-radio"
				class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
			/>
			<label for={'input' + i} class="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300"
				>{option}</label
			>
		</div>
	{/each}
</div>
