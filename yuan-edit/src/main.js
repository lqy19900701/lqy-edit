
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueRouter from 'vue-router'
import Babelpolyfill from 'babel-polyfill'
// import VueResource from 'vue-resource';

Vue.use(VueRouter)
//Vue.use(VueResource);

Vue.config.productionTip = false
Vue.prototype.$axios=axios

global.axios=axios
// axios.defaults.baseURL='http://localhost:8080/api'
// axios 配置
axios.defaults.timeout = 10000;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8;';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
//    /api这个位置在config/index.js里面设置了代理，指向 localhost:8081/api这个后台地址
axios.defaults.baseURL = '/api';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

