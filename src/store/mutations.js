import {ADD_COUNTER,ADD_TO_CART} from './mutations-type'

export default {

  //这个位置需要有[]
  [ADD_COUNTER](state,payLoad){
    payLoad.count++
  },
  [ADD_TO_CART](state,payLoad){
    payLoad.checked = true
    state.cartList.push(payLoad)
  }
}