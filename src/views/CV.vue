<template>
    <v-app>
        <v-row >
            <v-col class="blue darken-3" style="display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: flex-end;
            align-items: center">
                
                <v-card
    max-width="375"
    class="mx-auto"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/lists/ali.png"
      height="300px"
      dark
    >
      
    </v-img>

    <v-list style="background:#005eb6" subheader
        width="100%">
        <!-- location -->
        <v-list-item>
        <v-list-item-icon>
          <v-icon color="white">
            mdi-map-marker
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content >
          <v-list-item-title style="color:#FFF">Kharkiv, Ukraine</v-list-item-title>
          
        </v-list-item-content>
        </v-list-item>
        <!-- phone -->
        <v-list-item>
        <v-list-item-icon>
            <v-icon color="white">
                mdi-phone
            </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
            <v-list-item-title style="color:#FFF">(050) 700-5472</v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
            <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
        </v-list-item>
        
        <!-- mail -->
        <v-list-item>
            <v-list-item-icon>
            <v-icon color="white">
                mdi-email
            </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title style="color:#FFF">zarka08@gmail.com</v-list-item-title> 
            </v-list-item-content>
            <v-list-item-icon>
                <v-icon>mdi-message-text</v-icon>
            </v-list-item-icon>
        </v-list-item>
        
        <!-- tg -->
        <v-list-item>
        <v-list-item-icon>
          <v-icon color="white">
            mdi-send
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title style="color:#FFF">@zarka08</v-list-item-title> 
        </v-list-item-content>
        <v-list-item-icon>
            <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
        </v-list-item>
        
        <!-- LI -->
        <v-list-item>
        <v-list-item-icon>
          <v-icon color="white">
            mdi-linkedin
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title style="color:#FFF">@serhii-tarasov-63ba90203</v-list-item-title> 
        </v-list-item-content>
        <v-list-item-icon>
            <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
        </v-list-item>
    </v-list>
  </v-card>
                <v-row class="white--text ma-2">Key skills</v-row>
            </v-col>
            <v-col>2</v-col>
        </v-row>
        
    </v-app>
</template>

<script>
export default {
    name: "CV",
    data: () => ({
      selectedItem: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    }),
}
</script>