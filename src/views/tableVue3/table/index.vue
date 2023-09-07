<template>
	<div>
		<table border="1" class="table_style">
			<thead>
				<tr>
					<td></td>
					<td>Name</td>
					<td>Age</td>
					<td>Gender</td>
					<td>Phone Number</td>
					<td>Address</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><input type="checkbox"></td>
					<td>Tran Van A</td>
					<td>25</td>
					<td>Male</td>
					<td>09754575645</td>
					<td>New York</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<style>
.table_style{
    width: 100%;
    text-align: center;
    font-size: 13px;
	border-radius: 10px;
}
.table_style thead{
    background-color: blue;
    color: #fff;
    font-size: 18px;
}
</style>