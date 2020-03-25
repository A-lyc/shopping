<template>
  <div class="cait-button-bar">
    <div class="cait-button">
     <check-button 
     :is-checked='isSelectAll' 
     @click.native="checkClick"></check-button> 
     <span>全选</span>
    </div>
    <div>
      合计：{{totalPrice}}
    </div>
    <div class="calculate">
      去计算({{calculateLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'
import {mapGetters} from 'vuex'
export default {
name:'CaitButtonBar',
components:{
  CheckButton
},
computed: {
  ...mapGetters([
    'cartList'
  ]),
  totalPrice(){
   return "￥" + this.$store.state.cartList.filter(item =>{
     return item.checked
   }).reduce((preValue,item) => {
     return preValue + item.price * item.count
   },0)
  },
  calculateLength(){
     return this.$store.state.cartList.filter(item => item.checked).length
  },
  isSelectAll(){
    if(this.$store.state.cartList.length === 0 ){return false}
    return !(this.$store.state.cartList.filter(item => !item.checked).length)//过滤数据返回过滤后的数组
  },
},
methods:{
  checkClick(){
    if(this.isSelectAll){//全部选中
      this.cartList.forEach(item => item.checked = false)//给数组内的一个值赋值
      }else{//部分会或者全部不选中
        this.cartList.forEach(item => item.checked = true)
      }
    // this.cartList.forEach(item => item.checked = !this.isSelectAll)
  }
}


}
</script>

<style scoped>
.cait-button-bar{
  height: 60px;
  width: 100%;
  background-color: #dddddd;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 15px;
    justify-content: space-between;
}
.cait-button{
  width: 100px;
  display: flex;
  align-items: center;

}
.cait-button span{
  margin-left: 10px;
}
.calculate{
width: 100px;
}
</style>