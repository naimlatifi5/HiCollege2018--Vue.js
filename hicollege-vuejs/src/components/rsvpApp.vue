<template>
  <div class="container">
    <!-- v-html directive for appending html data-->
      <header-section v-html="mainPageHeader"></header-section>
      <courseIntro :content=contentIntroCourse></courseIntro>
      <registerForm :numberOfAttandence="maxNumberAttendance"></registerForm>
  </div>
</template>

<script>
import headerSection from '@/components/rsvpForm/header.vue'
import courseIntro from '@/components/rsvpForm/courseIntro.vue'
import registerForm from '@/components/rsvpForm/registerForm.vue'

export default {
  name: 'rsvpApp',
  data () {
    return {
      mainPageHeader: '<h1>RSVP- APP <span class="badge badge-secondary badge-secondary--color">HiCollege HIQ</span></h1>',
      contentIntroCourse: 'Vue is becoming extremely popular JavaScript framework nowadays which lets you build dynamic and interactive web apps in a simple way. The secret of Vue.js framework is its simplicity, however to help you get started with the framework I built this course to get you familiar with the core concepts of the framework.',
      maxNumberAttendance: 35
    }
  },
  components: {
    'header-section': headerSection,
    courseIntro,
    registerForm
  }
}
</script>

<style lang="scss">
</style>
