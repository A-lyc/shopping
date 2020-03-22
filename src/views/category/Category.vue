<template>
  <div class="wrapper" ref="aaa">
    <div class="content">
      <div>
          <p>111</p>
      <p>11asd1</p>
      <p>1as11</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>11asd1</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>

      <p>11sdsa1</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>

      <p>1asd11</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core'


export default {
  name: 'category',
  data(){
    return {
      scroll:null,
    }
  },
  methods:{
  },

  //组件创建完之后调用
  created(){
  
  },
  //挂载完之后
  mounted(){
 this.scroll = new BScroll('.wrapper',{

   })
  }


}
</script>
<style scoped>
.wrapper{
  height: 200px;
  width: 100%;
  background-color: red;
  overflow: hidden;
}
</style>