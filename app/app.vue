<script setup lang="ts">
// Nuxt, Seo & Config
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk
			? `${titleChunk} - Xiradorn Lab Repo`
			: 'Xiradorn Lab Repo'
	}
})
</script>

<template>
	<UApp>
		<NuxtLoadingIndicator />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>
