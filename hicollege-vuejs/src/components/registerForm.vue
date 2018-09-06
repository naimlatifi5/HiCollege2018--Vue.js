<template>
  <div class="row section">
    <div class="section__header">
      <div class="col-6">
        <h5>55 people attending</h5>
      </div>
      <div class="col-6">
        <button type="button" class="btn btn-primary btn-lg">I will attend</button>
      </div>
    </div>
    <div class="section__content">
      <div class="row">
        <div class="col-12">
          <form class="rsvp-form">
              <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name">
              </div>
              <div class="form-group">
                <label for="exampleEmail">Email</label>
                <input type="email" class="form-control" id="exampleEmail" placeholder="Email">
              </div>
              <div class="form-group">
                <label for="comment">Comment</label>
                <input type="text" class="form-control" id="comment" placeholder="Enter commment">
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
              <button type="button" class="btn btn-primary">Cancel</button>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'registerForm'
}
</script>

<style lang="scss">
</style>
