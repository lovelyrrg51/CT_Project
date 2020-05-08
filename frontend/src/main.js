import Vue from 'vue'
import './plugins/vuetify'
//import './plugins/sofbox'
import './plugins/axios'
import router from './router'
import store from './store/store'
import { sync } from 'vuex-router-sync'
import VueClipboard from 'vue-clipboard2'
 
import BootstrapVue from "bootstrap-vue"

import App from './App'

Vue.config.productionTip = false;

Vue.use(VueClipboard);
Vue.use(BootstrapVue);

sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
