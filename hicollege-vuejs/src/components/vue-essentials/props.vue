<template>
  <div class="props">
    <h1>Hello props</h1>
    <p>
      A two ways passing data between components
    </p>
    <hr />
      <h1>Parent component</h1>
      <div>
        {{message}}
      </div>
      <div>
        Counting:
      </div>
       <h2>{{counter}}</h2>

      <button @click="increment()">Increment</button>
      <br />
      <br />
     <increment-counter myChildComponent="Hello child component" :counter="counter" @decrement="decrement"></increment-counter>
  </div>
</template>

<script>
import incrementCounter from './components/incrementCounter.vue'
export default {
  name: 'Props',
  data () {
    return {
      counter: 0,
      message: ''
    }
  },
  components: {
    'increment-counter': incrementCounter
  },
  methods: {
    increment () {
      this.counter++
    },
    decrement (msg) {
      this.counter--
      this.message = msg
    }
  }
}
</script>

<style lang="scss">
</style>
