<script lang="ts" setup>
defineProps<{
	show: boolean;
}>();
</script>
<template>
	<Transition>
		<div
			v-if="show"
			class="fixed top-0 left-0 right-0 z-50 w-full overflow-y-auto h-full"
		>
			<div class="absolute shadow h-full w-full bg-neutral-500 bg-opacity-50">
				<div class="h-full flex justify-center items-center">
					<div
						class="flex flex-col bg-neutral-900 text-white p-4 h-2/5 w-1/2 rounded-2xl shadow-2xl"
					>
						<div class="flex justify-end items-center">
							<button
								type="button"
								@click="$emit('closeModal')"
								class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
								data-modal-hide="defaultModal"
							>
								<svg
									class="w-3 h-3"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 14"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
									/>
								</svg>
								<span class="sr-only">Close modal</span>
							</button>
						</div>
						<div class="flex-grow m-8">
							<slot name="modal-content"></slot>
						</div>
						<div class="flex justify-end items-center gap-5">
							<button
								class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-800 shadow-lg shadow-red-800/80 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2"
								@click="$emit('closeModal')"
							>
								Cancel
							</button>
							<button
								class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 shadow-lg shadow-blue-800/80 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2"
								@click="$emit('save')"
							>
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Transition>
</template>
<style>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s linear;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
