<template>
  <div class="slots">
    <h1>Hello slots</h1>
    <child-component-slot>
      <p>
        I am writing whatever I want from parent to pass to child
      </p>
    </child-component-slot>
    <hr />
    <child-component-slot>
      <p>
         I am still binding the data in parent scope {{message}}
      </p>
    </child-component-slot>
    <child-component-slot>
    </child-component-slot>
    <br />
    <hr />

    <!-- Named slot from cardNamedSlot component-->
    <card-named-slot>
      <h1 slot="header">Named slot header1</h1>
      <div slot="body">
        <p>This is a body for the named slot1</p>
      </div>
      <div slot="footer">
        <p>Hello footer1</p>
      </div>
    </card-named-slot>


    <card-named-slot>
      <h1 slot="header">Named slot header 2</h1>
      <div slot="body">
        <p>This is a body for the named slot 2</p>
      </div>
      <div slot="footer">
        <p>Hello footer 2</p>
      </div>
    </card-named-slot>

  </div>
</template>

<script>
import ChildComponentSlot from './components/componentSlot.vue'
import CardNamedSlot from './components/cardNamedSlot.vue'

export default {
  name: 'slots',
  data () {
    return {
      message: 'Hello message from parent'
    }
  },
  components: {
    'child-component-slot': ChildComponentSlot,
    'card-named-slot': CardNamedSlot
  }
}
</script>

<style lang="scss">
</style>
