<template>
      <nav-item class="nav">
      <div slot="left" class="icon" @click="bakClick">
        <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" 
        :key="index" 
        :class="{active:index == currentIndex}"
        @click="itemCilck(index)"
        >{{item}}</div>
      </div>
    </nav-item>
</template>

<script>
import NavItem from "@/components/common/nav/Nav";

import {navItem} from '@/common/mixin'

export default {
name:'DetailNavBar',
mixins: [navItem],
  components:{
    NavItem
  },
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      // currentIndex:0
    }
  },
// methods: {
// itemCilck(index){
//   console.log(index)
//   this.currentIndex = index;
//   this.$emit('titleCilck',index)
// },
// bakClick(){
//   this.$router.go(-1)
// },

// },
// created(){

// }

}
</script>

<style scoped>

.title{
  display: flex;
  font-size: 13px;
  justify-content: space-around;
}
.active{
  color: var(--color-high-text);
}
.icon{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>