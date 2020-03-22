<template>
    <div class="nav-item" :style='styleBgColor'>
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    bgColor: {
      type:String,
      default:'#fff'
    }
  },
  computed:{
    styleBgColor(){
      return { backgroundColor: this.bgColor}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-item{
  width: 100%;
  height: 40px;
  text-align: center;
  font-size: 16px;
  display: flex;
  line-height: 40px;
  top: 0;
  z-index: 9;
}
.left,.right{
  width: 60px;
}
.center{
  flex: 1;

}
</style>
