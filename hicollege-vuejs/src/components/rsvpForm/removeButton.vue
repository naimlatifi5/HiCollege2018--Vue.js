<template>
  <button type="button" class="btn btn-danger" @click="itemClicked">Delete</button>
</template>

<script>
export default {
  name: 'ButtonElement',
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    itemClicked (e) {
      this.$emit('itemClicked', this.index)
    }
  }
}
</script>

<style lang="css">
</style>
