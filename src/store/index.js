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
    actions:{
        showLoader({commit}) {
            commit('SHOW_LOADER', true)
        },
        hideLoader({commit}) {
            commit('HIDE_LOADER', false)
          },
    },
    mutations:{
        SHOW_LOADER(state, newLoadingStatus) {
            state.loading = newLoadingStatus;
          },
        HIDE_LOADER(state, newLoadingStatus) {
            state.loading = newLoadingStatus;
          },
    }
})
