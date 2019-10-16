<template>
  <div class="container col-md-6 mt-5">
    <h2>Register</h2>
    <br>
    <form>
      <div class="form-group">
        <label>Full name</label>
        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter name">
        <small class="form-text text-danger">show error here</small>
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
        <small class="form-text text-danger">show error here</small>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" placeholder="Password">
        <small class="form-text text-danger">show error here</small>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <br>
    <p >Already have an account? <nuxt-link to="/login">Login</nuxt-link></p>
  </div>
</template>
<script>
  export default{

  }
</script>
