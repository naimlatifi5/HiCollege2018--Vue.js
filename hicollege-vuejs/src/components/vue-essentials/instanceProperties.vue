<template>
  <div class="instanceProperties">
    <h4>data, methods, computed properties, filters</h4>
    Type something : <input type="text" v-model="msgInput"/> <button @click="submit">Submit</button>
    <p v-if="msgInput.length > 0">
      You typed: <strong>{{msgInput | capitalize}}</strong>
    </p>
    <p v-if="messages.length > 0">
      Array data: {{messages}}
    </p>
    <hr />

    <h4>Computed properties</h4>
    <p>Method - Random number between 0 and 1 : {{getRandomNumber()}}</p>
    <p>
      Computed - Random number between 0 and 1 but in computed: {{getRandomComputed}}
    </p>
    <hr />
    <h4>Watchers</h4>
  </div>
</template>

<script>
export default {
  name: 'instanceProperties',
  data () {
    return {
      msgInput: '',
      messages: []
     }
   },
    methods: {
      submit() {
        // submit data to message array
        // call the capitalize function here
        var capitalizeWord = this.$options.filters.capitalize(this.msgInput);
        this.messages.push(capitalizeWord);
      },
      getRandomNumber() {
       return Math.random();
      }
    },
    computed: {
      // used when caching data
      getRandomComputed() {
        return Math.random();
      }
    },
    watch: {

    },
    filters: {
      capitalize (str) {
        return str.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
          return letter.toUpperCase();
        });
      }
    }

}
</script>

<style lang="scss">
</style>
