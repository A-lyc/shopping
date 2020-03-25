import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//安装的插件
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

//自定义的插件
import toast from './components/common/toast'



Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

//安装子级定义的插件toast
Vue.use(toast)

//解决移动端的300ms延迟
FastClick.attach(document.body)

//使用图片懒加载插件
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



