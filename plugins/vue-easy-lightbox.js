import Vue from 'vue'
import Lightbox from 'vue-easy-lightbox'

Vue.use(Lightbox)

if (process.client) {
    require('vue-easy-lightbox');
  }