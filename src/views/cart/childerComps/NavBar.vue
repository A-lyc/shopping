<template>
<div>
  <nav-item bg-color="red">
    <div slot="center">
      购物车<span>1</span>
    </div>
  </nav-item>
</div>
</template>

<script>
// import NavItme from "@/components/common/nav/Nav";

import {navItem} from '@/common/mixin'
export default {
name:'NavBar',
mixins:[navItem],
data(){
  return {

  }
},
components:{

},
methods: {
  
},
method(){

}
}
</script>

<style>

</style>