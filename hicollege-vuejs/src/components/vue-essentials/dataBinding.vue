<template>
  <div class="dataBinding">
    <h1>Hello Two way data binding</h1>
    <p v-if="question.length">
      Show the question: {{question}}
    </p>
    <input class="form-control form-control-lg" type="text" v-model="question" placeholder="What is your question">
  </div>
</template>

<script>
export default {
  name: 'dataBinding',
  data () {
    return {
      question: ''
    }
  }
}
</script>

<style lang="css">
</style>
