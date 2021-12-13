const state = {
    show: false,
}
const actions = {
    showModal({commit}) {
        commit('SHOW_MODAL', true)
    },
    hideModal({commit}) {
        commit('HIDE_MODAL', false)
      },
}
const mutations = {
    SHOW_MODAL(state, newModalStatus) {
        state.show = newModalStatus;
      },
    HIDE_MODAL(state, newModalStatus) {
        state.show = newModalStatus;
      },
}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
   
}