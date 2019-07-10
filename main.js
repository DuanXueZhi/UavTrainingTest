import Vue from 'vue'
import App from './App'
import store from './store'
import jsFn from './assets/js/mainJs'
import jsEncrypt from 'jsencrypt'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$jsFn = jsFn
Vue.prototype.$jsEncrypt = jsEncrypt

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
