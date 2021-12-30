<template>
    <div style="margin: 0 0 0 10px" class="text-center">
        <v-menu offset-y transition="scale-transition" >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="green"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    style="font-size: 10px; width: 20px; height: 20px;"
                >
                    {{$t("AppVue.Language")}}
                </v-btn>
            </template>
        <v-list>
            <v-list-item
                v-for="locale in locales" :key="locale" @click="changeLang(locale)">
            <v-list-item-title>{{$t("AppVue.Language")}}: {{locale}}</v-list-item-title>
            </v-list-item>
        </v-list>
        </v-menu>

    </div>      
</template>

<script>

export default({
    name:'Header',
    methods:{
        changeLang(locale){
            if(this.$i18n.locale!== locale){
                this.$i18n.locale = locale;
            }
        }
    },
    data(){
        return {
            locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
        }
    },
    
    
})
</script>
<style scoped>
    ::v-deep v-btn{
        font-size: 10px;
    }
</style>