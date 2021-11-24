const state = {
    loading: false,
}
const actions = {
    showLoader({commit}) {
        commit('SHOW_LOADER', true)
    },
    hideLoader({commit}) {
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

export default{
    namespaced: true,
    state,
    mutations,
    actions,
   
}