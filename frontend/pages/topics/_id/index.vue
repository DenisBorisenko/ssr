<template>

  <div class="container">
    <div  class="bg-dark mt-5 mb-5" style="padding:20px;">
      <h2  class="text-white display-3  ">{{topic.title}}</h2>
      <p class="text-muted">{{topic.created_at}} by {{topic.user.name}}</p>
      <hr>

      <div v-for="(content,index) in topic.posts" :key="index" class="ml-5 content text-white">
        <p> {{content.body}}</p>

        <div v-if="authenticated && user.id === content.user.id">
          <nuxt-link :to="{name:'topics-posts-edit',params:{id: $route.params.id,body:content.id}}">
            <button class="btn btn-outline-success fa fa-edit text-white pull-right"></button>
          </nuxt-link>
          <button @click="deletePost(content.id)" class="btn btn-outline-danger fa fa-trash-alt text-white pull-right"></button>
        </div>

        <p class="text-muted">{{content.created_at}} by {{content.user.name}}</p>
      </div>
    </div>
    <div class="mt-5 ml-5" v-if="authenticated">
      <form @submit.prevent="create">
        <div class="form-group">
          <h4>Add a new post</h4>
          <textarea v-model="body" type="text" class="form-control" placeholder="Write something..."></textarea>
          <small v-if="errors.body" class="form-text text-danger">{{errors.body[0] }}</small>
        </div>
        <button class="btn btn-primary">Add a new post</button>
      </form>
    </div>
  </div>
</template>
<script>
  export  default {
      data(){
          return {
            topic:'',
              body:'',
          }
      },
      async asyncData({$axios,params}){
          let {data:{data}} =  await $axios.get(`/topics/${params.id}`)
          return {
              topic:data
          }
      },
      methods:{
          async create(){
              await this.$axios.post(`/topics/${this.$route.params.id}/post`,{
                  body:this.body
              })
              this.$router.push('/topics')
          },
          async deletePost(id){
              await this.$axios.delete(`/topics/${this.$route.params.id}/post/${id}`)
              this.$router.push('/topics')
          }
      }
  }
</script>
