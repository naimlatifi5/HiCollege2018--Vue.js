<template>
  <div class="components">
    <h1>Hello components</h1>
    <first-section></first-section>
    <hr />
    <second-section></second-section>
    <hr />
    <first-section></first-section>
    <hr />
    <first-section></first-section>
  </div>
</template>

<script>
// importing the components
import firstSection from './components/firstSection.vue';
import secondSection from './components/secondSection.vue';

export default {
  name: 'components',
  data () {
    return {

    }
  },
  // component registration
  components: {
    'first-section' : firstSection,
    'second-section': secondSection
  }
}
</script>

<style lang="scss">
</style>
