<template>
  <div class="cait-button-bar">
    <div class="cait-button">
     <check-button></check-button> 
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
export default {
name:'CaitButtonBar',
components:{
  CheckButton
},
computed: {
  totalPrice(){
   return "￥" + this.$store.state.cartList.filter(item =>{
     return item.checked
   }).reduce((preValue,item) => {
     return preValue + item.price * item.count
   },0)
  },
  calculateLength(){
     return this.$store.state.cartList.filter(item => item.checked).length
  }

},
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