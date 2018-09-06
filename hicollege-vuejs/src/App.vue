<template>
  <div id="app">
    <div class="container">
        <header-section></header-section>
        <progressBar></progressBar>
        <courseIntro></courseIntro>
        <registerForm></registerForm>
        <displayTableData></displayTableData>
    </div>
  </div>
</template>

<script>
import headerSection from '@/components/header.vue'
import progressBar from '@/components/progressBar.vue'
import courseIntro from '@/components/courseIntro.vue'
import registerForm from '@/components/registerForm.vue'
import displayTableData from '@/components/displayTableData.vue'

export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    'header-section': headerSection,
    progressBar,
    courseIntro,
    registerForm,
    displayTableData
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
