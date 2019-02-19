import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../packs/components/content.vue'
import UserShow from '../packs/components/user_show.vue'
import Information from '../packs/components/information.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { name: 'talk', path: '/', component: Content },
    { name: 'user_show', path: '/users/:id', component: UserShow },  // idなどのパラメータがあるときは、nameを指定
    { name: 'info', path: '/info', component:  Information}
  ]
})

export default router
