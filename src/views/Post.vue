<template>
  <div>
        <h1> This is the post id {{ $route.params.id}}</h1>
            <div class="row">
                
                <h1>post title:</h1> 
                <p>{{post.title}}</p>
                <h3>post body:</h3> 
                <p>{{post.body}}</p>
                <h4>comments: </h4>
                <div v-for="comment in comments" :key="comment.id">
                    <p>{{comment.id}}</p>
                    <p>{{comment.name}}</p>
                    <p>{{comment.email}}</p>
                    <p>{{comment.body}}</p>
                </div>
                <button @click="back">Back</button>
            
                 
            </div>
    </div>
</template>
<script>
import getApi from '../mixins/getApi'
export default {
  name: 'Post',
  mixins:[getApi],
  data(){
      return {post:'',
      title:'',
      id: this.$route.params.id, 
      comments:[],
      name: '',
      email: '',
      body: '',
      path: this.id+'/',
      commentsPath: this.id+'/comments'
      }
    },
  created(){
    this.showPosts(this.commentsPath);
  },
  methods:{
      async showPosts(path){
        this.get(path+this.id,(posts)=>{console.log(posts)})
      },
      back(){
        this.$router.push({name:'PostList'})
      },
      
    }
}
</script>