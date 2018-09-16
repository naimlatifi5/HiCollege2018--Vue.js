<template>
  <div class="eventHandling">
    <h1>Hello event handling</h1>
    <button class="helloButton" @click="countClicks">Button clicked <template v-if="counter > 0">{{counter}}</template></button><br /><br />
    Capture event handling:
    <input type="text" placeholder="capture events" @keyup.enter="keyPressed('enter')" @keyup.tab="keyPressed('tab')" @keyup.esc="keyPressed('esc')" @keyup.left="keyPressed('left')" @keyup.up="keyPressed('up')" @keyup.down="keyPressed('down')" @keyup.space="keyPressed('space')" @keyup.delete="keyPressed('delete')" @keyup.right="keyPressed('right')" />
     <p v-for="message in messages" track-by="$index">{{ message }}</p>
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
      this.counter++;
    },
    keyPressed (key) {
      this.messages.push(`${key} was pressed`);
    }

  }
}
</script>

<style lang="scss">
</style>
