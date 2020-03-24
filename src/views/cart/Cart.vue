<template>
  <div class="cart-box">
    <nav-bar-item></nav-bar-item>
  <scroll class="cart-height" ref='scroll' :probe-type="3" >
    <shopping :add-cart="addCart" @itemImagess="itemImagess"></shopping>
</scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import { timeListenerMiXin } from "@/common/mixin";

import Shopping from './childerComps/Shopping'
import NavBarItem from './childerComps/NavBar'
export default {
  name: "cart",
  mixins: [timeListenerMiXin],
  components: {
    Shopping,
    NavBarItem,
    Scroll
  },
  data() {
    return {
      addCart: []
    };
  },
  activated() {
    this.addCart = this.$store.state.cartList;
  },
  methods:{
      itemImagess() {
      //懒加载图片
      this.newRefresh();
      
    },
    // contentScroll(position){
    //   console.log(position)
    // }
  }
};
</script>

<style scoped>
.cart-height{
  width: 100%;
  height:calc(100vh - 100px);
  z-index: 9;
}
</style>