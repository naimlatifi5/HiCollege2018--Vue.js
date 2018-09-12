<template>
  <div id="app">
      <navigation></navigation>
     <router-view/>
  </div>
</template>

<script>
import navigation from '@/components/navigation'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    navigation
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
}

</style>
