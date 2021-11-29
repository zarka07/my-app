<template>
<v-card
    class="mx-auto"
    tile
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>{{$t("PostVue.Post")}} {{ $route.params.id}}</v-list-item-title>
        <v-spacer></v-spacer>
        <v-list-item-subtitle>
          <b>{{$t("PostVue.Title")}}</b>:   {{post.title}}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <b>{{$t("PostVue.Body")}}</b>:   {{post.body}}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <b>{{$t("PostVue.Comments")}}</b>:
        </v-list-item-subtitle>
        <v-list-item-subtitle v-for="comment in comments" :key="comment.id">
          <b>{{$t("PostVue.Name")}}</b>:   {{comment.name}}
          <b>{{$t("PostVue.Email")}}</b>:  {{comment.email}}
          <b>{{$t("PostVue.Body")}}</b>:   {{comment.body}}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-btn depressed
      elevation="2"
      text
      x-small @click="back">{{$t("PostVue.Back")}}
    </v-btn> 
  </v-card>
   
</template>
<script>
import getApi from '../mixins/getApi'
import getPosts from '../mixins/getPosts'
export default {
  name: 'Post',
  mixins:[getApi, getPosts],
  data(){
      return {
      post:{},
      comments:{},
      path:'posts/'+this.$route.params.id,
      commentsPath: 'posts/'+this.$route.params.id+'/comments'
      }
    },
  created(){
    this.showComments(this.commentsPath)
  },
  methods:{
      async showComments(commentsPath){
        this.comments = await this.get(commentsPath)
      },
      back(){
        this.$router.push({name:'PostList'})
      },
    },
}
</script>