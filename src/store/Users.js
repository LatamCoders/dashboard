import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
import axios from "axios";

const ls = new SecureLS({encodingType: 'rc4', isCompression: false, encryptionSecret: 's3cr3tPa$$w0rd@123'});

export const Users = {
    namespaced: true,
    state: {
        token: null,
        user: {},
    },
    getters: {
        loggedIn(state) {
            return state.token !== null
        },
        userData(state) {
            return state.user
        },
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
            let url = '';
            url = payload.loginType === 'admin' ? 'auth/admin/login' : 'auth/ca/login';

            return new Promise((resolve, reject) => {
                axios.post(url, {
                        email: payload.userEmail,
                        password: payload.password
                    }
                )
                    .then(response => {
                        // console.log(response)
                        // console.log(resolve)
                        const token = response.data.data.access_token;
                        // console.log(token)
                        context.commit('retrieveToken', token);
                        context.commit('userData', response.data.data);
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        destroyToken(context, payload) {
            if (context.getters.loggedIn) {
                let url = '';
                url = payload.loginType === 'admin' ? 'auth/admin/login' : 'auth/ca/login';

                return new Promise((resolve, reject) => {
                    axios.post(url, '', {
                        headers: {Authorization: "Bearer " + context.state.token}
                    })
                        .then(response => {
                            context.commit('destroyToken');
                            context.commit('destroyUser');

                            localStorage.removeItem('us_ri_td');

                            resolve(response)
                        })
                        .catch(error => {
                            context.commit('destroyUser');
                            localStorage.removeItem('us_ri_td');

                            reject(error)
                        })
                })
            }
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