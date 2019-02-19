import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  state: {
    searchName: null,
    menuList: [
      'ユーザー情報',
      '会話一覧',
      'お知らせ'
    ],
    messages: null,
    headerTitle: 'みんなの会話',  // 初期値は「みんなの会話」にする
    loading: false
  },
  mutations: {  // methodsみたいなもの
    setSearchName(state, payload) {  // payloadは、commitからの引数
      state.searchName = payload
    },
    setMessages(state, payload) {
      state.messages = payload
    },
    setHeaderTitle(state, payload) {
      state.headerTitle = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    }
  },
  actions: {  // 非同期で行いたいアクションを指定する。基本的にdispatchでアクションを指定する！！！
    doChangeSearchName({ commit }, searchName) {
      commit('setSearchName', searchName)
    },
    doAddMessages({ commit }, messages) {  // messagesには、サーバーサイドから取得したmessageの配列が格納されている
      commit('setMessages', messages)
    },
    doChangeHeaderTitle({ commit }, title) {
      commit('setHeaderTitle', title)
    },
    doChangeLoading({ commit }, bool) {
      commit('setLoading', bool)
    }
  }
})

export default store
