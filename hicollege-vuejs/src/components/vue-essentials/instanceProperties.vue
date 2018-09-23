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
     <p>Count as method : {{ countMethod() }}</p>
    <p>
      <!-- computed properties are only referenced and not need to be called as in method above -->
      Computed - Random number between 0 and 1 but in computed: {{getRandomComputed}}
    </p>
    <p>Count me : {{count}}</p>
    <hr />
    <h4>Watchers</h4>
    <p v-html="findWord"></p>
  </div>
</template>

<script>
export default {
  name: 'instanceProperties',
  data () {
    return {
      msgInput: '',
      messages: [],
      items: [1,2,3],
      findWord: ''
     }
   },
    methods: {
      submit() {
        // submit data to message array
        // call the capitalize function here
        var capitalizeWord = this.$options.filters.capitalize(this.msgInput);
        this.messages.push(capitalizeWord);
        this.items.push(4);
      },
      getRandomNumber() {
       return Math.random();
     },
     countMethod() {
       return "the count is " + (this.items.length * 10) + ' and data now ' + Date.now();
     }
    },
    computed: {
      // used when caching data
      getRandomComputed() {
        return Math.random();
      },
      // regular javascript method are not reactive is is better to test with Date.now()
      count () {
        return "the count is " + (this.items.length * 10) + ' and date now ' + Date.now();
      }
    },
    watch: {
      // property to watch must be the same name as in data
      msgInput: function (newPropertyValue, oldPropertyValue) {
        console.log("Newe propertye value", newPropertyValue);
        console.log("Old property value ", oldPropertyValue);
        if(newPropertyValue === 'hiq' && newPropertyValue.length) {
          this.findWord =  `The word you are looking for is found <strong>${newPropertyValue}</strong>`;
        }
      }
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
