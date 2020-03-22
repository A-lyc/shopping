<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
//插件滚动插件
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);

export default {
  name: "Scroll-plug-in",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  datd() {
    return {
      scroll: null
    };
  },
  mounted() {
    //创建Bscroll
    this.scroll = new BScroll(this.$refs.scroll, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad
    });

    //监听混动
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });

    //监听滚动到底部
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
    this.scroll.refresh();
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
