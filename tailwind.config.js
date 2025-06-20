// tailwind.config.js
import { heroui } from '@heroui/react'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				preahvihear: ['"Preahvihear"', 'sans-serif'],
				plusjakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
			},
		},
	},
	darkMode: 'class',
	plugins: [heroui()],
}
