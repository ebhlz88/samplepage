<template>
  <div id="app">
      <navbar />
      <div1 />
    <router-view />
  </div>
</template>
<script>
import navbar from "./components/Navbar.vue";
import div1 from "./components/div1.vue";
export default {
  components: {
    navbar,
    div1,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "WorkSans-SemiBold";
  src: local("WorkSans-SemiBold"),
    url(./assets/WorkSans-SemiBold.ttf) format("truetype");
}
@font-face {
  font-family: "Inter-Regular";
  src: local("Inter-Regular"),
    url(./assets/Inter-Regular.ttf) format("truetype");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
