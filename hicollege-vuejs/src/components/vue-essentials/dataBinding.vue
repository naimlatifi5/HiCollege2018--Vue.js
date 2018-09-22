<template>
  <div class="dataBinding">
    <h1>Hello Two way data binding</h1>
    <!-- One way data binding, message is updated from data to DOM -->
    <p>{{message}}</p>

    <p v-if="question.length">
      Show the question: {{question}}
    </p>
    <!--Two way databinding as question property is updated from the DOM and inside input with v-model -->
    <input class="form-control form-control-lg" type="text" v-model="question" placeholder="What is your question">
  </div>
</template>

<script>
export default {
  name: 'dataBinding',
  data () {
    return {
      question: '',
      message: 'Welcome to two way data binding'
    }
  }
}
</script>

<style lang="css">
</style>
