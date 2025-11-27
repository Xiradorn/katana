<script setup lang="ts">
// Nuxt, Seo & Config
// Props & Emits
// Services & Apis
// Refs & Reactives
// Methods
// Computed
// Lifecycle
// Watchers
</script>

<template>
	<UContainer class="!m-0 max-w-full !p-0">
		<div
			class="flex h-screen max-w-full flex-col items-center justify-center bg-katana-img bg-cover bg-center"
		>
			<h1
				class="japanese font-quig text-[12rem] leading-52 text-katana md:text-[20rem] lg:text-[30rem]"
				style="
					text-shadow:
						1px 1px var(--color-first-shadow),
						2px 2px 6px var(--color-second-shadow);
				"
			>
				Katana
			</h1>
			<h4
				class="font-jura japanese text-2xl font-light uppercase md:text-3xl"
				style="
					text-shadow:
						1px 1px var(--color-first-shadow),
						2px 2px 6px var(--color-second-shadow);
				"
			>
				Site Repository
			</h4>
		</div>

		<slot />

		<footer
			class="flex max-w-full items-center justify-center bg-katana bg-katana-img bg-cover bg-center px-10 py-10 bg-blend-color-dodge"
		>
			<h1 class="text-lime-50">
				Copyright @ Xiradorn Lab - Sir xiradorn | 2009 -
				{{ new Date().getFullYear() }}
			</h1>
		</footer>
	</UContainer>
</template>

<style scoped>
@media all and (max-width: 768px) {
	.japanese {
		text-orientation: sideways;
		writing-mode: vertical-rl;
	}
}
</style>
