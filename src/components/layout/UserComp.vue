<template>
	<h1 class="text-center font-bold text-lg">User Component</h1>
	<div class="grid grid-rows-4 grid-flow-col overflow-x-hidden h-52 bg-slate-500">
		<div
			v-for="itemI in test"
			:key="itemI.id"
		>
			{{ itemI.name }}
		</div>
	</div>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
	async setup() {
		const test = ref([]);
		const res = await fetch('https://650862d356db83a34d9c4141.mockapi.io/api/user');
		const userRes = await res.json();
		console.log(userRes);
		test.value = userRes;
		return {
			test,
		};
	},
};
</script>
