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
        <tr v-for="(item,index) in userData" :id="index">
          <td>{{item.name}}</td>
          <td>{{item.comment}}</td>
          <td><removeButton></removeButton></td>
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
  components: {
    removeButton
  }
}
</script>

<style lang="scss">
</style>
