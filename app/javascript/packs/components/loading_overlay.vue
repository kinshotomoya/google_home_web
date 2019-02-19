// オーバーレイ用のコンポーネント
<template>
  <transition name='loading'>
    <div class='loading text-xs-center'>
      <v-progress-circular
        :size="50"
        color="blue darken-4"
        indeterminate
      ></v-progress-circular>
    </div>
  </transition>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .loading {
    margin-top: 200px;
  }
</style>
