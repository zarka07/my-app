<template>
  <v-container class="postList">
    <v-card>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>{{$t("PostlistVue.Postlist")}}</v-list-item-title>
        <v-list-item-subtitle v-for="post in post" :key="post.id">
           <router-link tag="span" :to="{ name : 'Id', params: {id: post.id}}">
            {{post.title}}
          </router-link>
           </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    </v-card>
  </v-container>
</template>
<script>
import getApi from '../mixins/getApi'
export default {
  name: 'PostList',
  mixins:[getApi],
  data(){
    return  {
     path:'posts',
     post:{},
     }
  },
  methods:{
    async showPosts(path){
      this.post = await this.get(path)
    },
  },
  created(){
    this.showPosts(this.path);
  },
}
</script>
