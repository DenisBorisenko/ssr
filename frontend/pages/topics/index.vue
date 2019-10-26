<template>
  <div class="container">
    <h2>Latest topics</h2>
    <div v-for="(topic,index) in topics" :key="index" class="bg-dark mt-5 mb-5" style="padding:20px;">
      <h2><nuxt-link :to="{name:'topics-id',params:{id:topic.id}}" class="text-white">{{topic.title}}</nuxt-link></h2>

      <div v-if="authenticated && user.id === topic.user.id">
       <nuxt-link :to="{name:'topics-edit',params:{id:topic.id}}">
         <button class="btn btn-outline-success fa fa-edit text-white pull-right"></button>
       </nuxt-link>
          <button @click="deleteTopic(topic.id)" class="btn btn-outline-danger fa fa-trash-alt text-white pull-right"></button>
      </div>


      <p class="text-muted">{{topic.created_at}} by {{topic.user.name}}</p>

      <div v-for="(content,index) in topic.posts" :key="index" class="ml-5 content text-white">
        {{content.body}}
        <p class="text-muted">{{content.created_at}} by {{content.user.name}}</p>
        <div class="btn btn-primary fa fa-heart  ml-5 mb-2" @click="likePost(topic.id,content)">
          <span class="badge">{{content.like_count}}</span>
        </div>
      </div>
    </div>
    <nav>
      <ul class="pagination justify-content-center">
        <li v-for="(key,value) in links" class="page-item">
          <a @click.prevent="loadMore(key)" href="#" class="page-link">{{value}}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
  .content{
    border-left:5px solid black;
    padding:0 10px;
  }
  .btn-outline-danger, .btn-outline-success{
    border:none;
  }

</style>
<script>
  export default {
      data(){
          return{
              topics:[],
              links:[],
          }
      },
      async asyncData({$axios}){
          let { data:{data, links}} = await $axios.get('/topics')
          return {
              topics: data,
              links
          }
      },
      methods:{
         async loadMore(key){
             if(key){
             let {data:{data,links}} = await this.$axios.get(key)
                this.topics = data
                this.links = links
             }
         },
          async deleteTopic(id){
             await this.$axios.delete(`/topics/${id}`)
              this.$router.push('/')
          },
          async likePost(topicId,content){
             const userFromVuex= this.$store.getters['auth/user']
              if(userFromVuex){
                  //cant like own post
                  if(userFromVuex.id === content.user.id){
                      alert('you cant like your own post')
                  }
                  if(content.users) {
                      if (content.users.some(user => user.id === userFromVuex.id)) {
                          alert('you have already liked this post')
                      } else {
                          await this.$axios.post(`/topics/${topicId}/post/${content.id}/likes`)
                          let {data: {data, links}} = await this.$axios.get('topics')
                          this.topics = data
                          this.links = links
                      }
                  }
              } else{
                  alert('please login!')
                  this.$router.push('/login')
              }
          }
      }
  }
</script>
