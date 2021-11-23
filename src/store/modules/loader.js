const state = {
    loading: false,
}
const actions = {
    SHOW_LOADER({commit}) {
        commit('SHOW_LOADER', true)
    },
    HIDE_LOADER({commit}) {
        commit('HIDE_LOADER', false)
      },
}
const mutations = {
    SHOW_LOADER(state, newLoadingStatus) {
        state.loading = newLoadingStatus;
      },
    HIDE_LOADER(state, newLoadingStatus) {
        state.loading = newLoadingStatus;
      },
}
const getters = {
    GET_LOADER(state){
        return state.GET_LOADER
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}