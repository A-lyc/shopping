<template>
  <div class="tab-bar-item" @click="itemCilck" :style="activeStyle">
    <div class="tab-bar-item-img" v-if="!isActive"><slot name="icon"></slot></div>
    <div class="tab-bar-item-img" v-else><slot name="icon-active"></slot></div>
    <div><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor:{
      type:String,
    }
  },
  computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
      },
  methods: {
   itemCilck(){
      this.$router.push(this.path)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-bar-item{
  margin: 5px 0;
}
.tab-bar-item-img{
  width: 30px;
  height: 30px;
}
.tab-bar-item-img img{
  width: 100%;
}
</style>
