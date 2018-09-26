<template>
  <div class="hello">
    <div class="container">
        <h1>RSVP- APP <span class="badge badge-secondary badge-secondary--color">HiCollege HIQ</span></h1>


        <!-- make as component -->
        <div class="row section">
            <div class="section__header">
                <h2>Vue.js HiCollege course</h2>
            </div>
            <div class="section__content">
              <p>
                Vue is becoming extremely popular JavaScript framework nowadays which lets you build dynamic and interactive web apps in a simple way. The secret of Vue.js framework is its simplicity, however to help you get started with the framework I built this course to get you familiar with the core concepts of the framework.
              </p>
            </div>
        </div>



          <div class="row section">
            <!-- make progress bar as component <progress-bar></progress-bar>-->
            <div class="progress">
               <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
           </div>

           <!-- make as component header with slots <header-section></header-section> -->
            <div class="section__header">
              <div class="row">
                <div class="col-4 align-left">
                  <h5>55 people attending</h5>
                </div>
                <div class="col-8 align-right">
                  <button type="button" class="btn btn-primary btn-lg">I will attend</button>
                </div>
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
          <!-- display table <display-table></display-table> -->
          <div class="row">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Comment</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td><button type="button" class="btn btn-danger">Danger</button></td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td><button type="button" class="btn btn-danger">Danger</button></td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thorenor</td>
                  <td><button type="button" class="btn btn-danger">Danger</button></td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to HiCollege HIQ coures with Vue.js'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;

  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
