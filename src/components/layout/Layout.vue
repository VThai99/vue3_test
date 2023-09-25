<script setup lang="ts">
// import { RouterView } from 'vue-router';
import HeaderLayout from './HeaderLayout.vue';
// import LoadingComp from '@/components/loading/LoadingComp.vue';
import SuspenseExp from './SuspenseExp.vue';
import DelayComp from './DelayComp.vue';
import UserComp from './UserComp.vue';
import DelayComp2 from './DelayComp2.vue';
</script>
<template>
	<HeaderLayout />
	<h1 class="text-center text-5xl font-bold">Suspense</h1>
	<suspense-exp :child-component="UserComp" />
	<div class="flex justify-center items-center gap-4">
		<div class="w-1/2">
			<suspense-exp :child-component="DelayComp" />
			<div class="w-1/2"><suspense-exp :child-component="DelayComp2" /></div>
		</div>
		<div class="w-1/2"><suspense-exp :child-component="DelayComp2" /></div>
	</div>
	<div class="w-full flex justify-center items-center">
		<div class="container">
			<!-- <RouterView v-slot="{ Component }">
				<Suspense>
					<template #default> <component :is="Component"></component> </template>
					<template #fallback>
						lodingggg....
						<LoadingComp />
					</template>
				</Suspense>
			</RouterView> -->
		</div>
	</div>
</template>
