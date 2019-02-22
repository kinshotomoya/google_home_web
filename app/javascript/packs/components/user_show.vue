<template>
  <div id='user_show'>
    <v-avatar
      color="grey lighten-4"
      class="user_show_avatar"
    >
      <img class='user_show_icon' v-bind:src="showLineIcon" alt="avatar">
    </v-avatar>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {  //  これでvmでインスタンスにアクセスできる
      vm.$store.dispatch('doChangeHeaderTitle', 'ユーザー詳細')
    })
  },
  created() {
    this.getUsers()
  },
  methods: {
    getUsers: async function() {
      // lineIdでaxiosでサーバーからuserのデータを取得して、stateで管理する
      if (this.$store.state.userData === null) {  // userDataがまだstateにない時だけ、api叩く
        const lineId = this.$store.state.lineLiffProfile.userId
        const res = await axios.get('api/users', {
          params: {
            line_id: lineId
          }
        })
        this.$store.dispatch('doChangeUserData', res.data)
      }
    }
  },
  computed: {
    showLineIcon() {
      if (this.$store.state.lineLiffProfile === null) {
        return 'https://vuetifyjs.com/apple-touch-icon-180x180.png'
      }
      return this.$store.state.lineLiffProfile.pictureUrl
    }
  },
}
</script>

<style lang="css">
  #user_show {
    margin-top: 200px;
    text-align: center;
  }
  .user_show_avatar {
    height: 100px !important;
    width: 50% !important;
  }
  .user_show_icon {
    height: 100% !important;
    width: 100% !important;
  }
</style>
