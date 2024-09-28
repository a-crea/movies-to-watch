/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#8ecae6', // Bright pastel sky blue
					secondary: '#ffb3c1', // Bright pastel pink
					accent: '#90e0ef', // Vibrant pastel aqua
					neutral: '#dab6fc', // Soft pastel lavender
					'base-100': '#ffffff', // Bright, clean white background
					info: '#a0c4ff', // Bright light blue
					success: '#a3e635', // Bright lime green for success
					warning: '#f4a261', // Bright pastel orange for warnings
					error: '#ff6b6b', // Vivid pastel red for errors
					'base-100': '#ffffff',

					'--rounded-box': '1.5rem', // border radius rounded-box utility class, used in card and other large boxes
					'--rounded-btn': '0.6rem', // border radius rounded-btn utility class, used in buttons and similar element
					'--rounded-badge': '9999px', // border radius rounded-badge utility class, used in badges and similar
					'--animation-btn': '0.25s', // duration of animation when you click on button
					'--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
					'--btn-focus-scale': '0.95', // scale transform of button when you focus on it
					'--border-btn': '1px', // border width of buttons
					'--tab-border': '1px', // border width of tabs
					'--tab-radius': '0.5rem', // border radius of tabs
				},
			},
		],
	},
};
