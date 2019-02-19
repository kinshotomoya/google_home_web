// railsでいうapplication.html.erbみたいなもの。
<template>
  <div id='app'>
    <HeaderTemp/>
    <LoadingOverlay v-show='loading' />
    <router-view v-show='!loading' />
  </div>
</template>

<script>
  import LoadingOverlay from './packs/components/loading_overlay.vue'
  import HeaderTemp from './packs/components/header_temp.vue'
  import Content from './packs/components/content.vue'


  export default {
    name: 'MyApp',
    components: {
      HeaderTemp,
      Content,
      LoadingOverlay
    },
    computed: {
      loading() {
        return this.$store.state.loading
      }
    },
  }
</script>

<style lang="css">
</style>
