<template>
  <div class="cart-box">

    <nav-bar-item class="nav-bar-item"></nav-bar-item>
    <!-- 商品列表 -->
    <scroll class="cart-height" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <car-list-item v-for="(item,i) in cartList" :key="i" :product="item"></car-list-item>
      <!-- <shopping :add-cart="addCart" @itemImagess="itemImagess"></shopping> -->
    </scroll>

    <!-- 底部汇总 -->
    <cait-button-bar></cait-button-bar>

  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import { timeListenerMiXin } from "@/common/mixin";

// import Shopping from "./childerComps/Shopping";
import CarListItem from './childerComps/CarListItem'
import NavBarItem from "./childerComps/NavBar";
import CaitButtonBar from "./childerComps/CaitButtonBar";

import {mapGetters} from 'vuex'
export default {
  name: "cart",
  mixins: [timeListenerMiXin],
  components: {
    // Shopping,
    NavBarItem,
    Scroll,
    CarListItem,
    CaitButtonBar
  },
  data() {
    return {
      addCart: []
    };
  },
  activated() {
    // this.addCart = this.$store.state.cartList;
    console.log('-----')
    //由于会首先进入scroll会直接读取高度所以处于活跃状态的时候执行一下refresh()
    this.$refs.scroll.refresh()
  },
  computed:{
    ...mapGetters([
      'cartList'
    ])
  },
  methods: {
    itemImagess() {
      //懒加载图片
      this.newRefresh();
    },
    contentScroll(position) {
      console.log(position);
    }
  },

};
</script>

<style scoped>
.nav-bar-item {
  z-index: 10;
}
.cart-height {
  width: 100%;
  height: calc(100vh - 105px - 50px);
  z-index: 9;
  overflow: hidden;
}
</style>