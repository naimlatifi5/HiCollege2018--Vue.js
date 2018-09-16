<template>
   <div class="increment-counter">
      <h2>{{myChildComponent}}</h2>
      Is child updated as well? <h2>{{counter}}</h2>
      <button @click="decrementCounter">Decrement</button>
   </div>
</template>

<script>
export default {
  name: 'increment',
  props: //['myChildComponent', 'counter'],
   {
     myChildComponent: { // remove myChildComponent prop in parent to test 
       type: String,
       required: true,
       default: 'prop not set'
     },
     counter: {
       type: Number,
       default: 0
     }
   },
  data () {
    return {
      msg: 'Decrement from child'
    }
  },
  methods: {
    decrementCounter() {
      this.$emit('decrement',this.msg);
    }
  }
}
</script>

<style lang="scss">
.increment-counter {
  border: 1px solid grey;
  padding: 20px;
}
</style>
