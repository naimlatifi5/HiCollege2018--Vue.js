<template>
  <div class="bindingAttributes">
    <h1>hello Binding attributes and style</h1>
    <!-- bind classes -->
    <div class="my-box" @click="toggleClass" :class="['success', 'error', {'green': redAttachedClass}]" :style="addClassStyle">
      1
    </div>
    Enter width <input type="text" v-model="Width" /> <br />
    Enter height <input type="text" v-model="Height"/>
    <hr />
    <!-- bind style -->
    <div class="bind-style" :style="{color : activeColor, fontSize:fontSize + 'px'}" >
      Binding styles
    </div>

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
      activeColor: 'red',
      fontSize: 20,
      styleObject: {
        color: 'green',
        fontSize: 30 + 'px'
      },
      imageSrc: 'https://via.placeholder.com/150/24f355',
      redAttachedClass: false,
      Width: '',
      Height: ''
    }
  },
  computed: {
    addClassStyle () {
      return {
        'backgroundColor': this.redAttachedClass,
        'width': this.Width + 'px',
        'height': this.Height + 'px'
      }
    }
  },
  methods: {
    toggleClass () {
      this.redAttachedClass = !this.redAttachedClass
    },
    doSomethingDisabled () {
      // do something when disabled
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

  width: auto;
  height: auto;
  margin-bottom: 20px;
}
.green {
  background-color: green;
  color: white;
}
.my-box {
  margin: 20px auto;
  background-color: grey;
}
</style>
