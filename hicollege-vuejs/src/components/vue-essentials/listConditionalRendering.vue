<template>
  <div class="listRendering">
    <h1>Hello list rendering</h1>
    <ul class="list-group" v-for="(item, index) in hiCollegeList" v-bind:key="index">
      <li class="list-group-item" :id="index" v-bind:key="index">{{item.name}} - {{item.foodpreferernce}}</li>
    </ul>
    <!--conditional rendering with v-if  -->
    <div @click="toggleMeVIf" class="toggle" v-if="visibleVIf">
      <p>Click to make me invisible- v-if</p>
    </div>
    <!--
    <div v-else-if>
      Any other condition
    </div>
    -->
    <div class="messageelse" v-else>The div with v-if is removed from DOM</div>
      <!-- Conditional rendering with v-else -->
    <div @click="toggleMeVShow" class="toggle" v-show="visibleVShow">
      <p>Click to make me invisible, v-show</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listConditionalRendering',
  data () {
    return {
      hiCollegeList: [
        {
          name: 'Naim Latifis',
          foodpreferernce: 'No pigg meat'
        },
        {
          name: 'Leanne Graham',
          foodpreferernce: 'Veg'
        },
        {
          name: 'Ervin Howell',
          foodpreferernce: 'Veg'
        },
        {
          name: 'Clementine Bauch',
          foodpreferernce: 'Veg'
        },
        {
          name: 'Patricia Lebsack',
          foodpreferernce: 'Veg'
        }
      ],
      visibleVIf: true,
      visibleVShow: true
    }
  },
  methods: {
    toggleMeVShow () {
      this.visibleVShow = !this.visibleVShow
    },
    toggleMeVIf () {
      this.visibleVIf = !this.visibleVIf
    }
  }
}
</script>

<style lang="scss">
  .list-items {
    li {
      margin-bottom: 20px;

    }
    span {
      display: block;
    }
  }
  .toggle{
    padding: 20px;
    background-color: red;
    margin-bottom: 10px;
  }
  .messageelse {
    padding: 20px;
    background-color: green;
    margin-bottom: 10px;
  }

</style>
