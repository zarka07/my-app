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
import getPosts from '../mixins/getPosts'
export default {
  name: 'PostList',
  mixins:[getApi, getPosts],
  data(){
    return  {
     path:'posts',
     post:{},
     }
  },
}
</script>
