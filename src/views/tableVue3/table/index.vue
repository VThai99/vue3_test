<script setup lang="ts">
defineProps<{
	data?: any
}>()
</script>
<template>
	<div>
		<table border="1" class="table_style">
			<thead>
				<tr>
					<td><input type="checkbox"></td>
					<td>Name</td>
					<td>Age</td>
					<td>Gender</td>
					<td>Phone Number</td>
					<td>Address</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in data">
					<td><input type="checkbox"></td>
					<td>{{ item.name }}</td>
					<td>{{ item.age }}</td>
					<td>{{ item.gender }}</td>
					<td>{{ item.phone }}</td>
					<td>{{ item.address }}</td>
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