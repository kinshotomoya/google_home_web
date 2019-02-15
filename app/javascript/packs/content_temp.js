import Vue from 'vue'
import ContentTemplate from '../components/content.vue'
import axios from 'axios'
import lodash from 'lodash'


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
      this.get_messages(),
      this.debouncedGetAnswer = _.debounce(this.searchMemberTalk, 500)
    },
    methods: {
      get_messages() {
        // TODO:async awaitで書き直す
        axios.get('api/messages')
        .then(res => {
          console.log(res.data)
          this.messages = res.data
        })
      },
      searchMemberTalk() {
        name = this.searchQuery
        if(name === '') {  // inputに何も文字がない場合は、全部の会話を表示させる
          this.searchName = null
        } else {
          this.searchName = this.searchQuery
        }
      }
    },
    watch: {
      searchQuery: function () {
        console.log(this.searchQuery)
        this.debouncedGetAnswer()
      }
    }
  })
})
