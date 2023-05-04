<template>
  <nav_bar v-if="!$route.meta.hideNavbar" />
  <router-view></router-view>
</template>

<script>
import nav_bar from "./components/navbar.vue";
export default {
  name: "app",
  components: { nav_bar },
};
</script>

<style>
#app {
  font-family: "Courier New", Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: #e5e5f7;
  opacity: 1;
  background-image: radial-gradient(#f4d65f 0.5px, #e5e5f7 10px);
  background-size: 10px 10px;
}
</style>
