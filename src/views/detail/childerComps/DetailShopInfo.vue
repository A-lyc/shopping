<template>
  <div class="shopInfo">
    <div>
      <img :src='ShopInfo.shopLogo' alt />
      <p>{{ShopInfo.name}}</p>
    </div>
    <div>
      <div>
        <span>{{ShopInfo.cFans}}</span>
        <span>总销量</span>
      </div>
      <div>
        <span>{{ShopInfo.cGoods}}</span>
        <span>总销量</span>
      </div>
    </div>
    <ul>
      <li v-for='(item,i) in ShopInfo.score' :key="i">
        <span>{{item.name}}</span>
        <span>{{item.score}}</span>
      </li>
    </ul>
    <div>进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    ShopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>


</style>