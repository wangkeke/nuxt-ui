import Vue from 'vue'
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'
window.Hls = require('videojs-contrib-hls')
Vue.use(window.Hls)
Vue.use(VueDPlayer)
