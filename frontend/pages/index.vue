<template>
    <div class="d-flex flex-column">
      <div class="bg flex-fill">
        <div class="flex-center posotion-ref full-height">
          <div class="content mb-5">
            <div class="title text-light">
              Laravel API Development
              <br>
              Vue/Nuxt JS Wep App
            </div>
            <hr>
            <nuxt-link to="/dashboard" class="btn btn-dark mr-2">Post a new topic</nuxt-link>
            <nuxt-link to="/topics" class="btn btn-dark">Browse topics</nuxt-link>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  export default{
  // middleware:['auth'],
  }
</script>
<style scoped>
  html,body{
    background: #fff;
    color:#636b6f;
    font-family: 'Nunito',sans-serif;
    font-weight: 200;
    height: 100vh;
    margin: 0;
  }
  .full-height{
    height: 100vh;
  }
  .flex-center{
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .content{
    text-align: center;
  }
  .title{
    font-size: 84px;
  }
</style>
