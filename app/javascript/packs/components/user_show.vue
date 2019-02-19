<template>
  <div id='user_show'>
    ユーザーの詳細画面です。
  </div>
</template>

<script>
// import router from '../../packs/router.js'  


export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {  //  これでvmでインスタンスにアクセスできる
      vm.$store.dispatch('doChangeHeaderTitle', 'ユーザー詳細')
    })
  }
}
</script>

<style lang="css">
  #user_show {
    margin-top: 130px;
  }
</style>