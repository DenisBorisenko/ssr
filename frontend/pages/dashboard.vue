<template>
  <div class="container col-md-6 mt-5">
    <h2>Dashboard</h2>
    <hr>
    <h3>Create new topic</h3>
    <br>
    <form @submit.prevent="create">
      <div class="form-group">
        <label> Topic title</label>
        <input v-model.trim="form.title" autofocus type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter topic title">
        <small v-if="errors.title" class="form-text text-danger">{{errors.title[0] }}</small>
      </div>
      <div class="form-group">
        <label>Topic body</label>
        <textarea v-model="form.body" class="form-control" rows="5"></textarea>
        <small v-if="errors.body" class="form-text text-danger">{{errors.body[0] }}</small>
      </div>
      <button type="submit" class="btn btn-primary">Create</button>
    </form>
    <br>
  </div>
</template>
<script>
  export default{
      middleware:['auth'],
      data(){return{
          form:{
              title:'',
              body:'',
          }
      }},
      methods: {
          async create() {
              try {
                  await this.$axios.post('/topics', this.form)
                  this.$router.push('/')
              } catch(e) {

              }
          }

      }
  }
</script>
