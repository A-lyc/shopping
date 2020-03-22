<template>
  <div class="detail-basel-info" v-if='(Object.keys(Goods).length !== 0)'>
    <div class="detail-title">{{Goods.title}}</div>
    <div class="detail-qian">
      <span>{{Goods.newPrice}}</span>
      <span class="detail-old">{{Goods.oldPrice}}</span>
      <div :style="activeStyle">---{{Goods.discount}}</div>
    </div>
<ul class="detail-youhui" >
  <li v-for='(item,i) in Goods.columns' :key="i">
    {{item}}
    </li>
</ul>
<ul class="detail-tuihui">
  <li  v-for='(item,i) in Goods.services' :key="i">
    <img :src="item.icon" alt="">
    <p>{{item.name}}</p>
  </li>
</ul>
  </div>
</template>

<script>
export default {
name:'DetailBaselInfo',
props:{
  Goods:{
    type:Object,
    default(){
      return {}
    }
  }
},
 computed: {
      activeStyle() {
        return {color:this.Goods.discountBgColor}
      }
      },
}
</script>

<style scoped>
.detail-basel-info{
  padding: 0 15px;
}
.detail-title{
  width: 100%;
  margin-top: 10px;
  line-height: 1.3;
  font-size: 18px;
  text-align: left;
}
.detail-qian{
  display: flex;
  margin-top: 5px;
  align-items: flex-end;
}
.detail-old{
  font-size: 12px;
  color: rgba(0,0,0,.2);
}
.detail-youhui{
  display: flex;
  margin-top: 20px;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0,0,0,.2);
}
.detail-tuihui{
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.detail-tuihui img{
  width: 20px;
  height: 20px;
  border: 0;
}
</style>