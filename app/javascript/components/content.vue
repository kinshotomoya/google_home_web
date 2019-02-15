// ここにtalkのviewを置く
<template>
  <div id='message_content'>
    <div>
      {{ messageData.text }}
    </div>
    <div>
    {{ messageData.user_name }}
    </div>
  </div>
  
</template>

<script>
export default {
  props: {
    messageData: Object
  }
}
</script>

<style lang="css">
  .unsearched {
    display: none;
  }
</style>
