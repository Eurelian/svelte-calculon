/** @type {import('./$types').PageServerLoad} */
import { mockCalculatorData } from '$lib/server/mock_server';
export function load() {
	return {
		calculatorList: mockCalculatorData
	};
}
