export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: ['@nuxtjs/supabase', '@nuxt/icon'],
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	supabase: {
		redirectOptions: {
			login: '/login',
			callback: '/login?confirmed=true',
			include: undefined,
			exclude: [],
			cookieRedirect: true,
		},
	},
});
