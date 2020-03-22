<template>
  <div class="TabBar">
    <tab-bar-item path="/home" activeColor="red">
    <img src="@/assets/img/home.svg" slot="icon">
    <img src="@/assets/img/home_active.svg" slot="icon-active">
    <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/profile"  activeColor="red">
    <img src="@/assets/img/profile.svg" slot="icon">
    <img src="@/assets/img/profile_active.svg" slot="icon-active">
    <div slot="text">关于</div>
    </tab-bar-item>
    <tab-bar-item path="/category"  activeColor="red">
    <img src="@/assets/img/category.svg" slot="icon">
    <img src="@/assets/img/category_active.svg" slot="icon-active">
    <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/cart"  activeColor="red">
    <img src="@/assets/img/shopcart.svg" slot="icon">
    <img src="@/assets/img/shopcart_active.svg" slot="icon-active">
    <div slot="text">我的</div>
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from './tabbaritem/TabBarItem'
export default {
  name: 'TabBar',
  props: {
    msg: String
  },
  components:{
    TabBarItem,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.TabBar{
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  border-top: 1px solid #f3f3f3;
  background-color: #fff;
  
}

</style>
