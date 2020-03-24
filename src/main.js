import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from './components/common/toast'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

//安装子级定义的插件toast
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


const arr = [0,1, 2, 3, 45, 8, 8, true, false]

const array =  arr.filter(item =>{
 if(item===false){
   item = true
 }
 return item
})
console.log(array)
