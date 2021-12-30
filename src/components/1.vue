<template>
  <v-footer padless color="green">
    <v-col
      class="text-center"
      cols="12"
      
    >
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-col>
  </v-footer>
</template>
<script>
export default {
  name: "my-footer"
}
</script>