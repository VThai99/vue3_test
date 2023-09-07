<script setup lang="ts">
import { reactive } from 'vue';
import IconFirst from '../../../components/icons/IconFirst.vue';
import IconPrevious from '../../../components/icons/IconPrevious.vue';
import IconLast from '../../../components/icons/IconLast.vue';
import IconNext from '../../../components/icons/IconNext.vue';

const pageAtt = reactive({ page: 3 });
const arrayPage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const previousPage = () => {
	if (pageAtt.page > 1) pageAtt.page -= 1;
};
const nextPage = () => {
	if (pageAtt.page < arrayPage.length) pageAtt.page += 1;
};
const firstPage = () => {
	pageAtt.page = 1;
};
const lastPage = () => {
	pageAtt.page = arrayPage.length;
};
const handleSelectPage = (item: number) => {
	pageAtt.page = item;
};
</script>
<template>
	<div class="page_nav">
		<li
			class="page_item"
			@click="firstPage"
		>
			<IconFirst />
		</li>
		<li
			class="page_item"
			@click="previousPage"
		>
			<IconPrevious />
		</li>
		<li
			class="prefix"
			v-if="pageAtt.page - 2 > 1"
		>
			...
		</li>
		<template v-for="item in arrayPage">
			<li
				:class="[item === pageAtt.page ? 'active' : '', 'page_item']"
				v-if="pageAtt.page - 2 <= item && item <= pageAtt.page + 2"
				@click="handleSelectPage(item)"
			>
				{{ item }}
			</li>
		</template>
		<li
			class="prefix"
			v-if="pageAtt.page + 2 < arrayPage.length"
		>
			...
		</li>
		<li
			class="page_item"
			@click="nextPage"
		>
			<IconNext />
		</li>
		<li
			class="page_item"
			@click="lastPage"
		>
			<IconLast />
		</li>
	</div>
</template>
<style>
.page_nav {
	display: flex;
	gap: 10px;
}
.page_item {
    font-size: 13px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
	cursor: pointer;
	border: 1px dashed black;
}
.page_item:hover {
	background: red;
}
.prefix {
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
}
.active {
	background: blue;
	color: white;
}
</style>
