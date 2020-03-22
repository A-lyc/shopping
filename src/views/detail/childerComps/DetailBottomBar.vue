<template>
  <div class="detail-bottom-bar">
    <div>
      <i class='icon servive'></i>
      <span>客服</span>
    </div>
    <div>
      <i class="icon shop"></i>
      <span>店铺</span>
    </div>
    <div>
      <i class="icon select"></i>
      <span>收藏</span>
    </div>
    <div class='shopping'>
      <div class="shopping-trolley" @click="addToCart">加入购物车</div>
      <div>购买</div>
    </div>

  </div>
</template>

<script>
export default {
  name:'DetailBottomBar',
  methods:{
    addToCart(){
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
.detail-bottom-bar{
  height: 50px;
  background-color: red;
  width: 100%;
  position: fixed;
  bottom:0;
  left: 0;
  right: 0;
  z-index: 11;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  line-height: 50px;
}
.shopping{
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.shopping-trolley{
  margin-right: 20px;
}
</style>