<template>
    <table class="table table-hover" v-if="userData.length">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Comment</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in userData" :index="index" :key="index">
          <td>{{item.name | capitalize}}</td>
          <td>{{item.comment}}</td>
          <td><removeButton :index="index" @itemClicked="removeItemFromArray"></removeButton></td>
        </tr>
      </tbody>
    </table>
    <div v-else>
       <p>
         There are no attendance yet...
       </p>
    </div>
</template>

<script>
import removeButton from './removeButton.vue'
export default {
  name: 'displayTableData',
  props: {
    userData: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeItemFromArray (index) {
      // get rid of the item based on the index array
      this.userData.splice(index, 1)
    }
  },
  components: {
    removeButton
  },
  filters: {
    capitalize (str) {
      return str.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
        return letter.toUpperCase();
      });
    }
  }
}
</script>

<style lang="scss">
</style>
