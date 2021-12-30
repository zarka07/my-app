<template>
  <v-container class="postList">
    <v-card>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title >{{$t("PostlistVue.Postlist")}}</v-list-item-title>
        <!-- .slice(0,limitPerPage) -->
        <v-list-item-subtitle  v-for="post in paginatedPosts" :key="post.id">
           <router-link v-if="typeof paginatedPosts!==undefined" tag="span" :to="{ name : 'Id', params: {id: post.id}}">
            {{post.title}}
          </router-link>
           </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    </v-card>
    <div class="text-center" style="margin-top:10px">
      <v-pagination 
        color="green"
        v-model="pageNumber"
        circle
        :length="pagesCount-1"
        @next="next"
        @previous="previous"
      ></v-pagination>
      
    </div>
    
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
     post:[],
     pageNumber:+this.$route.query.pageNumber || 1,
     postsPerPage:10
     }
  },
  methods:{
    next(){
      this.pageNumber+1;
      },
    
    previous(){
      this.pageNumber-1;
      },
  },
  computed:{
    pagesCount(){
      let lenght = this.post.length,
          size = this.postsPerPage;
      return Math.ceil(lenght/size);
    },
    paginatedPosts(){
      const start = this.pageNumber * this.postsPerPage;
      const end = start + this.postsPerPage;
      
      return this.post.slice(start, end)
    }
  },
}
</script>
<style scoped>
  span{
    margin:15px;
  }
  .modal{
    display: block;
    height: 500px;
    width: 80%;
  }
</style>