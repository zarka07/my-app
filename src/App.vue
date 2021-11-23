<template>
  <div id="app">
    <Loader v-if="show" />
    <div v-else><router-view/></div>
    <button @click="show=!show">change state</button>
  </div>
</template>
<script>
import Loader from './components/Loader.vue'
export default {
  data(){
    return{
      show:this.$store.state.loading
    }
  },
  components: { Loader },
  methods:{
    
  },
  computed: {
    
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
