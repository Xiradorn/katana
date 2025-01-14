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
	<UContainer class="!p-0 !m-0 max-w-full">
		<div
			class="max-w-full bg-katana-img h-screen bg-cover bg-center flex flex-col items-center justify-center"
		>
			<h1
				class="font-quig text-[12rem] md:text-[20rem] lg:text-[30rem] text-katana japanese leading-52"
				style="
					text-shadow:
						1px 1px var(--color-first-shadow),
						2px 2px 6px var(--color-second-shadow);
				"
			>
				Katana
			</h1>
			<h4
				class="text-2xl md:text-3xl font-jura uppercase font-light japanese"
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
			class="max-w-full bg-katana-img px-10 py-10 bg-cover bg-center flex items-center justify-center bg-katana bg-blend-color-dodge"
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
