<template>
  <div class="postList">
    <h2>Posts</h2>
    <h4></h4>
    <div v-for="post in posts" :key="post.id">
      
      <div class="row">
        
          <router-link tag="h5" 
            :to="{ name : 'Id', params: {id: post.id}}">
            {{post.title}}
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import getApi from '../mixins/getApi'
export default {
  name: 'PostList',
  mixins:[getApi],
  data(){
    return  {posts:'',}
  },
  
  created(){
      this.get();
      console.log('get posts')
  },

}
</script>
