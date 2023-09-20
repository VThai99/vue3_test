import { createStore } from 'vuex';

const store = createStore({
	state: {
		tableData: [
			{
				id: 1,
				name: 'Tran Van John',
				age: '20',
				gender: 'Male',
				phone: '098768665',
				address: 'New York',
			},
			{
				id: 2,
				name: 'Nguyen Van Binh',
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
				name: 'Tran Van Long',
				age: '29',
				gender: 'Male',
				phone: '09879996',
				address: 'New York',
			},
			{
				id: 5,
				name: 'Tran Tuan ANh',
				age: '27',
				gender: 'Male',
				phone: '097676446',
				address: 'Ha Noi',
			},
			{
				id: 6,
				name: 'Nguyen Mai Xong',
				age: '19',
				gender: 'Female',
				phone: '09756580034',
				address: 'New York',
			},
			{
				id: 7,
				name: 'Cao Van Thang',
				age: '29',
				gender: 'Female',
				phone: '098763746',
				address: 'New York',
			},
			{
				id: 8,
				name: 'Tran Luong Bang',
				age: '23',
				gender: 'Male',
				phone: '097645446',
				address: 'Ha Noi',
			},
			{
				id: 9,
				name: 'Nguyen Linh Linh',
				age: '19',
				gender: 'Female',
				phone: '0975645565',
				address: 'New York',
			},
			{
				id: 10,
				name: 'Tran Van Land',
				age: '25',
				gender: 'Male',
				phone: '098763446',
				address: 'New York',
			},
			{
				id: 12,
				name: 'Hoang Van Thin',
				age: '30',
				gender: 'Male',
				phone: '097676446',
				address: 'Ha Noi',
			},
			{
				id: 13,
				name: 'Pham Nhat Vuong',
				age: '56',
				gender: 'Male',
				phone: '0978888888',
				address: 'Mascova',
			},
			{
				id: 14,
				name: 'Tran Van Binh',
				age: '35',
				gender: 'Male',
				phone: '0988886666',
				address: 'Belin',
			},
			{
				id: 15,
				name: 'Nguyen Thien Tuan',
				age: '45',
				gender: 'Male',
				phone: '097666666',
				address: 'Ha Noi',
			},
			{
				id: 16,
				name: 'Nguyen Mai Phuong',
				age: '19',
				gender: 'Female',
				phone: '0975658755',
				address: 'New York',
			},
			{
				id: 17,
				name: 'Tran Van A',
				age: '25',
				gender: 'Female',
				phone: '098763446',
				address: 'New York',
			},
			{
				id: 18,
				name: 'Tran Van b',
				age: '27',
				gender: 'Male',
				phone: '097676446',
				address: 'Ha Noi',
			},
			{
				id: 19,
				name: 'Nguyen Mai Phuong',
				age: '19',
				gender: 'Female',
				phone: '0975658755',
				address: 'New York',
			},
			{
				id: 20,
				name: 'Tran Van John',
				age: '20',
				gender: 'Male',
				phone: '098768665',
				address: 'New York',
			},
			{
				id: 21,
				name: 'Nguyen Van Binh',
				age: '27',
				gender: 'Male',
				phone: '097676446',
				address: 'Ha Noi',
			},
			{
				id: 23,
				name: 'Nguyen Mai Phuong',
				age: '19',
				gender: 'Female',
				phone: '0975658755',
				address: 'New York',
			},
			{
				id: 24,
				name: 'Tran Van Long',
				age: '29',
				gender: 'Male',
				phone: '09879996',
				address: 'New York',
			},
			{
				id: 25,
				name: 'Tran Tuan ANh',
				age: '27',
				gender: 'Male',
				phone: '097676446',
				address: 'Ha Noi',
			},
			{
				id: 26,
				name: 'Nguyen Mai Xong',
				age: '19',
				gender: 'Female',
				phone: '09756580034',
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
		updatePerson(state: any, payload: any) {
			const indexUpdate = state.tableData.findIndex((obj: any) => obj.id === payload.id);
			(state.tableData[indexUpdate].id = payload.id),
				(state.tableData[indexUpdate].name = payload.name),
				(state.tableData[indexUpdate].age = payload.age),
				(state.tableData[indexUpdate].gender = payload.gender),
				(state.tableData[indexUpdate].phone = payload.phone),
				(state.tableData[indexUpdate].address = payload.address);
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
