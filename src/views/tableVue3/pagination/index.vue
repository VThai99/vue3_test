<script lang="ts">
import IconFirst from '../../../components/icons/IconFirst.vue';
import IconLast from '../../../components/icons/IconLast.vue';
import IconNext from '../../../components/icons/IconNext.vue';
import IconPrevious from '../../../components/icons/IconPrevious.vue';
// import { defineProps } from 'vue';

export default {
	props: {
		pageNumber: Number,
		totalPage: Number,
	},
	components: {
		IconFirst,
		IconLast,
		IconNext,
		IconPrevious,
	},
	setup(props, { emit }) {
		const handleSelectPage = (item: number) => {
			emit('changePage', item);
		};

		const previousPage = () => {
			if (props.pageNumber! > 1) emit('changePage', props.pageNumber! - 1);
		};
		const nextPage = () => {
			if (props.pageNumber! < props.totalPage!) emit('changePage', props.pageNumber! + 1);
		};
		const firstPage = () => {
			emit('changePage', 1);
		};
		const lastPage = () => {
			emit('changePage', props.totalPage);
		};
		return {
			handleSelectPage,
			previousPage,
			nextPage,
			firstPage,
			lastPage,
		};
	},
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
			v-if="pageNumber - 2 > 1"
		>
			...
		</li>
		<template
			v-for="item in totalPage"
			:key="item"
		>
			<li
				:class="[item === pageNumber ? 'active' : '', 'page_item']"
				v-if="pageNumber - 2 <= item && item <= pageNumber + 2"
				@click="handleSelectPage(item)"
			>
				{{ item }}
			</li>
		</template>
		<li
			class="prefix"
			v-if="pageNumber + 2 < totalPage"
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
