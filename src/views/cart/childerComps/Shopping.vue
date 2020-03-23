<template>
  <div class="shopping">
    <div class="cart" v-for="(item,i) in addCart" :key="i">
      <div class="cart-img">
        <img :src="item.images" alt @load="itemLoad" />
      </div>
      <div class="cart-tetle">
        <p>名称：{{item.title}}</p>
        <p>介绍：{{item.desc}}</p>
        价格：{{item.price}}
        <br />
        iid：{{item.iid}}
        <br />
        件数：{{item.count}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shopping",
  props: {
    addCart: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemLoad() {
      this.$emit("itemImagess");
    }
  }
};
</script>

<style scoped>
.cart {
  display: flex;
  font-size: 12px;
  align-items: center;
}
.cart-img {
  width: 500px;
  height: 100px;
  overflow: hidden;
}
.cart-img img {
  width: 100%;
  height: auto;
}
.cart-tetle {
  text-align: left;
}
.cart-tetle p {
  width: 100%;
  height: 14px;
  overflow: hidden;
  margin-bottom: 5px;
}
</style>