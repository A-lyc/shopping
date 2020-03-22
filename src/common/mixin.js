import { debounce } from './utils';

import BackTop from "@/components/common/backtop/BackTop";
import NavItem from "@/components/common/nav/Nav";

//防抖scroll的刷新混入--网慢的时候不能滚动问题解决方法
export const timeListenerMiXin = {
  data() {
    return {
      itemImgListener: null, 
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      this.newRefresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener);
  },
}

//返回顶部
export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    //点击返回按钮
    bakClick() {
      //scroll里面有个scrollTo的方法X,Y<time scrollTo组件有定义
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
  }
}

//顶部导航
export const navItem = {
  data() {
    return {
      currentIndex:0
    }
  },
  components: {
    NavItem
  },
  methods: {
    itemCilck(index){
      console.log(index)
      this.currentIndex = index;
      this.$emit('titleCilck',index)
    },
    bakClick(){
      this.$router.go(-1)
    },
    
    },
    created(){
    
    }
}