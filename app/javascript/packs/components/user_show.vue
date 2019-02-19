<template>
  <div id='user_show'>
    ユーザーの詳細画面です。
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    console.log('user_showです')
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
