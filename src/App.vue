<template>
  <div id="app">
    <div class="logo">
      <router-link to="/"><img src="./assets/logo.svg"></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
  }

  .logo {
    width: 30%;
    min-width: 300px;
    margin: 0 auto;
  }
</style>
