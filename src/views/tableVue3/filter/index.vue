<script setup lang="ts">
const emit = defineEmits(['handleAdd']);
</script>
<template>
	<div>filter</div>
	<div class="feature_wrapper">
		<button class="button_style delete">Delete</button>
		<button
			class="button_style add"
			@click="emit('handleAdd')"
		>
			Add New
		</button>
	</div>
</template>

<style>
.feature_wrapper {
	padding: 0px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.button_style {
	background-color: transparent;
	border: 2px solid white;
	color: white;
	font-size: 15px;
	border-radius: 10px;
	height: 40px;
	width: 200px;
	transition: all linear 0.2s;
	font-weight: bold;
}
.add:hover {
	background-color: #5855e6;
	border: #5855e6;
	font-size: 16px;
}
.delete:hover {
	background-color: #e04040;
	border: #e04040;
	font-size: 16px;
}
</style>
