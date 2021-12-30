<template>
  <v-app >
    <v-app-bar
        app
        dark 
      >
      <v-toolbar  src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <Header/>
        <v-toolbar-title style="margin: 0 2% 0 auto"><strong>Vue pet project</strong></v-toolbar-title>
      </v-toolbar>
    </v-app-bar>

    <v-overlay v-if="showLoader">
      <Loader />
    </v-overlay>

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
      <transition name="fade">
        <router-view/>
      </transition>
    </v-main>

    <v-footer padless >
      <v-container fluid ma-0 pa-0 fill-height style="display:block">
      <Footer/>
      </v-container>
    </v-footer>
      
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Loader from "./components/Loader";
import Footer from "./components/Footer";

export default {
  components: { Header, Loader, Footer },
  name: 'App',
  data: () => ({
      icons: [
        'mdi-send',
        'mdi-linkedin'
      ],
    }),
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
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
::v-deep .v-toolbar__content{
  padding: 0;
}
.phonenumber{
  font-size:2.2vh;
  right:5px;
  left:auto;
}
</style>