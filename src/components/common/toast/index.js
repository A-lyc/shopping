
import Toast from './Toast'

const obj = {}

obj.install = function(Vue) {
  // document.body.appendChild(Toast.$el)

  //1:创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  //2:根据new的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastContrustor()

  //3:将我们的组件对象手动挂载到一个元素中
  toast.$mount(document.createElement('div'))

  //4:toast.$el对应的就是上面创建的div'
  document.body.appendChild(toast.$el)


  Vue.prototype.$toast = toast
}


export default obj