import {ADD_COUNTER,ADD_TO_CART} from './mutations-type'


export default {
  addCart(context, payLoad) {//payLoad系统定义新加入的
    //如果在vuex中操做了一些事情的话，需要使用到Promise,来传出去
    return new Promise((resolve, reject) => {
      //payLoad新加的商品//for进行和之前商品对比有没有加入新的商品
      let oldProduct = null
      for (let item of context.state.cartList) {
        if (item.iid === payLoad.iid) {
          oldProduct = item;
        }
      }

      //加入新的商品为true
      if (oldProduct) {
        //这里的ADD_COUNTER没有[]
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前数量+1')
        console.log(payLoad)
      } else {//未加入新的商品为false
        payLoad.count = 1
        // context.state.cartList.push(payLoad)
        context.commit(ADD_TO_CART, payLoad)
        resolve('添加新商品')
        console.log(reject)
      }
})
  }
}