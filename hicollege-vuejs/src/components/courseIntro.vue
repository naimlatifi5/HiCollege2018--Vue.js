<template>
  <div class="row section">
      <headerSection>
        <template slot="headerWithSection">
          <h2>Vue.js HiCollege course</h2>
        </template>
      </headerSection>
      <div class="section__content">
        <p v-text="content">
          <!-- Content is passed as props, v-text is appened -->
        </p>
      </div>
  </div>
</template>

<script>
import headerSection from './header.vue'

export default {
  name: 'courseIntro',
  props: {
    content: String
  },
  components: {
    headerSection
  }
}
</script>

<style lang="scss" scoped>

</style>
