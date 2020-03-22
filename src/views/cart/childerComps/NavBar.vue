<template>
  <div>
    <nav-item bg-color="red">
      <div slot="center">
        购物车
        <span>({{cartLength}})</span>
      </div>
    </nav-item>
  </div>
</template>

<script>
// import NavItme from "@/components/common/nav/Nav";

import { navItem } from "@/common/mixin";
import {mapGetters} from 'vuex'

export default {
  name: "NavBar",
  mixins: [navItem],
  data() {
    return {
      amount: 0
    };
  },
  components: {},
  methods: {

  },
  computed: {
...mapGetters([
  'cartLength'
])
// cartLength(){
    //   return this.$store.getters.cartLength
    // }
  }
};
</script>

<style>
</style>