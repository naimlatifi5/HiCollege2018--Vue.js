<template>
  <div id="app">
    <div class="container">
      <!-- v-html directive for appending html data-->
        <header-section v-html="mainPageHeader"></header-section>
        <courseIntro :content=contentIntroCourse></courseIntro>
        <registerForm :numberOfAttandence="maxNumberAttendance"></registerForm>
    </div>
  </div>
</template>

<script>
import headerSection from '@/components/header.vue'
import courseIntro from '@/components/courseIntro.vue'
import registerForm from '@/components/registerForm.vue'

export default {
  name: 'App',
  data () {
    return {
      mainPageHeader: '<h1>RSVP- APP <span class="badge badge-secondary badge-secondary--color">HiCollege HIQ</span></h1>',
      contentIntroCourse: 'Vue is becoming extremely popular JavaScript framework nowadays which lets you build dynamic and interactive web apps in a simple way. The secret of Vue.js framework is its simplicity, however to help you get started with the framework I built this course to get you familiar with the core concepts of the framework.',
      maxNumberAttendance: 2
    }
  },
  computed: {

  },
  methods: {

  },
  components: {
    'header-section': headerSection,
    courseIntro,
    registerForm
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
