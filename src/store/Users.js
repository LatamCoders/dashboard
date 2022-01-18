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
        actions: {
            retrieveToken(context, credentials) {
                return new Promise((resolve, reject) => {
                    this._vm.$axios.post('login', {
                        username: credentials.username,
                        password: credentials.password
                    })
                        .then(response => {
                            const token = response.data.access_token;
                            context.commit('retrieveToken', token);
                            resolve(response)
                        })
                        .catch(error => {
                            reject(error)
                        })
                })
            },
        },
        userData(context) {
            let auth = 'Bearer ' + context.state.token
            this._vm.$axios.post('user', {'headers': {'Authorization': auth}})
                .then((response) => {
                    let data = response.data;
                    context.commit('userData', data)
                })
                .catch((error) => {
                    console.log(error.response)
                });

        },
        destroyToken(context) {
            if (context.getters.loggedIn) {

                return new Promise((resolve, reject) => {
                    this._vm.$axios.post('logout', '', {
                        headers: {Authorization: "Bearer " + context.state.token}
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