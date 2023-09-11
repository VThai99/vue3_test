<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
const props = defineProps<{
	data?: any;
	chosedAll: boolean;
	chosedList: any;
}>();
const emit = defineEmits(['chosedHandle', 'chosedAll']);
const data = computed(() => props.data);
const chosedArr = computed(() => props.chosedList);
const chosedAllCom = computed(() => props.chosedAll);
const store = useStore();
const updateChosed = (value: number) => {
	emit('chosedHandle', value);
};
const handleGetPerson = (id: number) => {
	
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
					<td>
						<span
							@click="
								() => {
									handleGetPerson(item.id);
								}
							"
							>Edit</span
						>
						<span>Delete</span>
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
</style>
