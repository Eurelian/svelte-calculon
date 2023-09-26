/** @type {import('./$types').Actions} */

import type { Action } from '@sveltejs/kit';

export function load() {
	return {
		possibleFormFields: [{ id: 'age' }, { id: 'gender' }]
	};
}
export const actions = {
	calculate: async (event: Action) => {
		console.log(event);
	}
};
