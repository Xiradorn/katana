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

	css: ['~/assets/css/main.css'],

	runtimeConfig: {
		public: {
			webBase: 'https://Xiradorn.github.io/katana'
		}
	},

	app: {
		baseURL: '/katana/',

		buildAssetsDir: '__xir',

		head: {
			htmlAttrs: {
				lang: 'it'
			},
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/katana/favicon.ico'
				},
				{
					rel: 'apple-touch-icon',
					sizes: '180x180',
					href: '/katana/apple-touch-icon.png'
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '32x32',
					href: '/katana/favicon-32x32.png'
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '16x16',
					href: '/katana/favicon-16x16.png'
				},
				{ rel: 'manifest', href: '/katana/site.webmanifest' }
			]
		}
	}
})
