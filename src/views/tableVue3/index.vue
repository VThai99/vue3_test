<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { useStore } from 'vuex';
import Filter from './filter/index.vue';
import Modal from './modal/Modal.vue';
import Pagination from './pagination/index.vue';
import Table from './table/index.vue';

const store = useStore();
const { state, getters } = store;

const dataTable = computed(() => state.tableData.length);
const chosedAll = ref(false);
const chosedList = ref<number[]>([]);
const form = reactive({
	name: '',
	age: '',
	gender: '',
	phone: '',
	address: '',
});

const formEdit = reactive({
	id: '',
	name: '',
	age: '',
	gender: '',
	phone: '',
	address: '',
});

const orderBy = reactive({
	field: 'name',
	isIncrease: true,
});
const searchField = ref('');
const searchProps = ref('');
const genderFilter = ref('');
const page = reactive({ pageSize: '5', pageNumber: 1 });

const show = ref(false);
const showEdit = ref(false);

watch(
	() => page.pageSize,
	() => {
		page.pageNumber = 1;
	},
	{ deep: true }
);

const paginate = (dataFull: any, size: number, page: number) => {
	return dataFull.slice((page - 1) * size, page * size);
};

const checkContain = (target: string, checkValue: string) => {
	return target.toLowerCase().includes(checkValue.toLowerCase());
};

const sortData = (arrayInput: any, fieldSort: string, increase: boolean) => {
	const sortArr = arrayInput.toSorted((itemA: any, itemB: any) =>
		itemA[fieldSort].toLowerCase().localeCompare(itemB[fieldSort].toLowerCase())
	);
	if (increase) {
		return sortArr;
	}
	return sortArr.toReversed();
};

const dataShow = computed(() => {
	const arrayFilter = state.tableData.filter(
		(item: any) =>
			(genderFilter.value != '' ? item.gender === genderFilter.value : true) &&
			(searchField.value !== ''
				? checkContain(item.name, searchField.value) ||
				  checkContain(item.phone, searchField.value) ||
				  checkContain(item.address, searchField.value)
				: true)
	);

	return paginate(
		sortData(arrayFilter, orderBy.field, orderBy.isIncrease),
		Number(page.pageSize),
		page.pageNumber
	);
});

const closeModal = () => {
	show.value = false;
};

const closeModalEdit = () => {
	showEdit.value = false;
};

const chosedAllShow = computed(() => {
	if (chosedList.value.length === dataShow.value.length) {
		return true;
	} else {
		return false;
	}
});

const onSearch = () => {
	searchField.value = searchProps.value;
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
		},
	});
	Object.assign(form, {
		name: '',
		age: '',
		gender: '',
		phone: '',
		address: '',
	});
	closeModal();
};
const openModal = () => {
	show.value = true;
};
const changeAmount = (amount: string) => {
	page.pageSize = amount;
};

const onChangePage = (value: number) => {
	page.pageNumber = value;
};

const onChosedAll = () => {
	if (chosedAll.value) {
		chosedAll.value = false;
		chosedList.value = [];
	} else {
		chosedAll.value = true;
		chosedList.value = dataShow.value.map((item: any) => item.id);
	}
};

const onChosedHandle = (value: number) => {
	if (chosedList.value.includes(value)) {
		chosedList.value = chosedList.value.filter((item) => item != value);
		return;
	}
	chosedList.value.push(value);
};

const onDelete = () => {
	store.commit('deletePerson', { deleteArr: chosedList.value });
};

const onDeleteOne = (value: number) => {
	store.commit('deletePerson', { deleteArr: [value] });
};

const onGetDetail = (value: number) => {
	const person = getters.getPerson(value);
	Object.assign(formEdit, {
		id: person.id,
		name: person.name,
		age: person.age,
		gender: person.gender,
		phone: person.phone,
		address: person.address,
	});
	showEdit.value = true;
};

const saveHandle = () => {
	store.commit('updatePerson', formEdit);
	closeModalEdit();
};

const onChangeSort = (value: { fieldSort: string; isIncrease: boolean }) => {
	Object.assign(orderBy, { field: value.fieldSort, isIncrease: value.isIncrease });
};

