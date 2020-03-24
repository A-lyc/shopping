<template>
  <div class="cart">
    <div class="cart-img">
        <img :src="product.images" alt  />
      </div>
      <div class="cart-tetle">
        <p>名称：{{product.title}}</p>
        <p>介绍：{{product.desc}}</p>
        价格：{{product.price}}
        <br />
        iid：{{product.iid}}
        <br />
        件数：{{product.count}}
        <div class="cart-box" @click="showClick">
          <check-button class="cart-button-ok" :is-checked="product.checked"></check-button>
        </div>
      </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'

export default {
  name:'CarListItem',
  data(){
    return {
     switchover:false
    }
  },
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components:{
    CheckButton,
  },
  methods:{
    showClick(){
      this.product.checked = !this.product.checked
    }
  }
}
</script>

<style scoped>
.cart {
  display: flex;
  font-size: 12px;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}
.cart-img {
  width: 150px;
  height: 100px;
  overflow: hidden;
}
.cart-img img {
  width: 100%;
}
.cart-tetle {
  text-align: left;
  margin-left: 20px;
  width: calc(100% - 150px);
}
.cart-tetle p {
  width: 100%;
  height: 14px;
  overflow: hidden;
  margin-bottom: 5px;
}

</style>