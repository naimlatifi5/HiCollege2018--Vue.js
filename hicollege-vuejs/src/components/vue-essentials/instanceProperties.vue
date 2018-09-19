<template>
  <div class="instanceProperties">
    <h1>data, methods, computed properties, filters</h1>
    Type something : <input type="text" v-model="msgInput"/> <button @click="submit">Submit</button>
    <p v-if="msgInput.length > 0">
      You typed: <strong>{{msgInput | capitalize}}</strong>
    </p>
    <p v-if="messages.length > 0">
      Array data: {{messages}}
    </p>
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
      }
    },
    computed: {

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
