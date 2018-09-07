<template>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Comment</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in userData">
          <td>{{item.name}}</td>
          <td>{{item.comment}}</td>
          <td><removeButton></removeButton></td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import removeButton from './removeButton.vue';
export default {
  name: 'displayTableData',
  props: {
    userData: {
      type: Array,
      required: true
    }
  },
  mounted() {
    console.log(this.userData);
  },
  components: {
    removeButton
  }
}
</script>

<style lang="scss">
</style>
