<template>
   <div class="goods-item">
      <div class="wrapper">
     <goods-list v-for="(item,i) in goods" :key="i" :goods-item="item"></goods-list>
      </div>
    </div>
</template>


<script>
import GoodsList from './GoodsList'

export default {
  name: 'GoodsListItem',
  components:{
    GoodsList,
  },
  props:{
    //传入的是一个数组，每个数组里面是一个对象
    goods:{
      type:Array,
       default() {
        return []
    },
    }
  }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper{
width: 100%;
display: flex;
flex-wrap: wrap;
}
</style>
