import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'common/js/back'
import '../static/common.css'
import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
