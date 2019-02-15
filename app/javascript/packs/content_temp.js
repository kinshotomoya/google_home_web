import Vue from 'vue'
import ContentTemplate from '../components/content.vue'
import axios from 'axios'


// loadされると、以下のjsが発火する
document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#content',
    components: { ContentTemplate },
    data: {
      searchQuery: '',
      messages: [],
      searchName: null
    },
    created: function() {
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
    watch: {
      searchQuery: function () {
        console.log(this.searchQuery)
        // TODO: 
      }
    }
  })
})
