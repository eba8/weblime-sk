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
			textColor: {
				skin: {
					base: 'var(--color-text-base)',
					'text-base-hover': 'var(--color-text-base-hover)',
					muted: 'var(--color-text-muted)',
					inverted: 'var(--color-text-inverted)',
					logo: 'var(--color-logo-fill)',
				}
			},
			backgroundColor: {
				skin: {
					fill: 'var(--color-button-fill)',
					hover: 'var(--color-button-hover)',
					hero: 'var(--color-hero-fill)',
				}
			}
		},
		
	},
	plugins: [],
};