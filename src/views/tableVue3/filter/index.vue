<script setup lang="ts">
defineProps<{
	amount?: string
}>()
const emit = defineEmits(['handleAdd', 'changeAmount']);
const onChangeAmount = (event: any) => {
	const amount = event.target.value
	emit('changeAmount', amount)
}
</script>
<template>
	<div>filter</div>
	<div class="feature_wrapper">
		<button class="button_style delete">Delete</button>
		<button class="button_style add" @click="emit('handleAdd')">
			Add New
		</button>
	</div>
	<div class="itemPerPage mt-1">
		<select :value="amount" name="" id="" @change="onChangeAmount">
			<option value="10">10</option>
			<option value="20">20</option>
			<option value="50">50</option>
		</select>
	</div>
</template>

<style>
.itemPerPage {
	padding: 0px 20px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.itemPerPage select {
	padding: 3px;
	border-radius: 5px;
}

.feature_wrapper {
	padding: 0px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.button_style {
	background-color: transparent;
	border: 2px solid rgb(29, 25, 25);
	color: rgb(39, 28, 28);
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
