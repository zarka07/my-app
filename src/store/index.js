import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import loader from './modules/loader.store'
import error from './modules/error.store'
export default new Vuex.Store({
    modules:{
        loader, error
    },
    
    
})
