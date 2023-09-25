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
// :class="[item === pageNumber ? 'active' : '', 'page_item']"
</script>
<template>
	<nav>
		<ul class="inline-flex -space-x-px text-base h-10">
			<li
				class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
				@click="firstPage"
			>
				<IconFirst />
			</li>
			<li
				class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
				@click="previousPage"
			>
				<IconPrevious />
			</li>
			<li
				class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
				v-if="pageNumber - 2 > 1"
			>
				...
			</li>
			<template
				v-for="item in totalPage"
				:key="item"
			>
				<li
					class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
					v-if="pageNumber - 2 <= item && item <= pageNumber + 2"
					@click="handleSelectPage(item)"
				>
					{{ item }}
				</li>
			</template>
			<li
				class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
				v-if="pageNumber + 2 < totalPage"
			>
				...
			</li>
			<li
				class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
				@click="nextPage"
			>
				<IconNext />
			</li>
			<li
				class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
				@click="lastPage"
			>
				<IconLast />
			</li>
		</ul>
	</nav>
</template>
