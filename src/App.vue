<template>
  <div id="app">
    <template v-if="show" >
      <Loader />
    </template>
    
    <template v-else>
      <router-view/>
    </template>
    <div>loader current status: {{this.$store.state.loader.loading}}</div>
    <!-- <Loader :show="showLoader"/>
    <router-view/>-->
    <button @click="show=!show">change state</button> 
  </div>
</template>
<script>
import Loader from './components/Loader.vue'
export default {
  data(){
    return{
      show:this.$store.state.loader.loading
    }
  },
  components: { Loader },
  methods:{
    
  },
  computed: {
    // show() {
    //   console.log(this.$store.state.loader.loading)
    //   return this.$store.getters.GET_LOADER;
    // }
  },
  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
