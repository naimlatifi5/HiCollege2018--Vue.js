<template>
    <div class="header">
        <slot></slot>
          <div class="section__header">
            <slot name="headerWithSection"></slot>
          </div>
    </div>
</template>

<script>
export default {
  name: 'headerSection'
}
</script>

<style lang="scss">
</style>
