<template>
  <div class="bindingAttributes">
    <h1>hello Binding attributes and style</h1>
    <a href="https://www.hiq.se">Anchor link</a>
    <br />
    <br />
    <!-- bind via directive -->
    <a v-bind:href="hiqLink">Bind link attribute</a>
    <br />
    <br />
    <button v-bind:disabled="doSomethingDisabled">Hello disabled button</button>
    <!-- Short hand-->
    <br />
    <br />
    <button :disabled="doSomethingDisabled">Hello disabled button shorthand</button>
    <div class="box red" :class="backgroundColor">
        Hello red div
    </div>
    <!-- bind style -->
    <div class="bind-style" :style="{color : activeColor, fontSize:fontSize + 'px'}" >
      Binding styles
    </div>
    <div class="" :style="styleObject">
      Binding style as object
    </div>
    <img v-bind:src="imageSrc" />
  </div>
</template>

<script>
export default {
  name: 'bindingAttributes',
  data () {
    return {
      hiqLink: 'https://www.hiq.se',
      backgroundColor: 'green',
      styleObject : {
        color: 'green',
        fontSize: 30 + 'px'
      },
      imageSrc: 'https://wiki.hiq.se//download/attachments/35684923/5.jpg?version=1&modificationDate=1490616044803&api=v2'
    }
  }
}
</script>

<style lang="scss">
.box {
  max-width: 100px;
  max-height: 100px;
  margin: 0 auto;
  margin-top: 20px;
  min-height: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.red {
  background-color: red;
  color: white;
}
.green {
  background-color: green;
  color: black;
}
img {

  width: 600px;
  height: 150px;
}
</style>
