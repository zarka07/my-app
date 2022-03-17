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
    
    <v-btn depressed block color="primary"
      elevation="2"
      text
      x-small @click="showModal">{{$t('Agreement.ShowAgreement')}}
    </v-btn>
    <v-btn depressed block color="primary"
      elevation="2"
      text
      x-small @click="back">{{$t("PostVue.Back")}}
    </v-btn> 
    <modal class="modal" v-if="this.$store.state.modal.show">
      <div class="modalContent" ><Agreement /></div>
    </modal>
  <div id="map" ref="map" style="height: 300px;"></div>
  </v-card>

</template>
<script>
import getApi from '../mixins/getApi';
import getPosts from '../mixins/getPosts';
import Agreement from '../components/Agreement.vue';
import Wrld from 'wrld.js';

export default {
  name: 'Post',
  components:{Agreement},
  mixins:[getApi, getPosts],
  data(){
      return {
      isOpen:false,
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
      showModal(){
        this.$store.dispatch("modal/showModal")
      }
    },
  mounted(){
    var map = Wrld.map('map', "721e1d835e3d535b646a4aef4d94600d",{
      center: [49.9836, 36.2210],
      zoom: 17
    });
    var weathers = [Wrld.themes.weather.Clear, Wrld.themes.weather.Overcast, Wrld.themes.weather.Rainy, Wrld.themes.weather.Snowy];
            var weatherIndex = 3;
            map.themes.setWeather(weathers[weatherIndex]);
            weatherIndex = (weatherIndex + 1) % weathers.length;
    
  }
}
</script>
<style scoped>
  .modal{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    z-index: 99;
    padding:30px 0;
    background: rgb(192, 187, 187);
    
  }
  .modalContent{
    margin:auto;
    width: 600px;
    max-width: 100%
  }
  .v-btn{
    margin:5px;
  }
</style>