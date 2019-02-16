import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    searchName: null
  },
  mutations: {  // methodsみたいなもの
    setSearchName(state, payload) {  // payloadは、commitからの引数
      state.searchName = payload
    }
  },
  actions: {  // 非同期で行いたいアクションを指定する。基本的にdispatchでアクションを指定する！！！
    doChangeSearchName({ commit }, searchName) {
      commit('setSearchName', searchName)
    }
  }
})

export default store
