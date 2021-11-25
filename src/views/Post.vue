<template>
  <div>
        <h1> This is the post id {{ $route.params.id}}</h1>
            <div class="row">
                
                <h1>post title:</h1> 
                <p>{{post.title}}</p>
                <h3>post body:</h3> 
                <p>{{post.body}}</p>
                <h4>comments: </h4>
                <ul v-for="comment in comments" :key="comment.id" type="none">
                    <li>id: {{comment.id}}</li>
                    <li>name: {{comment.name}}</li>
                    <li>email: {{comment.email}}</li>
                    <li>body: {{comment.body}}</li>
                </ul>
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
      return {
      post:{},
      comments:{},
      path:'posts/'+this.$route.params.id,
      commentsPath: 'posts/'+this.$route.params.id+'/comments'
      }
    },
  created(){
    this.showPost(this.path);
    this.showComments(this.commentsPath)
  },
  methods:{
      async showPost(path){
        let post = await this.get(path)
        this.post = post.data
      },
      async showComments(commentsPath){
        let allComments = await this.get(commentsPath)
        this.comments = allComments.data
      },
      back(){
        this.$router.push({name:'PostList'})
      },
    },
}
</script>