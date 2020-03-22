<template>
    <div class="back-top">
        <img src="@/assets/img/common/top.png" alt="">
    </div>
</template>

<script>
export default {
  name: 'BackTop',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back-top{
  position: absolute;
  bottom: 60px;
  right: 20px;
  width: 50px;
  height: 50px;
  z-index: 99999;
}
.back-top img{
  width: 100%;
}
</style>
