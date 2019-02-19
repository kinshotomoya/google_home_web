<template>
  <div id='information'>
    お知らせです
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {  // このコンポーネントにアクセスする前に、このメソッドが呼ばれる
    next(vm => {  //  これでvmでインスタンスにアクセスできる
      vm.$store.dispatch('doChangeHeaderTitle', 'お知らせ')
    })
  }
}
</script>

<style lang="css">
  #information {
    margin-top: 130px;
  }
</style>
