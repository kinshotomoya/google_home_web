import Vue from 'vue'
import App from '../../javascript/app.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from '../packs/store.js'


Vue.use(Vuetify)

// loadされると、以下のjsが発火する
document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    store,  // storeを登録。全てのコンポーネントからstoreにアクセスできるようになる
    components: { App }
  })
})
