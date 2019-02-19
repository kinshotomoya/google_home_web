<template>
  <div id='header'>
    <v-toolbar
      fixed
      height="130px"
      dark
      color="blue darken-4"
      class='header_tool_bar'
    >
      <div class='left-side-bar'>
        <v-menu transition='slide-x-transition'>
          <v-toolbar-side-icon slot='activator'></v-toolbar-side-icon>
          <v-list class='menu-list'>
            <v-list-tile class='list-item-wrapper'>
              <router-link :to="{ name: 'user_show', params: { id: 1 } }">
                <v-list-tile-title v-text='menuList[0]' class='menu-list-name'></v-list-tile-title>
              </router-link>
            </v-list-tile>
            <v-list-tile class='list-item-wrapper'>
              <router-link :to="{ name: 'talk', params: { } }">
                <v-list-tile-title v-text='menuList[1]' class='menu-list-name'></v-list-tile-title>
              </router-link>
            </v-list-tile>
            <v-list-tile class='list-item-wrapper'>
              <router-link :to="{ name: 'info', params: { } }">
                <v-list-tile-title v-text='menuList[2]' class='menu-list-name'></v-list-tile-title>
              </router-link>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>
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
      menuList: this.$store.state.menuList
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
    font-size: 20px;
  }
  .text-field {
    font-size: 12px;
  }
  .menu-list-name {
    font-size: 20px;    
  }
  .list-item-wrapper {
    margin: 30px 15px;
  }
  .v-menu__content {
    top: 47px !important;
    left: 30px !important;
  }
  .v-input__slot {
    margin-bottom: 0px !important;
  }
</style>
