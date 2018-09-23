<template>
  <div class="card">
    <div class="card-header">
      <slot name="header">
        <h1>Header from card child</h1>
      </slot>
    </div>
    <div class="card-body">
      <slot name="body">
        <p>
          Hello body
        </p>
      </slot>
    </div>
    <div class="footer">
      <slot name="footer">
        <p>Footer page</p>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardNamedSlot'
}
</script>

<style lang="scss">
</style>
