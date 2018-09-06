<template>
  <div id="app">
    <div class="container">
      <!-- v-html directive for appending html data-->
        <header-section v-html="mainPageHeader"></header-section>

        <progressBar></progressBar>
        <courseIntro :content=contentIntroCourse></courseIntro>
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
      mainPageHeader: '<h1>RSVP- APP <span class="badge badge-secondary badge-secondary--color">HiCollege HIQ</span></h1>',
      contentIntroCourse: 'Vue is becoming extremely popular JavaScript framework nowadays which lets you build dynamic and interactive web apps in a simple way. The secret of Vue.js framework is its simplicity, however to help you get started with the framework I built this course to get you familiar with the core concepts of the framework.'

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
