<script setup lang="ts">
import IconEdit from '@/components/icons/IconEdit.vue';
import IconDelete from '@/components/icons/IconDelete.vue';
import IconUp from '@/components/icons/IconUp.vue';
import IconDown from '@/components/icons/IconDown.vue';
const props = defineProps<{
	data: any;
	chosedAll: boolean;
	chosedList: any;
	orderField: string;
	orderDirection: boolean;
}>();
const emit = defineEmits([
	'chosedHandle',
	'chosedAll',
	'editPerson',
	'deletePerson',
	'onChangeSort',
]);
const updateChosed = (value: number) => {
	emit('chosedHandle', value);
};
const handleGetPerson = (id: number) => {
	emit('editPerson', id);
};
const handleDeletePerson = (id: number) => {
	emit('deletePerson', id);
};
const handleSort = (field: string) => {
	if (field !== props.orderField) {
		emit('onChangeSort', { fieldSort: field, isIncrease: true });
	} else {
		emit('onChangeSort', { fieldSort: field, isIncrease: !props.orderDirection });
	}
};
</script>
<template>
	<div>
		<table class="table-fixed w-full text-sm text-center text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th
						scope="col"
						class="px-6 py-3 w-1"
					>
						<input
							type="checkbox"
							:checked="chosedAll"
							@change="emit('chosedAll')"
						/>
					</th>
					<th
						scope="col"
						class="px-6 py-3"
						@click="handleSort('name')"
					>
						<div class="flex justify-center items-center gap-2">
							Name
							<span v-if="orderField == 'name' && orderDirection"><IconUp /></span>
							<span v-if="orderField == 'name' && !orderDirection"><IconDown /></span>
						</div>
					</th>
					<th
						scope="col"
						class="px-6 py-3"
						@click="handleSort('age')"
					>
						<div class="flex justify-center items-center gap-2">
							Age
							<span v-if="orderField == 'age' && orderDirection"><IconUp /></span>
							<span v-if="orderField == 'age' && !orderDirection"><IconDown /></span>
						</div>
					</th>
					<th
						scope="col"
						class="px-6 py-3"
						@click="handleSort('gender')"
					>
						<div class="flex justify-center items-center gap-2">
							Gender
							<span v-if="orderField == 'gender' && orderDirection"><IconUp /></span>
							<span v-if="orderField == 'gender' && !orderDirection"><IconDown /></span>
						</div>
					</th>
					<th
						scope="col"
						class="px-6 py-3"
						@click="handleSort('phone')"
					>
						<div class="flex justify-center items-center gap-2">
							Phone Number
							<span v-if="orderField == 'phone' && orderDirection"><IconUp /></span>
							<span v-if="orderField == 'phone' && !orderDirection"><IconDown /></span>
						</div>
					</th>
					<th
						scope="col"
						class="px-6 py-3"
						@click="handleSort('address')"
					>
						<div class="flex justify-center items-center gap-2">
							Address
							<span v-if="orderField == 'address' && orderDirection"><IconUp /></span>
							<span v-if="orderField == 'address' && !orderDirection"><IconDown /></span>
						</div>
					</th>
					<th
						scope="col"
						class="px-6 py-3"
					>
						Action
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="item in data"
					:key="item.id"
				>
					<td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
						<input
							type="checkbox"
							:checked="chosedList.includes(item.id)"
							@change="
								() => {
									updateChosed(item.id);
								}
							"
						/>
					</td>
					<td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
						{{ item.name }}
					</td>
					<td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
						{{ item.age }}
					</td>
					<td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
						{{ item.gender }}
					</td>
					<td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
						{{ item.phone }}
					</td>
					<td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
						{{ item.address }}
					</td>
					<td
						class="flex justify-center items-center gap-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
					>
						<span
							class="cursor-pointer"
							@click="
								() => {
									handleGetPerson(item.id);
								}
							"
							><IconEdit
						/></span>
						<span
							class="cursor-pointer"
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
