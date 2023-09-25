<script lang="ts">
export default {
	props: ['amount', 'searchField', 'genderFilter'],

	data() {
		return {};
	},
	methods: {
		onChangeAmount(event: any) {
			const newAmount = event.target.value;
			this.$emit('changeAmount', newAmount);
		},
		onInput(event: any) {
			this.$emit('update:searchField', event.target.value);
		},

		onSelectGender(event: any) {
			this.$emit('update:genderFilter', event.target.value);
		},
	},
};
</script>
<template>
	<div class="flex justify-between items-center">
		<label
			for="default-search"
			class="mb-2 text-sm font-medium sr-only text-white"
			>Search</label
		>
		<div class="relative w-1/3">
			<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<svg
					class="w-4 h-4 text-gray-400"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 20 20"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
					/>
				</svg>
			</div>
			<input
				type="search"
				id="default-search"
				:value="searchField"
				@input="onInput"
				class="block w-full p-4 pl-10 text-sm 0 border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
				placeholder="Search name, address"
				required
			/>
			<button
				@click="$emit('search')"
				class="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
			>
				Search
			</button>
		</div>
		<div class="flex justify-center items-center gap-5">
			<div class="text-base font-bold">Gender:</div>
			<div class="flex items-center gap-3">
				<input
					class="w-4 h-4 outline-none text-blue-600 focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
					type="radio"
					id="not_select"
					name="gender"
					:value="''"
					:checked="genderFilter == ''"
					@change="onSelectGender"
				/>
				<label
					for="not_select"
					class="text-sm font-mediumtext-gray-900 text-gray-900"
					>Both</label
				>
				<input
					class="w-4 h-4 outline-none text-blue-600 focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
					type="radio"
					id="gender_male"
					name="gender"
					:value="'Male'"
					:checked="genderFilter == 'Male'"
					@change="onSelectGender"
				/>
				<label
					for="gender_male"
					class="text-sm font-mediumtext-gray-900 text-gray-900"
					>Male</label
				>
				<input
					class="w-4 h-4 outline-none text-blue-600 focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
					type="radio"
					id="gender_female"
					name="gender"
					:value="'Female'"
					:checked="genderFilter == 'Female'"
					@change="onSelectGender"
				/>
				<label
					class="text-sm font-mediumtext-gray-900 text-gray-900"
					for="gender_female"
					>Female</label
				>
			</div>
		</div>
	</div>

	<div class="flex justify-between items-center mt-10">
		<div>
			<button
				type="button"
				@click="$emit('delete')"
				class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-800 shadow-lg shadow-red-800/80 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2"
			>
				Delete
			</button>
			<button
				type="button"
				@click="$emit('handleAdd')"
				class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 shadow-lg shadow-blue-800/80 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2"
			>
				Add new
			</button>
		</div>

		<select
			class="w-15 text-centerborder text-base rounded-lg block px-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
			:value="amount"
			name=""
			id=""
			@change="onChangeAmount"
		>
			<option value="5">5</option>
			<option value="10">10</option>
			<option value="20">20</option>
		</select>
	</div>
</template>
