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
			class="max-w-full bg-katana-img h-screen bg-cover bg-center flex items-center justify-center"
		>
			<h1
				class="font-quig text-[30rem] text-katana"
				style="
					text-shadow:
						1px 1px var(--color-first-shadow),
						2px 2px 6px var(--color-second-shadow);
				"
			>
				Katana
			</h1>
		</div>

		<slot />

		<footer
			class="max-w-full bg-katana-img py-10 bg-cover bg-center flex items-center justify-center bg-katana bg-blend-color-dodge"
		>
			<h1 class="text-lime-50">
				Copyright @ Xiradorn Lab - Sir xiradorn | 2009 -
				{{ new Date().getFullYear() }}
			</h1>
		</footer>
	</UContainer>
</template>
