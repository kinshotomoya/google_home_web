<template>
  <div id='content'>
    <v-hover>
      <v-timeline>
        <v-timeline-item
          v-for='message in messages'
          :key='message.id'
          large
          class='timeline-item'
        >
          <v-avatar slot="icon">
            <img src="http://i.pravatar.cc/64">
          </v-avatar>
          <span slot="opposite">{{ message.user_name }}</span>
          <v-card class="elevation-2">
            <v-card-title class="headline">{{ message.created_at }}</v-card-title>
            <v-card-text>{{ message.text }}</v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-hover>
  </div>
</template>

<script>
import axios from 'axios'
import lodash from 'lodash'

export default {
  props: {
  },
  data() {
    return {
      messages: [],
      colorName: ''
    }
  },
  created() {
    this.get_messages()
  },
  methods: {
    get_messages() {
      // TODO:async awaitで書き直す
      // TODO: 取得したmessagesをstoreに登録する処理を書く
      axios.get('api/messages')
        .then(res => {
          // console.log(res.data)
          this.$store.dispatch('doAddMessages', res.data)
          this.messages = this.$store.state.messages
        })
    }
  },
  computed: {
    setCardColor: function(){  // computedでは引数を受け取ることができないので、このようなfunctionをreturnする書き方にする
      return function(message) {
        var colorName
        var user_id = message.user_id
        if(user_id === 1) {
          colorName = 'cyan lighten-4'
        } else if(user_id === 2) {
          colorName = 'deep-orange lighten-4'
        } else if(user_id === 3) {
          colorName = 'purple lighten-4'
        } else if(user_id === 4) {
          colorName = 'pink lighten-4'
        } else if(user_id === 5) {
          colorName = 'teal lighten-4'
        } else {
          colorName = 'blue-grey lighten-4'
        }
        return colorName
      }
    },
    matchSearchName: function() {  // searchNameと同じ名前のmesageがあればtrueを返す
      return function(message) {
        var searchName = this.$store.state.searchName
        if (message.user_name.indexOf(searchName) != -1 || searchName === null) {
          return true
        } else {
          return false
        }
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {  //  これでvmでインスタンスにアクセスできる
      vm.$store.dispatch('doChangeHeaderTitle', 'みんなの会話')
    })
  }
}
</script>

<style lang="css" scoped>
  .message_content {
    margin: 50px;
    text-align: center;
  }
  .each_message_wrapper {
    margin: 30px 0 !important;
  }
  #content {
    margin-top: 130px;
  }
  .message_text {
    margin: 30px 0;
  }
  .card {
    font-size: 15px;
  }
  .v-enter-active, .v-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }
  .v-enter{
    opacity: 0;
    transform: translateX(-10px);
  }
  .v-leave-to {
    opacity: 0;
    transform: translateX(10px);
  }
  .elevation-2 {
    font-size: 10px;
  }
  .headline {
    font-size: 12px !important;
  }
  .v-timeline {
    margin: 0 5px;
  }
</style>
