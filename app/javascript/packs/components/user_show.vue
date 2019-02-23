<template>
  <div id='user_show'>
    <v-avatar
      color="grey lighten-4"
      class="user_show_avatar"
    >
      <img class='user_show_icon' v-bind:src="showLineIcon" alt="avatar">
    </v-avatar>
    <div id="name_container">
      <v-app id="inspire">
        <v-form v-model="valid">
          <v-container>
            <v-layout>  
              <v-flex
                xs12
                md4
              >
                <v-text-field
                  v-model="userName"
                  :rules="nameRules"
                  :counter="10"
                  label="Last name"
                  required
                ></v-text-field>
              </v-flex>
      
            </v-layout>
          </v-container>
        </v-form>
      </v-app>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    userName: String
  },
  data() {
    return {
      valid: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ]
    }
  },
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
    },
    userName() {
      // createdされる前に、この処理が行われて、' 'を返す。
      // そのあと、createdないの処理が実行され、stateが変化すると、再びこのメソッドが呼ばれて
      // this.$store.state.userData.nameを返す
      const userName = this.$store.state.userData === null ? '' : this.$store.state.userData.name
      return userName
    }
  },
  watch: {
    // nameが変更されたら、呼ばれて、axiosでuser nameをupdateするAPIを叩く。
    // 変更されたら、stateのuserDataのnameも変更する
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
