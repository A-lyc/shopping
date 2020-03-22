<template>
<div class="detailInfo">
  <p>-----------------------------------</p>
  <div v-if='detailImage.key != null'>{{detailImage.detailiInfo.key}}</div>
  <div v-for='(item,i) in detailImage.detailInfo' :key="i">
    <img :src="item" alt="" @load="loadImages">
  </div>
  </div>
</template>

<script>
export default {
  name:'DetailInfo',
  props:{
    detailImage:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    loadImages(){
      this.$emit('itemImagess')
    }
  }
}
</script>

<style scoped>
.detailInfo{
  width: 100%;
}
.detailInfo img{
  width: 100%;
}
</style>