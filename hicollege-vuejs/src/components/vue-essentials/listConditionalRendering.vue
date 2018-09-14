<template>
  <div class="listRendering">
    <h1>Hello list rendering</h1>
    <ul class="list-group" v-for="(item, index) in hiCollegeList">
      <li class="list-group-item" :id="index">{{item.name}} - {{item.foodpreferernce}}</li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'listConditionalRendering',
  data () {
    return {
      hiCollegeList: [
        {
          name: 'Naim Latifi',
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
      ]
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
</style>
