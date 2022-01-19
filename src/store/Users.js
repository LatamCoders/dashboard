
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
import axios from "axios";

const ls = new SecureLS({encodingType: 'rc4', isCompression: false, encryptionSecret: 's3cr3tPa$$w0rd@123'});

export const Users = {
    namespaced: true,
    state: {
        token: null,
        user: {}
    },
    getters: {
        loggedIn(state) {
            return state.token !== null
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
    actions: {
        retrieveToken(context, payload) {
            return new Promise((resolve, reject) => {
                axios.post('auth/ca/login', {
                          email: payload.userEmail,
                          password: payload.password
                        }, {
                          headers: {
                            'X-Requested-With': 'XMLHttpRequest',
                          }
                        }
                    )
                    .then(response => {
                        // console.log(response)
                        // console.log(resolve)
                        const token = response.data.data.access_token;
                        // console.log(token)
                        context.commit('retrieveToken', token);
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        userData(context) {
            let auth = 'Bearer' + context.state.token
            axios.get('ca/1/profile', {'headers': {'X-Requested-With': 'XMLHttpRequest','Authorization': auth}})
                .then((response) => {
                    let data = response.data.data;
                    // console.log(data)
                    context.commit('userData', data)
                })
                .catch((error) => {
                    console.log(error.response)
                });

        },
    },

    destroyToken(context) {
        if (context.getters.loggedIn) {

            return new Promise((resolve, reject) => {
                axios.post('auth/ca/logout', '', {
                    headers: {Authorization: "Bearer" + context.state.token}
                })
                    .then(response => {
                        context.commit('destroyToken');
                        context.commit('destroyUser');

                        resolve(response)
                    })
                    .catch(error => {
                        context.commit('destroyUser');

                        reject(error)
                    })
            })
        }
    }
}
export const userState = createPersistedState({
    key: 'us_ri_td',
    storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
    },
    paths: ['Users']
})