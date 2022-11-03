module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			display: ['Montserrat', 'sans-serif'],
			body: ['Mulish', 'sans-serif'],
		},
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				'geraldine': {
					'50': '#fff9f9',
					'100': '#fef2f2',
					'200': '#fddfdf',
					'300': '#fbcbcb',
					'400': '#f8a5a5',
					'500': '#f57e7e',
					'600': '#dd7171',
					'700': '#b95a58',
					'800': '#934c4c',
					'900': '#783e3e'
				},
				'dark': {
					'50': '#333d3d',
					'100': '#313b3b',
					'200': '#2f3939',
					'300': '#2a3434',
					'400': '#293333',
					'500': '#242e2e',
					'600': '#222c2c',
					'700': '#1f2929',
					'800': '#1b2525',
					'900': '#111b1b',
				}
			},
			backgroundImage: {
				'hero-img': "url('../bg.png')",
				'hero-img-dark': "url('../bg-dark.png')",
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
};
