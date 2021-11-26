<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
      ><Header/>
    </v-app-bar>
    <v-container v-if="showLoader">
      <Loader />
    </v-container>
    <v-main>
      <v-alert v-if="this.$store.state.error.isError"
        type="error"
        :show="showError"
        color="red"
        dark
        border="top"
        icon="mdi-alert"
        transition="scale-transition"
      >
        {{this.$store.state.error.statusCode}}
      </v-alert>
        <router-view/>
      </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Loader from "./components/Loader"
export default {
  components: { Header, Loader },
  name: 'App',

  computed: {
      showLoader() {
        return this.$store.state.loader.loading;   
      },
      showError(){
        return this.$store.state.error.statusCode
        
        
      }
      
  },
};
</script>
