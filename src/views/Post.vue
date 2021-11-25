<template>
  <div>
        <h1> {{$t("PostVue.Post")}} {{ $route.params.id}}</h1>
            <div class="row">
                
                <h1>{{$t("PostVue.Title")}}:</h1> 
                <p>{{post.title}}</p>
                <h3>{{$t("PostVue.Body")}}:</h3> 
                <p>{{post.body}}</p>
                <h4>{{$t("PostVue.Comments")}}: </h4>
                <ul v-for="comment in comments" :key="comment.id" type="none">
                    <li>{{$t("PostVue.Id")}}: {{comment.id}}</li>
                    <li>{{$t("PostVue.Name")}}: {{comment.name}}</li>
                    <li>{{$t("PostVue.Email")}}: {{comment.email}}</li>
                    <li>{{$t("PostVue.Body")}}: {{comment.body}}</li>
                </ul>
                <button @click="back">{{$t("PostVue.Back")}}</button>  
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
        this.post = await this.get(path)
      },
      async showComments(commentsPath){
        this.comments = await this.get(commentsPath)
      },
      back(){
        this.$router.push({name:'PostList'})
      },
    },
}
</script>