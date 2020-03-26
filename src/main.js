import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(ElementUI);
Vue.use(mavonEditor)
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

if (process.env.NODE_ENV == 'development') {
  Vue.prototype.$baseUrl = "https://localhost:3000";
} else if (process.env.NODE_ENV == 'production') {
  Vue.prototype.$baseUrl = "http://www.fxy-top.top";
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
