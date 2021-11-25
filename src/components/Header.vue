<template>
    <div>
    <ul type="none">
        <li class="changeLang" v-for="locale in locales" :key="locale" @click="changeLang(locale)" > 
            {{$t("AppVue.Language")}}: {{locale}}
        </li>
    </ul>
    
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
    .changeLang{
        border:1px solid;
        color:blue;
        width:100px;
        margin:5px;
        text-decoration: none;
        color: #459CE7;
        cursor: pointer;
    }
</style>