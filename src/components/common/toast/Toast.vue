<!--  -->
<template>
<div class='toast' v-show="show">
  <div>{{message}}</div>
</div>
</template>

<script>

export default {
name:'Toast',
//import引入的组件需要注入到对象中才能使用
components: {},
data(){
  return {
    message:'',
    show:false
  }
},
methods:{
  isShow(message = '默认文字',duration = 2000){
    this.show = true;
    this.message = message

    setTimeout(()=>{
    this.show = false;
    this.message = ''
    },duration)
  }
}
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.toast {
  position:fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  padding: 8px 10px;
  border-radius: 5px;

  font-size: 20px;
  background-color: rgba(0,0,0,.75);
  color: #fff;
  z-index: 999;
}
</style>