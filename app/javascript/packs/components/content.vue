<template>
  <div id='content'>
    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout
            row wrap justify-center
            v-for='message in messages'
            v-bind:key='message.id'
        >
          <v-flex
            xs6 
            v-bind:class="(message.user_name.indexOf(searchName) != -1 || searchName === null) ? 'searched' : 'unsearched'"
          >
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{ message.user_name }}</div>
                  <span>{{ message.text }}</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
              </v-card-actions>
            </v-card>  
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
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
      searchQuery: ''
    }
  },
  created() {
    this.get_messages()
  },
  methods: {
    get_messages() {
      // TODO:async awaitで書き直す
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
    }
  },
}
</script>

<style lang="css">
  .unsearched {
    display: none;
  }
  .message_content {
    margin: 50px;
    text-align: center;
  }
</style>
