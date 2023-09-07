<script setup lang="ts">
import Table from './table/index.vue';
import Pagination from './pagination/index.vue';
import Filter from './filter/index.vue';
import Modal from './modal/Modal.vue';
import { reactive, ref } from 'vue';
const state = reactive({
	title: '',
	status: 'unChecked',
	name: '',
	age: '',
	gender: '',
	phone: '',
	address: '',
});
const show = ref(false);
const closeModal = () => {
	show.value = false;
};
const addTodo = () => {
	console.log('add');

	//   store.commit('addTodo', {
	//     newTodo: {
	//       id: Date.now(),
	//       title: state.title,
	//       status: state.status
	//     }
	//   })
	//   Object.assign(state, { title: '', status: 'unChecked' })
};
const openModal = () => {
	show.value = true;
};
</script>
<template>
	<div>
		<div class="filter_wrapper">
			<Filter @handleAdd="openModal" />
		</div>
		<div class="table_wrapper">
			<Table />
		</div>
		<div class="pagination_wrapper">
			<Pagination />
		</div>
	</div>
	<Modal
		:show="show"
		@closeModal="closeModal"
		@addNew="addTodo"
	>
		<template #modal-content>
			<div>
				<span class="label_style">Name: </span>
				<input
					v-model="state.name"
					class="input_style"
				/>
				<span class="label_style">Age: </span>
				<input
					v-model="state.age"
					class="input_style"
				/>
			</div>

			<div>
				<span class="label_style">Gender: </span>
				<select name="" id="" v-model="state.gender">
					<option value="">Chose your gender</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
				</select>
			</div>

			<div>
				<span class="label_style">Phone number: </span>
				<input
					v-model="state.phone"
					class="input_style"
				/>
				<span class="label_style">Address: </span>
				<input
					v-model="state.address"
					class="input_style"
				/>
			</div>
		</template>
	</Modal>
</template>
<style>
.pagination_wrapper {
	display: flex;
	justify-content: flex-end;
}
.table_wrapper {
	margin-top: 1rem;
}
.pagination_wrapper {
	margin-top: 1rem;
}
.input_style {
	border-radius: 5px;
	border: 1px solid #331515;
	padding: 5px 10px;
	font-size: 12px;
}
</style>
