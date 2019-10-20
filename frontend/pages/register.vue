<template>
  <div class="container col-md-6 mt-5">
    <h2>Register</h2>
    <br>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label>Full name</label>
        <input v-model.trim="form.name" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter name">
        <small v-if="errors.name" class="form-text text-danger">{{errors.name[0]}}</small>

      </div>
      <div class="form-group">
        <label>Email address</label>
        <input v-model.trim="form.email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
        <small v-if="errors.email" class="form-text text-danger">{{errors.email[0]}}</small>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model.trim="form.password" type="password" class="form-control" placeholder="Password">
        <small v-if="errors.password" class="form-text text-danger">{{errors.password[0]}}</small>

      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <br>
    <p >Already have an account? <nuxt-link to="/login">Login</nuxt-link></p>
  </div>
</template>
<script>
  export default{
      middleware:['guest'],
      data(){
          return{
              form:{
                  name:'',
                  email:'',
                  password:'',
              },
          }
      },
      methods:{
          async submit(){
              try{
                await this.$axios.$post('register',this.form)
                await this.$auth.loginWith('local',{
                    data:{
                        email:this.form.email,
                        password:this.form.password,
                    }
                })
                this.$router.push({
                    path:this.$router.query.redirect || '/profile'
                })
              } catch (e) {

              }
          }
      }
  }
</script>
