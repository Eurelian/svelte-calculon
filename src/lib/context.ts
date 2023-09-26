import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

type Result = number;

type Context = Writable<number>;

export function setResult(result: Result) {
	const newResult = writable<number>(result);
	setContext('result', newResult);
}

export function getResult() {
	return getContext<Context>('result');
}
