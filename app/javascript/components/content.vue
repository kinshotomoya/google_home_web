// ここにtalkのviewを置く
<template>
  <div>
    {{ messageData.text }}
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
