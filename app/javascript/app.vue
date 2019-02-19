// railsでいうapplication.html.erbみたいなもの。
<template>
  <div id='app'>
    <HeaderTemp/>
    <router-view />
  </div>
</template>

<script>
  import HeaderTemp from './packs/components/header_temp.vue'
  import Content from './packs/components/content.vue'

  export default {
    name: 'MyApp',
    components: {
      HeaderTemp,
      Content
    }
  }
</script>
