<template>
  <div>
    <p>-------------------------------------------------------------</p>
    <!-- <div>--{{ItemParams.info.key}}</div> -->
    <!-- <div v-for='(item,index) in ItemParams.info.set' :key="index">123{{item.key}}123--{{item.value}}</div> -->
    
    <p>-------------------------------------------------------------</p>
    <!-- <div>{{ItemParams.rule.disclaimer}}--{{ItemParams.rule.key}}</div> -->
    <!-- <div v-for='(item,i) in ItemParams.rule.tables[0]' :key="i+'a'">{{item[1]}}--{{item[2]}}--{{item[3]}}</div> -->
  </div>
</template>

<script>
export default {
name:'ItemParams',
props:{
  ItemParams:{
    type:Object,
    default(){
      return {}
    }
  }
},
activated(){
}
}
</script>


<style scoped>

</style>