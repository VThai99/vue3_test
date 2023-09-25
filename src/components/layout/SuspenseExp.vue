<template>
	<Suspense>
		<template #default> <component :is="childComponent"></component> </template>
		<template #fallback>
			<LoadingComp />
		</template>
	</Suspense>
</template>
<script lang="ts">
import LoadingComp from '../loading/LoadingComp.vue';
export default {
	props: ['childComponent'],
	components: { LoadingComp },
	setup() {
		return {};
	},
};
</script>
