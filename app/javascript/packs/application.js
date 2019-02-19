import Vue from 'vue'
import App from '../../javascript/app.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import store from '../packs/store.js'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'


Vue.use(Vuetify, {
  iconfont: 'fa'  // fontawesomeを使うために指定
})

Vue.use(VueRouter)

// loadされると、以下のjsが発火する
document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    store,  // storeを登録。全てのコンポーネントからstoreにアクセスできるようになる
    components: { App }
  })
})
