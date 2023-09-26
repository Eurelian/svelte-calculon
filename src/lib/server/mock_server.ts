import type { CalculatorProps } from '$lib/types/calculator';

export const mockCalculatorData: CalculatorProps[] = [
	{
		id: 1,
		name: 'BMI',
		fullName: 'Body Mass Index',
		fields: [
			{ id: 'age', field: 'age', name: 'Age', unit: '', type: 'number' },
			{ id: 'gender', field: 'gender', name: 'Gender', type: 'radio', options: ['Male', 'Female'] },
			{ id: 'height', field: 'height', name: 'Height', unit: 'cm', type: 'number' },
			{ id: 'weight', field: 'weight', name: 'Weight', unit: 'kg', type: 'number' }
		],
		formula: 'weight / (height/100 * height/100)'
	},
	{ id: 2, name: 'BMR', fullName: 'Body Mass Results', fields: [] },
	{ id: 3, name: 'TDEE', fullName: 'Total Daily Energy Expenditure', fields: [] }
];
