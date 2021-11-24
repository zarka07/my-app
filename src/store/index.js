import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import loader from './modules/loader'
export default new Vuex.Store({
    modules:{
        loader: loader
    },
    state:{
        loading: Boolean,
    },
    
})
