<template>
  <div class="components">
    <h1>Hello components</h1>
    <parent-component></parent-component>
  </div>
</template>

<script>
// importing the components
import parentComponent from './components/parentComponent.vue'

export default {
  name: 'components',
  // component registration
  components: {
    'parent-component': parentComponent
  }
}
</script>

<style lang="scss">
</style>
