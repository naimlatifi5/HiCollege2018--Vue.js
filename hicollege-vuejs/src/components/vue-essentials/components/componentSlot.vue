<template>
  <div class="component-slot">
      <!--Content from parents get rendered here -->
      <slot>
        <p>This is a default content if we cannot inject any from parent</p>
      </slot>
  </div>
</template>

<script>
export default {
  name: 'componentSlot'

}
</script>

<style lang="scss">
</style>
