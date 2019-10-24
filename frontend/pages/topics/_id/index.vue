<template>

  <div class="container">
    <div  class="bg-dark mt-5 mb-5" style="padding:20px;">
      <h2  class="text-white display-3  ">{{topic.title}}</h2>
      <p class="text-muted">{{topic.created_at}} by {{topic.user.name}}</p>
      <hr>

      <div v-for="(content,index) in topic.posts" :key="index" class="ml-5 content text-white">
        {{content.body}}
        <p class="text-muted">{{content.created_at}} by {{content.user.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export  default {
      data(){
          return {
            topic:''
          }
      },
      async asyncData({$axios,params}){
          let {data:{data}} =  await $axios.get(`/topics/${params.id}`)
          return {
              topic:data
          }
      }
  }
</script>
