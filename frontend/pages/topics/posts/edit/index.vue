<template>
  <div class="container col-md-6 mt-5">
    <h2>Update post</h2>
    <hr>
    <br>
    <form @submit.prevent="update">
      <div class="form-group">
        <label> Topic title</label>
        <textarea v-model.trim="post.body" autofocus type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter new topic title"></textarea>
        <small v-if="errors.body" class="form-text text-danger">{{errors.body[0]}}</small>
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
                post:{
                    body:''
                }
            }
        },
        async asyncData({$axios,params}){
            let {data:{data}} = await $axios.get(`/topics/${params.id}/post/${params.body}`)
            return {post: data}
        },
        methods:{
            async update(){
                await this.$axios.patch(`/topics/${this.$route.params.id}/post/${this.$route.params.body}`,{
                    body:this.post.body
                })
                this.$router.push('/topics')
            }

        }

    }
</script>
