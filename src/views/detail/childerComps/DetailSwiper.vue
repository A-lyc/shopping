<template>
  <swiper class="top-images">
  <swiper-item v-for='(item,i) in topImages' :key="i">
    <img :src="item" alt="">
  </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper'
export default {
  name:'DetailSwiper',
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },//end popst
}

</script>

<style scoped>
.top-images{
    width: 100%;
    height: 300px;

}
.top-images img{
    width: 100%;
  }
</style>

