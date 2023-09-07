import { createStore } from 'vuex'

const store = createStore({
  state: {
    dumyData: [
      {
        id: 111,
        title: 'Todo1',
        status: 'checked'
      },
      {
        id: 112,
        title: 'Todo2',
        status: 'checked'
      },
      {
        id: 113,
        title: 'Todo3',
        status: 'unchecked'
      }
    ],
    count: 1
  },
  mutations: {
    // synchronous handle
    increment(state: any, payload: any) {
      state.count += payload.amount
    },
    addTodo(state: any, payload: any) {
      state.dumyData.push(payload.newTodo)
    },
    deleteTodo(state: any, payload: any){
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
