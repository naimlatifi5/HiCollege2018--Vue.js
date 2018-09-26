<template>
  <div id="app">
    <rsvpMocked></rsvpMocked>
  </div>
</template>

<script>
import rsvpMocked from './components/rsvpApp.vue'
export default {
  name: 'rsvpApp',
  components: {
    rsvpMocked
  }
}
</script>

<style lang="scss">
 @import 'assets/scss/main.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
