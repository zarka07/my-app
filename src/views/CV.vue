<template>
    <v-app>
        <v-row style="width:630px">
            <v-col class="blue darken-3" style="display: flex;
              flex-direction: column;
              height: 100%;
              width:20%;
              justify-content: flex-end;
              align-items: center;
              padding:0 0 0 10px">
              <v-card
                width="400px"
                class="mx-auto"
              >
              
                <v-img class="blue darken-3 avatar"
                  alt="avatar"
                  position="center center"
                  height="316px"
                  
                >
                  <div style="margin-left:20%;">
                    <img src="../assets/avatar50-50.png">
                  </div>
                </v-img>
              
    
                <v-list class="blue darken-3" subheader 
                  width="100%">
                  <v-list-item style="left:70px">
                    <v-list-item-title class="description" >
                      <b>CONTACT ME AT:</b>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item v-for="contact in contacts" :key="contact.icon" style="color:white">
                    <v-list-item-icon>
                      <v-icon >
                        {{contact.icon}}
                      </v-icon>
                    </v-list-item-icon>
                     {{contact.description}}
                  </v-list-item>
                  
                <v-list-item style="left:70px">
                    <v-list-item-title class="description" >
                      <b>KEY SKILLS:</b>
                    </v-list-item-title>
                </v-list-item>
                
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon style="color:lightgreen;">
                      mdi-vuejs
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title style="color:lightgreen;">Vue / Vuex / Router / Vuetify</v-list-item-title> 
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="orange">
                      mdi-code-json
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title style="color:orange;">Axios / i18n / wrld.js</v-list-item-title> 
                  </v-list-item-content>
                </v-list-item>
              <v-list-item style="left:70px">
                    <v-list-item-title class="description" >
                      <b>MINOR SKILLS:</b>
                    </v-list-item-title>
              </v-list-item>
                <v-list-item v-for="skill in minorSkills" :key="skill.icon" >
                  <v-list-item-icon>
                    <v-icon>
                      {{skill.icon}}
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{skill.description}}</v-list-item-title> 
                  </v-list-item-content>
                </v-list-item>
               
                <v-list-item style="left:70px">
                    <v-list-item-title class="description" >
                      <b>SOFT SKILLS:</b>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item  v-for="skill in skills" :key="skill.id">
                  <v-list-item-icon>
                    <v-icon>
                      mdi-circle-small
                    </v-icon>
                  </v-list-item-icon>
                      <v-list-item-content>
                      <v-list-item-title class="skills">{{skill}};</v-list-item-title> 
                      </v-list-item-content>
                </v-list-item>
                
                </v-list>
              </v-card>
            </v-col>
            <v-col style="width:80%">
              <div>
                SERHII TARASOV
              </div>
              <div>
                Junior JS developer
              </div>
              <hr>
              <div>
                MY GOAL
              </div>
              <p>Junior JS Developer position with different and interesting
                tasks!
              </p>
              <div>
                PRACTICAL EXPERIENCE :
              </div>
            </v-col>
        </v-row>
        
    </v-app>
</template>

<script>
export default {
    name: "CV",
    data: () => ({
      contacts:[
        {icon:'mdi-map-marker', description:'Kharkiv, Ukraine'},
        {icon:'mdi-phone', description:'+38 (050) 700-5472'},
        {icon:'mdi-email', description:'zarka08@gmail.com'},
        {icon:'mdi-send', description:'@zarka08'},
        {icon:'mdi-linkedin', description:'сергей-тарасов-63ba90203/'}
      ],
      skills: [
        'emotional stability', 
        'creativity',
        'scrupulosity',
        'self-motivation'
      ],
      minorSkills:[
        {icon:'mdi-language-cpp', description:'C++'},
        {icon:'mdi-database-search', description: 'MSSQL Databases'}
      ]
    }),
}
</script>
<style scoped>
.description{
  color:#FFF;
}
.skills{
  /* color:#FFF; */
 
}
</style>