<template>
  <div>
    <div>
      <v-toolbar
        color="pink"
        dark
      >
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>My Music</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <input name='query' v-model='searchQuery' placeholder='Search talks by name'>
        </v-btn>
      </v-toolbar>
    </div>
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
