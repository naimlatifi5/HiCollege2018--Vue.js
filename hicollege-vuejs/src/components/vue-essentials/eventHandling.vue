<template>
  <div class="eventHandling">
    <h1>Hello event handling</h1>

    <button class="helloButton" @click="countClicks">Button clicked <template v-if="counter > 0">{{counter}}</template></button><br /><br />
    Capture event handling with key modifiers:
    <input type="text" placeholder="capture events" @keyup.enter="keyPressed('enter')" @keyup.tab="keyPressed('tab')" @keyup.esc="keyPressed('esc')" @keyup.left="keyPressed('left')" @keyup.up="keyPressed('up')" @keyup.down="keyPressed('down')" @keyup.space="keyPressed('space')" @keyup.delete="keyPressed('delete')" @keyup.right="keyPressed('right')" />
     <p v-for="(message,index) in messages" v-bind:key="index" track-by="$index">{{ message }}</p>

     <!-- prevents reloading the page -->
     <form class="" action="#" method="post" @submit.prevent="formSubmit($event)">
       <fieldset>
         <h1>Hello form</h1>
         <input type="submit" name="" value="Submit form">
       </fieldset>
     </form>
     <!-- -->


    <!-- only trigger handler if event.target is the element itself -->
    <!-- i.e. not from a child element -->
    <!-- Bubbling child -> parent-> root  -->
    <div class="root" v-on:click="doThat('root')">

      <!-- stop cancel event bubbling -->
      <!-- self, if users clicks on me my area or border please trigger handler- will not stop bubbling -->
      <div class="parent" v-on:click.self="doThat('from parent')">
        Parent
          <div class="child" v-on:click="doThat('from child')">
            Child
          </div>
      </div>
  </div>
  <!--click will be trigged at must once -->
  <a href="#" @click.once="onlyOnce">Click me</a>
</div>

</template>

<script>
export default {
  name: 'eventHandling',
  data () {
    return {
      counter: 0,
      messages: []
    }
  },
  methods: {
    countClicks () {
      this.counter++
    },
    keyPressed (key) {
      this.messages.push(`${key} was pressed`)
    },
    formSubmit (e) {
      console.log(e);
    },
    doThat (message) {
      alert(message);
      console.log(message)
    },
    onlyOnce (e) {
      console.log("How many times clicked ?");
    }
  }
}
</script>

<style lang="scss">
.root {
  width: 350px;
  height: 350px;
  background: green;
  text-align: center;
  color: white;
  padding: 20px;
}
.parent {
  width: 200px;
  height: 200px;
  background: red;
  text-align: center;
  color: white;
}

.child {
  width: 100px;
  height: 100px;
  background: blue;
  margin: 50px;
  text-align: center;
  color: white;
}
</style>
