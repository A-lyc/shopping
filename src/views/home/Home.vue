<template>
  <div class="home">
    <div class="tab-con"></div>
    <nav-item>
      <div slot="center">购物街</div>
    </nav-item>
 <tab-control 
      :titles="['流行', '新款', '精选']" 
      @tabClick="tabClick" 
      ref="tabControls1"
      class="tabControls"
      v-show="isTabFixed"
      ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-banner :banners="banners" class="banner-top" @swiperImages="swiperImages"></home-banner>
      <recommends :recommends="recommends" />
      <tab-control 
      :titles="['流行', '新款', '精选']" 
      @tabClick="tabClick" 
      ref="tabControls2"
      ></tab-control>
      <goods-list-item :goods="showGoods"></goods-list-item>
    </scroll>
<!-- 必须添加修饰符native -->
    <back-top @click.native="bakClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
// import NavItme from "@/components/common/nav/Nav";
import TabControl from "@/components/common/tabcontrol/TabControl";
import Scroll from "@/components/common/scroll/Scroll";
import { backTopMixin } from "@/common/mixin";

import HomeBanner from "./HomeBanner/BannerSwiper";
import Recommends from "./recommends/Recommends";

import GoodsListItem from "@/components/content/goods/GoodsListItem";

//axios
import { getHomeMultidata, getHomeGoods } from "@/network/home";

import {debounce} from "@/common/utils";

import {navItem} from '@/common/mixin'

export default {

  name: "Home",
    mixins: [backTopMixin,navItem],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isTabFixed: false,
      tabOffsetTop:0,
      saveY:0
    };
  },//end data

  components: {
    // NavItme,
    HomeBanner,
    Recommends,
    TabControl,
    GoodsListItem,
    Scroll,
  },//end components

  computed: {
    //计算属性：获取点击的是第几个，之后进行判断获取商品列表的值传入禁区，之后把这个值传到子组件，这个是goods中的键
    showGoods() {
      return this.goods[this.currentType].list;
    },

  },//end computed

  //销毁函数  添加keep-alive不会被销毁
  //   destroyed() {
  //  console.log('销毁之前')
  //  },

    //当前活跃状态
    activated() {
     this.$refs.scroll.scrollTo(0,this.saveY,0)
     this.$refs.scroll.refresh()
    //  console.log(this.$store.state.cartList)
    },

    //不是活跃状态
    deactivated() {
     this.saveY = this.$refs.scroll.getScrollY()
    },
  
  methods: {


    //在子组件中获取了点击的那个，点击那个就对应那是的商品列表
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControls1.currentIndex = index;
      this.$refs.tabControls2.currentIndex = index;

      //点击流行精选或者新款的时候返回到顶部
      this.$refs.scroll.scrollTo(0, 0, 500)
    },

    // //点击返回按钮   在混入内mixin.js
    // bakClick() {
    //   //scroll里面有个scrollTo的方法X,Y<time scrollTo组件有定义
    //   this.$refs.scroll.scrollTo(0, 0, 1000);
    // },

    //内容滚动到一定位置返回按钮显示
    contentScroll(position) {
      
      //判断top是否显示
      this.isShowBackTop = -(position.y) > 1000;

      //决定tabcontrol是否吸顶
      this.isTabFixed = -position.y>this.tabOffsetTop 
    },

    swiperImages(){
      //如何拿到tab到顶部位置的距离$el
      this.tabOffsetTop = this.$refs.tabControls2.$el.offsetTop
      
    },

    //上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
      // this.getHomeGoods(this.currentType);
      // //重新计算高度
      // this.$refs.scroll.scroll.refresh();
      
    },

    //网络请求相关的事件监听监听banner和recommends
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    //获取商品列表在showGoods这个属性直接获取有点复杂
    getHomeGoods(type) {
      //获取当前第几页
      const page = this.goods[type].page + 1;
      //异步请求
      getHomeGoods(type, page).then(res => {
        //ES6语法追加到某个数组中
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        //监听连续加载
        this.$refs.scroll.finishPullUp();
      });
    }
  },//end methods

  //挂载完之后
  mounted() {
    //防抖：
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    
    //3.监听图片加载完成
    this.$bus.$on("itemImages", () => {
      refresh();
    });

    //3.获取tabControl的offsetTop
    //所有的组件都有一个$el,用于获取组件的元素
    
  },//end mounted

  created() {
    //异步请求
    // 1.请求多个数据banner和下面的
    this.getHomeMultidata();

    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

  },//end created

};
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
}
/* .banner-top {
  padding-top: 44px;
} */

.tab-con {
  position: sticky;
  top: 44Px;
}

.content {
  height: calc(100% - 60px);
  overflow: hidden;
}
.tabControls{
  position: relative;
  z-index: 9;
}
/* .fixed{
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
} */
</style>
