// railsでいうapplication.html.erbみたいなもの。
<template>
  <div id='app'>
    <HeaderTemp/>
    <Content/>
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
