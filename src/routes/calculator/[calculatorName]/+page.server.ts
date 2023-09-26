/** @type {import('./$types').PageLoad} */

import { mockCalculatorData } from '$lib/server/mock_server';

export function load({ url }: { url: URL }) {
	const calculatorId = Number(url.searchParams.get('id'));
	const selectedCalculator = mockCalculatorData.find(
		(calculator) => calculator.id === calculatorId
	);
	return {
		selectedCalculator
	};
}
