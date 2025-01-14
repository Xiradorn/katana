<script lang="ts">
import imgs from '@/composables/images'

interface Website {
	slug: string
	name: string
	description: string
	url: string
	image: string
	death?: boolean
	full?: boolean
	coming?: boolean
}
</script>

<script setup lang="ts">
// Nuxt, Seo & Config
// Props & Emits
// Services & Apis
// Refs & Reactives
const websites = shallowRef<Website[]>([
		{
			slug: 'ethyly',
			name: 'Ethyly',
			description: 'Wine Marketplace',
			url: 'https://ethyly.com/',
			image: imgs.ethyly,
			full: true
		},
		{
			slug: 'bohemycake',
			name: 'BohemyCake',
			description: 'Portale di Pasticceria',
			url: 'https://bohemycake.it/',
			image: imgs.bohemycake
		},
		{
			slug: 'fitness',
			name: 'FFEvolution',
			description: 'Fitness Shop',
			url: 'https://ffevolutionshop.it/',
			image: imgs.fitness
		},
		{
			slug: 'izumi',
			name: 'Izumi',
			description: 'Asian Restaurant',
			url: 'https://www.izumifondi.it/',
			image: imgs.izumi
		},
		{
			slug: 'armonia',
			name: 'Armonia Shop',
			description: 'Store Online',
			url: 'https://www.armoniashop.it/',
			image: imgs.armonia
		},
		{
			slug: 'confortsofa',
			name: 'Confort Sofà',
			description: 'Divani & Living',
			url: 'https://www.confortsofa.it/',
			image: imgs.confortsofa
		},
		{
			slug: 'contestabilehomedesign',
			name: 'Contestabile',
			description: 'Home Design',
			url: 'https://www.contestabilehomedesign.it/',
			image: imgs.contestabilehomedesign
		},
		{
			slug: 'gavillucci',
			name: 'Gavillucci',
			description: 'Arredamento',
			url: 'https://www.gavillucci.it/',
			image: imgs.gavillucci
		},
		{
			slug: 'totaro',
			name: 'Antonio Totaro',
			description: 'Photography',
			url: 'https://www.antonio-totaro.com/',
			image: imgs.totaro
		},
		{
			slug: 'sienergie',
			name: 'SiEnergie',
			description: 'Cartotecnica',
			url: 'https://sienergie.com/',
			image: imgs.sienergie
		},
		{
			slug: 'vladimiro',
			name: 'Vladimiro',
			description: 'Luxury Restaurant | Rome',
			url: 'https://www.ristorantevladimiro.com/',
			image: imgs.vladimiro
		},
		{
			slug: 'ferrantefragole',
			name: 'Ferrante Fragole',
			description: 'Produttore locale',
			url: 'https://ferrantefragole.it/',
			image: imgs.ferrantefragole
		},
		{
			slug: 'pasticceriabuttafoco',
			name: 'Buttafoco',
			description: 'Pasticceria',
			url: 'https://pasticceriabuttafoco.it/',
			image: imgs.pasticceriabuttafoco
		},
		{
			slug: 'studiolegalegraverini',
			name: 'Graverini',
			description: 'Studio Legale',
			url: 'https://www.studiolegalegraverini.it/',
			image: imgs.studiolegalegraverini
		},
		{
			slug: 'latinafilmcommission',
			name: 'Latina Film Commission',
			description: 'Cinema, Tv & Locations',
			url: 'https://www.latinafilmcommission.it/',
			image: imgs.latinafilmcommission
		},
		{
			slug: 'gemgroupservizi',
			name: 'Gem Group',
			description: 'Digital & Security Services',
			url: 'https://gemgroupservizi.it/',
			image: imgs.gemgroupservizi
		},
		{
			slug: 'jungle',
			name: 'Jungle Team',
			description: 'Digital & Marketing',
			url: 'https://jungleteam.it/',
			image: imgs.jungle
		},
		{
			slug: 'tornesi',
			name: 'Tornesi',
			description: 'Immobiliare',
			url: 'https://www.tornesiimmobiliare.it/',
			image: imgs.tornesi
		},
		{
			slug: 'miworld',
			name: 'MiWorld',
			description: 'Retro & Vintage Gaming',
			url: 'https://www.miworld.eu/',
			image: imgs.miworld
		},
		{
			slug: 'dimascoloarredamenti',
			name: 'Di Mascolo Arredamenti',
			description: 'Arredamento',
			url: 'https://www.dimascoloarredamenti.it/',
			image: imgs.dimascoloarredamenti
		},
		{
			slug: 'miramare',
			name: 'Miramare',
			description: 'Luxury Grand Hotel',
			url: 'https://www.grandealbergomiramare.com/',
			image: imgs.miramare
		},
		{
			slug: 'gaetagames',
			name: 'Gaeta Games',
			description: 'Evento Nazionale Giochi',
			url: 'https://www.gaetagames.it/2009/home/home.html',
			image: imgs.gaetagames
		},

		// ########################

		{
			slug: '_3bmax',
			name: '3BMax',
			description: '3D Printing Service (CLOSED)',
			url: '',
			image: imgs.a3bmax,
			death: true
		},
		{
			slug: 'magniricevimenti',
			name: 'Magni Ricevimenti',
			description: 'Luxury Restaurant',
			url: '',
			image: imgs.magniricevimenti,
			death: true
		},
		{
			slug: '_57miglia',
			name: '57 Miglia',
			description: 'Mastri Birrai (CLOSED)',
			url: '',
			image: imgs.a57miglia,
			death: true
		},
		{
			slug: 'abc',
			name: 'ABC Consulting',
			description: 'Digital & Marketing (CLOSED)',
			url: '',
			image: imgs.abc,
			death: true
		},
		{
			slug: 'duemshop',
			name: 'Dueme Shop',
			description: 'Digital & Marketing (CLOSED)',
			url: 'https://duemeshop.it/',
			image: imgs.duemshop,
			death: true
		},
		{
			slug: 'stilosacomete',
			name: 'stilosacomete',
			description: 'Digital & Marketing (CLOSED)',
			url: 'https://www.stilosacomete.it/',
			image: imgs.stilosacomete,
			death: true
		},

		// ########################

		{
			slug: 'xiradorn',
			name: 'xiradorn',
			description: 'Coming Soon',
			url: '',
			image: imgs.xiradorn,
			coming: true
		},
		{
			slug: 'xiradorn',
			name: 'xiradorn',
			description: 'Coming Soon',
			url: '',
			image: imgs.xiradorn,
			coming: true
		},
		{
			slug: 'xiradorn',
			name: 'xiradorn',
			description: 'Coming Soon',
			url: '',
			image: imgs.xiradorn,
			coming: true
		}
	]),
	activatron: {
		open: boolean
		selected?: Website
	} = reactive({
		open: false,
		selected: undefined
	})
