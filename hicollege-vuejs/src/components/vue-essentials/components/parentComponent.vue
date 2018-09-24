<template>
  <div class="parent-component">
    <h3 :style="{fontSize: fontSize + 'px', color: color}" >Hello parent</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </p>

    <child-component @changeColor="changeMyColor"></child-component>

  </div>
</template>

<script>
import childComponent from './childComponent.vue'
export default {
  name: 'parentComponent',
  data () {
    return {
      fontSize: 30,
      color: 'green'
    }
  },
  methods: {
    changeMyColor (color) {
      this.fontSize = 50;
      this.color = color;
    }
  },
  components: {
    'child-component': childComponent
  }
}
</script>

<style lang="scss">
.parent-component {
  padding: 20px;
  border: 1px solid grey;
  background-color: white;
}
</style>
