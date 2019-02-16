<template>
  <div id='content'>
    <v-hover>
      <v-card
      >
        <v-container
          fluid
          grid-list-lg
        >
          <v-layout
              row wrap justify-center
              v-for='message in messages'
              v-bind:key='message.id'
              class="mx-auto"
          >
            <v-flex
              xs8
              v-bind:class="(message.user_name.indexOf(searchName) != -1 || searchName === null) ? 'searched' : 'unsearched'"
            >
              <v-card v-bind:color="setCardColor(message)" class="dark--text card" hover tile>
                <v-card-title primary-title>
                  <div>
                    <span class="headline">{{ message.user_name }}</span>
                    <span>{{ message.created_at }}</span>
                    <div class='message_text'>{{ message.text }}</div>
                  </div>
                </v-card-title>
              </v-card>  
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
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
      searchQuery: '',
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
          console.log(res.data)
          this.messages = res.data
        })
    }
  },
  computed: {
    searchName() {  // ローカルのsearchNameとstoreのsearchNameを同期する
      return this.$store.state.searchName
    },
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
    }
  },
}
</script>

<style lang="css" scoped>
  .unsearched {
    display: none;
  }
  .message_content {
    margin: 50px;
    text-align: center;
  }
  #content {
    margin-top: 130px;
  }
  .message_text {
    margin: 30px 0;
  }
  .card {
    font-size: 25px;
  }
</style>
