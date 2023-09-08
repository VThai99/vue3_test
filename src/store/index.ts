import { createStore } from 'vuex'

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
    ],
    count: 1
  },
  mutations: {
    // synchronous handle
    increment(state: any, payload: any) {
      state.count += payload.amount
    },
    addPerson(state: any, payload: any) {
      state.tableData.push(payload.newPerson)
    },
    deleteTable(state: any, payload: any){
      state.dumyData = state.dumyData.filter((item: any) => item.id !== payload.id)
    }
  },
  actions: {
    // asynchronous handle
  },
  getters: {
    getTodo: (state:any) => (id:Number) => { 
      return state.dumyData.find((item: any) => item.id === id)
    }
  }
})

export default store
