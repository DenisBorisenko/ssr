<template>
  <div class="container col-md-6 mt-5">
    <h2>Update topic</h2>
    <hr>
    <br>
    <form @submit.prevent="update">
      <div class="form-group">
        <label> Topic title</label>
        <input v-model.trim="topic.title" autofocus type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter new topic title">
        <small v-if="errors.title" class="form-text text-danger">{{errors.title[0]}}</small>
      </div>
      <button type="submit" class="btn btn-primary">Update</button>
    </form>
    <br>
    <i class="fa fa-"></i><nuxt-link to="/topics" class="btn btn-dark text-light">Back to topics</nuxt-link>

  </div>
</template>
<script>
  export default{
      data(){
          return{
            topic:{
                title:''
            }
          }
      },
      async asyncData({$axios,params}){
          let {data:{data}} = await $axios.get(`/topics/${params.id}`)
          return {topic: data}
      },
      methods:{
          async update(){
              await this.$axios.patch(`/topics/${this.$route.params.id}`,{
                  title:this.topic.title
              })
              this.$router.push('/topics')
          }

      }

  }
</script>
