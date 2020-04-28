import Vue from 'vue';
import VueRouter from 'vue-router';
// import VueResource from 'vue-resource';
import Home from '../components/home/home.vue';
import ViewResume from '../components/home/viewResume.vue';
import EditResume from '../components/home/editResume.vue';
import Articles from '../components/home/articles.vue';
Vue.use(VueRouter);
// Vue.use(VueResource);

import '../assets/css/global.css';
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';

//global component
import NavBar from '../components/common/navBar.vue';
import FootBar from '../components/common/footerBar.vue';
Vue.component('nav-bar',NavBar);
Vue.component('foot-bar',FootBar);


export default new VueRouter({
  mode:'history',
  linksActiveClass:'mui-active',
  routes: [
    {path:'/',redirect:{name:'home'}},
    {path:'/home',name:'home',component:Home},
    {path:'/viewResume',name:'viewResume',component:ViewResume},
    {path:'/editResume',name:'editResume',component:EditResume},
    {path:'/articles',name:'articles',component:Articles},
  ]
})
