<template>
  <swiper >
    <swiper-item v-for="(item,i) in banners" :key="i">
      <a :href="item.link">
        <img :src="item.image" @load="itemImages">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper'
export default {
  name: 'banner',
    props:{
    banners:{
      type:Array,
      default() {
        return []
    }
    }
  },
  data(){
    return {
      isLoad:false,
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
methods:{
  itemImages(){
    if(!this.isLoad){
       this.$emit('swiperImages')
       this.isLoad = true
    }
   
  }
}

}
</script>
<style scoped>

</style> 