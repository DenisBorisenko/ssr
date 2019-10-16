<template>
  <div class="container col-md-6 mt-5">
    <h2>Login</h2>
    <br>
    <form>
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
    <p>Dont have an account? <nuxt-link to="/register">Register</nuxt-link></p>
  </div>
</template>
<script>
  export default{

  }
</script>
