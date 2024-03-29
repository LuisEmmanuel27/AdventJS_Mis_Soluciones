/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				columpiar: {
					'0%': { transform: 'rotate(-10deg)' },
					'50%': { transform: 'rotate(10deg)' },
					'100%': { transform: 'rotate(-10deg)' },
				},
			},

			animation: {
				columpiar: 'columpiar 4s ease-in-out infinite',
			},
		},
	},
	plugins: [],
}
