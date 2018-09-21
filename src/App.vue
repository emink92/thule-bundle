<template>
  <div id="app">
    <topbar></topbar>
  </div>
</template>

<script>
import Topbar from './components/topbar.vue'

export default {
  name: 'app',
  components: {
    Topbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
