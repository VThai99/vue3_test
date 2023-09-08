<script setup lang="ts">
import Table from './table/index.vue';
import Pagination from './pagination/index.vue';
import Filter from './filter/index.vue';
import Modal from './modal/Modal.vue';
import { reactive, ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const { state, mutations, actions, getters } = store;

const dataTable = computed(() => state.tableData)
const form = reactive({
	name: '',
	age: '',
	gender: '',
	phone: '',
	address: '',
});
const page = reactive({ pageSize: '10', pageNumber: 1 })
const show = ref(false);
const closeModal = () => {
	show.value = false;
};
const addHandle = () => {
	store.commit('addPerson', {
		newPerson: {
			id: Date.now(),
			name: form.name,
			age: form.age,
			gender: form.gender,
			phone: form.phone,
			address: form.address,
		}
	})
	Object.assign(form, {
		name: '',
		age: '',
		gender: '',
		phone: '',
		address: '',
	})
	closeModal()
};
const openModal = () => {
	show.value = true;
};
const changeAmount = (amount: string) => {
	page.pageSize = amount
}

const paginate = (dataFull: any, size: number, page: number) => {
	return dataFull.slice((page - 1) * size, page * size)
}

const onChangePage = (value: number) => {
	page.pageNumber = value
}

const dataShow = computed(() => paginate(state.tableData, Number(page.pageSize), page.pageNumber))

</script>
<template>
	<div>
		<div class="filter_wrapper">
			<Filter @handle-add="openModal" @change-amount="changeAmount" :amount="page.pageSize" />
		</div>
		<div class="table_wrapper">
			<Table :data="dataShow" />
		</div>
		<div class="pagination_wrapper">
			<Pagination :page-number="page.pageNumber" :total-page="dataTable.length" @change-page="onChangePage" />
		</div>
	</div>
	<Modal :show="show" @closeModal="closeModal" @save="addHandle">
		<template #modal-content>
			<div class="mt-1 name_age">
				<div class="flex_style">
					<span class="label_style">Name: </span>
					<input v-model="form.name" class="input_style" />
				</div>
				<div class="flex_style">
					<span class="label_style">Age: </span>
					<input v-model="form.age" class="input_style" />
				</div>
			</div>

			<div class="mt-1 flex_style">
				<span class="label_style">Gender: </span>
				<select class="input_style" name="" id="" v-model="form.gender">
					<option value="">Chose your gender</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
				</select>
			</div>

			<div class="mt-1 flex_style">
				<span class="label_style">Phone number: </span>
				<input v-model="form.phone" class="input_style" />
			</div>
			<div class="mt-1 flex_style">
				<span class="label_style">Address: </span>
				<input v-model="form.address" class="input_style" />
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
	flex-grow: 1;
}

.label_style {
	font-weight: bold;
	margin-right: 5px;
	width: 120px;
	display: block;
}

.name_age {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.flex_style {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
</style>
