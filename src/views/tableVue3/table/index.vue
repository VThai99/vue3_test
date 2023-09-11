<script setup lang="ts">
import IconEdit from '@/components/icons/IconEdit.vue';
import IconDelete from '@/components/icons/IconDelete.vue';
import { computed } from 'vue';
const props = defineProps<{
	data?: any;
	chosedAll: boolean;
	chosedList: any;
}>();
const emit = defineEmits(['chosedHandle', 'chosedAll', 'editPerson', 'deletePerson']);
const data = computed(() => props.data);
const chosedArr = computed(() => props.chosedList);
const chosedAllCom = computed(() => props.chosedAll);
const updateChosed = (value: number) => {
	emit('chosedHandle', value);
};
const handleGetPerson = (id: number) => {
	emit('editPerson', id);
};
const handleDeletePerson = (id: number) => {
	emit('deletePerson', id);
};
</script>
<template>
	<div>
		<table
			border="1"
			class="table_style"
		>
			<thead>
				<tr>
					<td>
						<input
							type="checkbox"
							:checked="chosedAllCom"
							@change="emit('chosedAll')"
						/>
					</td>
					<td>Name</td>
					<td>Age</td>
					<td>Gender</td>
					<td>Phone Number</td>
					<td>Address</td>
					<td>Action</td>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="item in data"
					:key="item.id"
				>
					<td>
						<input
							type="checkbox"
							:checked="chosedArr.includes(item.id)"
							@change="
								() => {
									updateChosed(item.id);
								}
							"
						/>
					</td>
					<td>{{ item.name }}</td>
					<td>{{ item.age }}</td>
					<td>{{ item.gender }}</td>
					<td>{{ item.phone }}</td>
					<td>{{ item.address }}</td>
					<td class="action_style">
						<span
							@click="
								() => {
									handleGetPerson(item.id);
								}
							"
							><IconEdit
						/></span>
						<span
							@click="
								() => {
									handleDeletePerson(item.id);
								}
							"
							><IconDelete
						/></span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<style>
.table_style {
	width: 100%;
	text-align: center;
	font-size: 13px;
	border-radius: 10px;
}

.table_style thead {
	background-color: rgba(24, 24, 31, 0.712);
	color: #fff;
	font-size: 18px;
}
.action_style {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
}
.action_style span{
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}
</style>
