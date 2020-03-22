import {ADD_COUNTER,ADD_TO_CART} from './mutations-type'


export default {
  addCart(context,payLoad){
    //payLoad新加的商品
    let oldProduct = null
    for(let item of context.state.cartList){
      if(item.iid===payLoad.iid){
        oldProduct = item;
      }
    }
    if(oldProduct){

      //这里的ADD_COUNTER没有[]
      context.commit(ADD_COUNTER,oldProduct)
    }else{
      payLoad.count = 1
      // context.state.cartList.push(payLoad)
      context.commit(ADD_TO_CART,payLoad)
    }
  }
}