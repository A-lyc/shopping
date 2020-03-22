<template>
  <div class="detail">
    <detail-nav-bar ref="nav" class="detail-nav" @titleCilck="titleCilck"></detail-nav-bar>
    <scroll class="detail-height" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <top-images :top-images="topimages"></top-images>
      <detail-base-info :goods="Goods" ref="goods"></detail-base-info>
      <detail-shop-info ref="recoomend" :shop-info="ShopInfo"></detail-shop-info>
      <item-paramss ref="params" :item-params="itemParams"></item-paramss>
      <detail-info-list ref="comment" :detail-image="DetailActive" @itemImagess="itemImagess"></detail-info-list>
    </scroll>
    <back-top @click.native="bakClick" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";

import { timeListenerMiXin, backTopMixin } from "@/common/mixin";
import { debounce } from "@/common/utils";

import DetailNavBar from "./childerComps/DetailNavBar";
import TopImages from "./childerComps/DetailSwiper";
import DetailBaseInfo from "./childerComps/DetailBaseInfo";
import DetailShopInfo from "./childerComps/DetailShopInfo";
import DetailInfoList from "./childerComps/DetailInfo";
import ItemParamss from "./childerComps/ItemParams";
import DetailBottomBar from "./childerComps/DetailBottomBar";

import { getDetail, Goods, DetailActive, DetailInfo } from "@/network/detail";

export default {
  name: "Detail",
  mixins: [timeListenerMiXin, backTopMixin],
  data() {
    return {
      iid: null,
      topimages: [],
      Goods: {},
      ShopInfo: {},
      DetailActive: {},
      itemParams: {},
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0
    };
  },
  components: {
    DetailNavBar,
    TopImages,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailInfoList,
    ItemParamss,
    DetailBottomBar
  },
  created() {
    //获取iid保存传入
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then(res => {
      const data = res.result;
      //发送接收请求iid的数据
      this.topimages.push(...data.itemInfo.topImages);

      //f数据接收banner下面的数据，封装成一个class了
      this.Goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //数据接收商家数据
      this.ShopInfo = data.shopInfo;

      //接收详情
      this.DetailActive = new DetailActive(data.detailInfo);

      //请求参数
      this.itemParams = new DetailInfo(
        data.itemParams.info,
        data.itemParams.rule
      );
    });

    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [0];
      this.themeTopYs.push(this.$refs.recoomend.$el.offsetTop);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
    }, 200);
  },
  mounted() {},
  //实时更新
  updated() {},
  methods: {
    itemImagess() {
      //console.log('123')
      //懒加载图片
      //this.$refs.scroll.refresh()
      //懒加载图片
      this.newRefresh();

      //做了防抖动
      this.getThemeTopY();
    },
    titleCilck(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500);
    },
    contentScroll(position) {
      //获取Y值
      const positionY = -position.y;

      //进行对比
      const length = this.themeTopYs.length;
      for (let i = 0; i < length - 1; i++) {
        parseInt(i);
        if (
          i < length - 1 &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;

          this.isShowBackTop = -position.y > 1000;
        }
      }
    },
    addToCart(){
      //加入购物车获取需要展示的信息
      const product = {};
      product.images = this.topimages[0]
      product.title = this.Goods.title
      product.desc = this.Goods.desc
      product.price = this.Goods.lowPrice
      product.iid = this.iid
      console.log(product)
      
      //将商品添加到购物车
      // this.$store.state.cartList.push(product)
      this.$store.dispatch('addCart',product)
      
    }
  }
};
</script>

<style scoped>
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail {
  height: 100vh;
  background-color: #fff;
  z-index: 9;
}
.detail-height {
  height: calc(100% - 89px);
  position: relative;
  overflow: hidden;
  z-index: 8;
  background-color: #fff;
}
</style>