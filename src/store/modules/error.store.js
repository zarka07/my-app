
const state = {
    isError: false,
    statusCode: null,
}
// const getters = {
//     GET_ERR_CODE(state) {
//         return state.statusCode;
//       },
//     }
const actions = {
    showError({commit},statusCode) {
        commit("SHOW_ERR_CODE", statusCode)
    },
}
const mutations = {
    SHOW_ERR_CODE(state, statusCode) {
        state.statusCode = statusCode;
        state.isError = true;
      },
}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
    
}