<template>
  <div id="app">
    
    <div v-if="showLoader">
      <Loader />
    </div>    
    
    <router-view/>
    
    <!--<div>loader current status: {{this.$store.state.loading}}</div>
     <Loader :show="showLoader"/>
    <router-view/>
    <button @click="show">change state</button> -->
  </div>
</template>
<script>
import Loader from "./components/Loader"
export default {
  
  components: { Loader },
  methods:{
    
  },
  computed: {
      showLoader() {
      return this.$store.state.loader.loading;   
    }
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
