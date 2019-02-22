<template>
  <div id='user_show'>
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
      const lineId = this.$store.state.lineLiffProfile.userId
      if (this.$store.state.userData === null) {  // userDataがまだstateにない時だけ、api叩く
        const res = await axios.get('api/users', {
          params: {
            line_id: lineId
          }
        })
        alert(res.data.name)
        this.$store.dispatch('doChangeUserData', res.data)
      }
    }
  },
}
</script>

<style lang="css">
  #user_show {
    margin-top: 130px;
  }
</style>
