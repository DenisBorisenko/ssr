<template>
  <div class="container">
    <h2>Latest topics</h2>
    <div v-for="(topic,index) in topics" :key="index" class="bg-dark mt-5 mb-5" style="padding:20px;">
      <h2 ><nuxt-link :to="{name:'topics-id',params:{id:topic.id}}" class="text-white">{{topic.title}}</nuxt-link></h2>
      <div v-if="authenticated && user.id === topic.user.id">
       <nuxt-link :to="{name:'topics-edit',params:{id:topic.id}}">
         <button class="btn btn-success fa fa-edit text-white pull-right"></button>
       </nuxt-link>
        <nuxt-link :to="{name:'topics-edit',params:{id:topic.id}}">
          <button class="btn btn-success fa fa-trash-alt text-white pull-right"></button>
        </nuxt-link>
      </div>
      <p class="text-muted">{{topic.created_at}} by {{topic.user.name}}</p>

      <div v-for="(content,index) in topic.posts" :key="index" class="ml-5 content text-white">
        {{content.body}}
        <p class="text-muted">{{content.created_at}} by {{content.user.name}}</p>
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
         }
      }
  }
</script>
