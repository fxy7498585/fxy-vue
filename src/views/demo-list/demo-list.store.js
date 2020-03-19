import { debounce } from '../../util/demo-list.util';
const DemoListModule= {
  state: {
    number: 0
  },
  getters: {
  },
  mutations: {
    addNumber(state) {
      debounce(() => {
        state.number ++;
      })
    }
  },
  actions: {

  },
  modules: {
  }
}


export default DemoListModule;