export const Users = {
    namespaced: true,
    state: {
        token: null,
        user: {}
    },
    getters: {
        loggedIn(state) {
            return state.token != null
        },
        userData(state) {
            return state.user
        }
    },
    mutations: {
        retrieveToken(state, token) {
            state.token = token
        },
        userData(state, data) {
            state.user = data
        },
        destroyToken(state) {
            state.token = null
        },
        destroyUser(state) {
            state.user = {}
        }
    },
    actions: {}
}