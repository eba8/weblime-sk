const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts,svg}'],
  safelist: ['mt-0', 'no-underline', 'ring-gray-100', 'not-prose'],
  theme: {
    colors: {
      primary: colors.lime,
      secondary: colors.indigo,
      yellow: colors.amber,
      red: colors.red,
      gray: colors.gray,
      white: colors.white,
      slate: colors.slate,
    },
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          'text-base-hover': 'var(--color-text-base-hover)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
          logo: 'var(--color-logo-fill)',
        },
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-button-fill)',
          hover: 'var(--color-button-hover)',
          hero: 'var(--color-hero-fill)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
