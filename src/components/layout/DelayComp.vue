<template>
	<h1 class="text-center font-bold text-lg flex-row">Delay Component</h1>
	<div class="grid grid-rows-4 grid-flow-col overflow-x-hidden h-52 bg-red-600">
		<div
			v-for="itemI in test"
			:key="itemI.id"
		>
			{{ itemI.name }}
		</div>
	</div>
	<div class="flex-grow">
		<slot></slot>
	</div>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
	async setup() {
		const test = ref([]);
		const timing = (time: number) => {
			return new Promise((resolve) => setTimeout(resolve, time));
		};
		await timing(3000);
		const res = await fetch('https://650862d356db83a34d9c4141.mockapi.io/api/user');
		const userRes = await res.json();
		test.value = userRes;
		return {
			test,
		};
	},
};
</script>
