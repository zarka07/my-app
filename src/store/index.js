import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import loader from './modules/loader.store'
import error from './modules/error.store'
import modal from './modules/modal.store'
export default new Vuex.Store({
    modules:{
        loader, error, modal
    },
    
    
})
