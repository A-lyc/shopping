<template>
  <div>

    <div>--{{ItemParams.info.key}}</div>
    <div v-for='(item,i) in ItemParams.info.set' :key="i+item.key">{{item.value}}--{{item.key}}</div>
    
    <p>-------------------------------------------------------------</p>
    <div>{{ItemParams.rule.disclaimer}}--{{ItemParams.rule.key}}</div>
    <div v-for='(item,i) in ItemParams.rule.tables[0]' :key="i">{{item[1]}}--{{item[2]}}--{{item[3]}}</div>
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
}
}
</script>


<style scoped>

</style>