// Methods
// Computed
// Lifecycle
// Watchers
watch(
	activatron,
	() => {
		if (!activatron.open) {
			activatron.open = false
			activatron.selected = undefined
		}
	},
	{ deep: true }
)
</script>

<template>
	<div
		class="p-2 md:p-5 lg:p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
	>
		<div
			v-for="website in websites"
			:key="website.name"
			:class="[{ 'md:col-span-2 lg:col-span-3': website.full }]"
		>
			<div v-if="website.full">
				<button
					:class="[
						'w-full flex flex-col md:flex-row items-center justify-center',
						{ 'cursor-pointer': !website.death || !website.coming }
					]"
					@click="
						() => {
							if (!website.death && !website.coming) {
								activatron.open = true
								activatron.selected = website
							}
						}
					"
				>
					<div class="w-full md:w-1/2">
						<img
							:src="website.image"
							:alt="website.name"
							class="aspect-[16/9] object-cover object-center !w-full !h-full rounded"
						/>
					</div>

					<div class="w-full md:w-1/2">
						<h2 class="font-quig text-9xl">{{ website.name }}</h2>
						<p class="uppercase">{{ website.description }}</p>
					</div>
				</button>
			</div>

			<div v-else class="w-full">
				<button
					:class="[
						'w-full',
						{ 'cursor-pointer': !website.death && !website.coming }
					]"
					@click="
						() => {
							if (!website.death && !website.coming) {
								activatron.open = true
								activatron.selected = website
							}
						}
					"
				>
					<img
						:src="website.image"
						:alt="website.name"
						:class="[
							'aspect-[16/9] object-cover object-center !w-full !h-full rounded',
							{ 'blur-xs saturate-0': website.death }
						]"
					/>

					<div class="mt-4">
						<h2 class="font-quig text-6xl -mb-4">
							{{ website.name }}
						</h2>
						<p class="uppercase">{{ website.description }}</p>
					</div>
				</button>
			</div>
		</div>

		<UModal
			v-model:open="activatron.open"
			:title="activatron.selected?.name"
			:ui="{
				content:
					'overflow-hidden min-w-[90vw] max-w-[90vw] max-h-[90vh]'
			}"
		>
			<template #content>
				<div class="absolute p-2 right-0 bg-lime-400 rounded-bl-lg">
					<UButton
						icon="i-heroicons-x-mark-20-solid"
						class="cursor-pointer"
						size="lg"
						@click="
							() => {
								activatron.open = false
								activatron.selected = undefined
							}
						"
					/>
				</div>

				<iframe
					:src="activatron.selected?.url"
					class="w-full h-screen"
				/>
			</template>
		</UModal>
	</div>
</template>
