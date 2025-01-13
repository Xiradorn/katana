// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	future: {
		compatibilityVersion: 4
	},
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	ssr: false,

	modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image'],

	imports: {
		dirs: ['composables/']
	},

	components: [
		{
			pathPrefix: false,
			path: '~/components'
		}
	],

	css: ['~/assets/css/main.css']
})
