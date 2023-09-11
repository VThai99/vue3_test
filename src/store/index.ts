import { createStore } from 'vuex';

const store = createStore({
	state: {
		tableData: [
			{
				id: 1,
				name: 'Tran Van A',
				age: '25',
				gender: 'Male',
				phone: '098763446',
				address: 'New York',
			},
			{
				id: 2,
				name: 'Tran Van b',
				age: '27',
				gender: 'Male',
				phone: '097676446',
				address: 'Ha Noi',
			},
			{
				id: 3,
				name: 'Nguyen Mai Phuong',
				age: '19',
				gender: 'Female',
				phone: '0975658755',
				address: 'New York',
			},
			{
				id: 4,
				name: 'Tran Van A',
				age: '25',
				gender: 'Male',
				phone: '098763446',
				address: 'New York',
			},
			{
				id: 5,
				name: 'Tran Van b',
				age: '27',
				gender: 'Male',
				phone: '097676446',
				address: 'Ha Noi',
			},
			{
				id: 6,
				name: 'Nguyen Mai Phuong',
				age: '19',
				gender: 'Female',
				phone: '0975658755',
				address: 'New York',
			},
			{
				id: 7,
				name: 'Tran Van A',
				age: '25',
				gender: 'Male',
				phone: '098763446',
				address: 'New York',
			},
			{
				id: 8,
				name: 'Tran Van b',
				age: '27',
				gender: 'Male',
				phone: '097676446',
				address: 'Ha Noi',
			},
			{
				id: 9,
				name: 'Nguyen Mai Phuong',
				age: '19',
				gender: 'Female',
				phone: '0975658755',
				address: 'New York',
			},
		],
		count: 1,
	},
	mutations: {
		// synchronous handle
		increment(state: any, payload: any) {
			state.count += payload.amount;
		},
		addPerson(state: any, payload: any) {
			state.tableData.push(payload.newPerson);
		},
		deletePerson(state: any, payload: any) {
			state.tableData = state.tableData.filter((item: any) => {
				if (!payload.deleteArr.includes(item.id)) return item;
			});
		},
	},
	actions: {
		// asynchronous handle
	},
	getters: {
		getPerson: (state: any) => (id: number) => {
			return state.tableData.find((item: any) => item.id === id);
		},
	},
});

export default store;