// onMounted(() => {
// 	const myPromise = new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve('foo');
// 		}, 10000);
// 	});
// 	myPromise.then(function (res) {
// 		console.log(res);
// 	});
// });
</script>
<template>
	<div>
		<div class="filter_wrapper">
			<Filter
				@handle-add="openModal"
				@change-amount="changeAmount"
				@delete="onDelete"
				@search="onSearch"
				:amount="page.pageSize"
				v-model:search-field="searchProps"
				v-model:gender-filter="genderFilter"
			/>
		</div>
		<div class="table_wrapper">
			<Table
				:data="dataShow"
				:chosedList="chosedList"
				:chosedAll="chosedAllShow"
				:orderField="orderBy.field"
				:orderDirection="orderBy.isIncrease"
				@chosed-handle="onChosedHandle"
				@chosed-all="onChosedAll"
				@delete-person="onDeleteOne"
				@edit-person="onGetDetail"
				@on-change-sort="onChangeSort"
			/>
		</div>
		<div class="pagination_wrapper">
			<Pagination
				:page-number="page.pageNumber"
				:total-page="Math.ceil(dataTable / Number(page.pageSize))"
				@change-page="onChangePage"
			/>
		</div>
	</div>
	<Modal
		:show="show"
		@closeModal="closeModal"
		@save="addHandle"
	>
		<template #modal-content>
			<div class="mt-3 flex justify-between items-center">
				<div class="flex justify-start items-center">
					<span class="font-bold mr-1 w-36 block">Name: </span>
					<input
						v-model="form.name"
						class="flex-grow block p-2 pl-10 text-sm 0 border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>
				<div class="flex justify-start items-center">
					<span class="font-bold mr-1 w-36 block">Age: </span>
					<input
						v-model="form.age"
						class="block w-full p-2 pl-10 text-sm 0 border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>
			</div>

			<div class="mt-1 flex justify-start items-center">
				<span class="font-bold mr-1 w-36 block">Gender: </span>
				<select
					class="block w-full p-2 pl-10 text-sm 0 border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
					name=""
					id=""
					v-model="form.gender"
				>
					<option value="">Chose your gender</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</select>
			</div>

			<div class="mt-1 flex justify-start items-center">
				<span class="font-bold mr-1 w-36 block">Phone number: </span>
				<input
					v-model="form.phone"
					class="block w-full p-2 pl-10 text-sm 0 border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
				/>
			</div>
			<div class="mt-1 flex justify-start items-center">
				<span class="font-bold mr-1 w-36 block">Address: </span>
				<input
					v-model="form.address"
					class="block w-full p-2 pl-10 text-sm 0 border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
				/>
			</div>
		</template>
	</Modal>

	<!-- modal Edit -->
	<Modal
		:show="showEdit"
		@closeModal="closeModalEdit"
		@save="saveHandle"
	>
		<template #modal-content>
			<div class="mt-3 flex justify-between items-center">
				<div class="flex justify-start items-center">
					<span class="font-bold mr-1 w-36 block">Name: </span>
					<input
						class="block w-full p-2 pl-10 text-sm 0 border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
						v-model="formEdit.name"
					/>
				</div>
				<div class="flex justify-start items-center">
					<span class="font-bold mr-1 w-36 block">Age: </span>
					<input
						v-model="formEdit.age"
						class="block w-full p-2 pl-10 text-sm 0 border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>
			</div>

			<div class="mt-1 flex justify-start items-center">
				<span class="font-bold mr-1 w-36 block">Gender: </span>
				<select
					class="block w-full p-2 pl-10 text-sm 0 border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
					name=""
					id=""
					v-model="formEdit.gender"
				>
					<option value="">Chose your gender</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</select>
			</div>

			<div class="mt-1 flex justify-start items-center">
				<span class="font-bold mr-1 w-36 block">Phone number: </span>
				<input
					v-model="formEdit.phone"
					class="block w-full p-2 pl-10 text-sm 0 border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
				/>
			</div>
			<div class="mt-1 flex justify-start items-center">
				<span class="font-bold mr-1 w-36 block">Address: </span>
				<input
					v-model="formEdit.address"
					class="block w-full p-2 pl-10 text-sm 0 border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
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
</style>
