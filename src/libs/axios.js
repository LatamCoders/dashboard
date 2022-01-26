import Vue from 'vue'

// axios
import axios from 'axios'

const axiosIns = axios.create({
    baseURL: 'https://Amera-test.herokuapp.com/api/v1/'
})

axiosIns.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.prototype.$http = axiosIns

export default axiosIns
