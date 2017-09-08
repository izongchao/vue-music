import Vue from 'vue'
//路由组件
import router from './router'

import VueLocalStorage from 'vue-localstorage'

//图片懒加载
import VueLazyload from 'vue-lazyload'

//图片懒加载
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error:  require('./assets/default.png'),
    loading: require('./assets/default.png'),
    attempt: 1
})

Vue.use(VueLocalStorage);

//实例化
const app = new Vue({
    router
}).$mount('#app')