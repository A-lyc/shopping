<template>
  <div class="tab-control">
    <div  
    class="tab-control-item" 
    v-for="(item,index) in titles" 
    :key="index"
    :class="{active: index==currentIndex}"
    @click="itemCilck(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },

methods: {
  itemCilck(index){
    this.currentIndex = index;
    this.$emit('tabClick',index)
  },
},
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    line-height: 40px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>
