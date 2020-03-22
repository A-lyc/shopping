<template>
   
      <div class="pro-img-title" @click="itemCilck">
        <img :src="goodsItem.show.img" alt="" @load="imgLoad"/>
        <p>{{goodsItem.title}}</p>
      </div>

</template>

<script>

export default {
  name: 'GoodsList',

  props:{
    //传入的时数组中的对象，接受使用对象吗
    goodsItem:{
      type:Object,
      default() {
        return {}
    },
    }
  },
  methods:{
    imgLoad(){
      this.$bus.$emit('itemImages')
    },
    itemCilck(){
      //在路由上设置id，之后根据列表内容的iid传入进去
      this.$router.push('/detail/'+this.goodsItem.iid)
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .pro-img-title{
width: 50%;
padding: 15px;
font-size: 12px;
line-height: 20px;
  }
  .pro-img-title img{
    width: 100%;
    height: 100%;
  }
  .pro-img-title p{
    height: 20px;
    overflow: hidden;
  }
</style>
