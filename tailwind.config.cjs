const colors = require('tailwindcss/colors');

module.exports = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts,svg}",
	],
	theme: {
		colors: {
			primary: colors.lime,
			secondary: colors.indigo,
			yellow: colors.amber,
			red: colors.red,
			gray: colors.gray,
			white: colors.white,
		},
		extend: {
		}
	},
	plugins: [],
};