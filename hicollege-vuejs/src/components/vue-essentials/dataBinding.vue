<template>
  <div class="dataBinding">
    <h1>Hello Two way data binding</h1>
    <p>
      Show the question: {{question}}
    </p>
    <input class="form-control form-control-lg" type="text" v-model="question">
  </div>
</template>

<script>
export default {
  name: 'dataBinding',
  data () {
    return {
      question: 'What is your question ? '
    }
  }
}
</script>

<style lang="css">
</style>
