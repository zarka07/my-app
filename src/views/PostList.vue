<template>
  <div class="postList">
    <h2>Posts</h2>
    <h4></h4>
    <ul v-for="post in post" :key="post.id" type="none">
          <router-link tag="li" :to="{ name : 'Id', params: {id: post.id}}">
            {{post.title}}
          </router-link>
    </ul>
  </div>
</template>
<script>
import getApi from '../mixins/getApi'
export default {
  name: 'PostList',
  mixins:[getApi],
  data(){
    return  {
     path:'posts/',
     post:{},
     }
  },
  methods:{
    async showPosts(path){
      let posts = await this.get(path)
      this.post = posts.data
    },
  },
  created(){
    this.showPosts(this.path);
  },
}
</script>
