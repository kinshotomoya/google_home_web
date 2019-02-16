import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    searchName: null
  },
  mutations: {
    changeSearchName(state, payload) {  // payloadは、commitからの引数
      state.searchName = payload
    }
  }
})

export default store
