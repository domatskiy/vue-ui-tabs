import Vue from 'vue'
import App from './App.vue'
import UITabs from 'plugin'

console.log('UITabs', UITabs)
Vue.use(UITabs)

new Vue({
  el: '#app',
  render: h => h(App)
})
