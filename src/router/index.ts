import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Table from '../views/tableVue3/index.vue';
import { defineAsyncComponent } from 'vue';
import LoadingCompVue from '@/components/loading/LoadingComp.vue';
const AsyncComponentTest = defineAsyncComponent({
	loader: () => import('../views/tableVue3/index.vue'),
	loadingComponent: LoadingCompVue,
	delay: 1000,
});

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/table',
			name: 'table',
			component: AsyncComponentTest,
		},
	],
});

export default router;
