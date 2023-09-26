export type Calculator = {
	id: number;
	name: string;
	fullName: string;
};

export type CalculatorField = {
	id: string;
	name: string;
	field: string;
	unit?: string;
	type?: 'number' | 'text' | 'radio';
	options?: string[];
};

export interface CalculatorProps extends Calculator {
	fields?: CalculatorField[];
	formula?: string;
}
