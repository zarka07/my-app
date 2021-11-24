<template>
  <div class="postList">
    <h2>Posts</h2>
    <h4></h4>
    <div v-for="el in post" :key="el.id">
      <div class="row">
          <router-link tag="h3"
            :to="{ name : 'Id', params: {id: el.id}}">
            {{el.title}}
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
    return  {
     posts:{},
     path:'posts/',
     title:'',
     post:[],
     }
  },
  methods:{
    async showPosts(path){
      
      let posts = await this.get(path)
      let count = 0
      for(let key in posts.data){
        count++
      }
      for(let i=0;i<count;i++){       
          this.post[i] = posts.data[i]
          //console.log(this.post[i])
      }
    },
    
  },
  created(){
    this.showPosts(this.path);
  },
  

}
</script>
