<template>
  <div id='header'>
    <v-toolbar
      fixed
      height="130px"
      dark
      color="blue darken-4"
      class='header_tool_bar'
    >
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class='toolbar-title'>みんなの会話</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        placeholder="名前で検索"
        v-model='searchQuery'
        class='text-field'
      >
      </v-text-field>
    </v-toolbar>
  </div>
</template>

<script>

export default {
  data() {
    return {
      searchQuery: '',
    }
  },
  created: function () {
    this.debouncedGetAnswer = _.debounce(this.searchMemberTalk, 500)
  },
  methods: {
    searchMemberTalk() {
      name = this.searchQuery
      if (name === '') {  // inputに何も文字がない場合は、全部の会話を表示させる
        this.$store.dispatch('doChangeSearchName', null)  // dispatchでstore.jsのactionsを実行する
      } else {
        this.$store.dispatch('doChangeSearchName', this.searchQuery)
      }
    }
  },
  watch: {
    searchQuery: function () {
      this.debouncedGetAnswer()
    }
  }
}
</script>>

<style lang="css" scoped>
  .header_tool_bar {
  }

  .v-toolbar__content {
  }
  .toolbar-title {
    font-size: 30px;
  }
  .text-field {
    font-size: 25px;
  }
</style>
