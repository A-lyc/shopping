<template>
  <div id="app">
    <keep-alive exclude="Detail">
    <router-view></router-view>
    </keep-alive>
    <tab-bar/>
  </div>
</template>
<script>
import TabBar from '@/components/common/tabbar/TabBar'

export default {
  name: 'app',
  components: {
    TabBar
  }
}
</script>
<style>
@import "assets/css/bace.css";
@import "assets/css/normalize.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
ul,li{
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
