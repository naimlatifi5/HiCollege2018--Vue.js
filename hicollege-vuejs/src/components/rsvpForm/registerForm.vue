<template>
  <div class="row section">
    <progressBar :rsvpCapacity="numberOfAttandence" :rsvpCapacityPercentage="rsvpPercentCapacity" :arrayLength="formData.length"></progressBar>
    <headerSection>
      <template slot="headerWithSection">
        <div class="row">
          <div class="col-4 align-left">
            <h5>{{formData.length}} / {{numberOfAttandence}} people attending</h5>
          </div>
          <div class="col-8 align-right">
            <button type="button" class="btn btn-primary btn-lg" @click="toggleForm">I will attend</button>
          </div>
        </div>
      </template>
    </headerSection>
    <div class="section__content" v-show="formtoggle">
      <div class="row">
        <div class="col-12">
          <form class="rsvp-form" @submit.prevent="formSubmit">
              <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" v-model="name">
              </div>
              <div class="form-group">
                <label for="exampleEmail">Email</label>
                <input type="email" class="form-control" id="exampleEmail" placeholder="Email" v-model="email">
              </div>
              <div class="form-group">
                <label for="comment">Comment</label>
                <input type="text" class="form-control" id="comment" placeholder="Enter commment" v-model="comment">
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
              <button type="button" class="btn btn-primary" @click="formtoggle= false">Cancel</button>
            </form>
        </div>
      </div>
    </div>
    <displayTableData :userData="formData"></displayTableData>
  </div>
</template>

<script>
import headerSection from './header.vue'
import displayTableData from './displayTableData.vue'
import progressBar from './progressBar.vue'
export default {
  name: 'registerForm',
  props: {
    numberOfAttandence: Number
  },
  data () {
    return {
      formtoggle: false,
      formData: [],
      name: '',
      email: '',
      comment: '',
      rsvpPercentCapacity: 0
    }
  },
  computed: {

  },
  methods: {
    toggleForm (e) {
      // toggle form data
      this.formtoggle = !this.formtoggle
    },
    slideUpForm () {
      this.formtoggle = false
    },
    formSubmit (e) {
      let formDataObj = {
        name: this.name,
        email: this.email,
        comment: this.comment
      }
      // make sure that you do not send empty data on button submit
      // check if name length is greater than 0
      if (this.name.length > 0 && this.rsvpPercentCapacity < 100) {
        this.formData.push(formDataObj)
        // TODO - save data to local storage or to fake json server
      }
      // clear the form after submitv
      this.name = ''
      this.email = ''
      this.comment = ''
      this.rsvpPercentCapacity = this.formData.length / (this.numberOfAttandence / 100)
    }
  },
  components: {
    headerSection,
    displayTableData,
    progressBar
  }
}
</script>
<style lang="scss">
</style>
