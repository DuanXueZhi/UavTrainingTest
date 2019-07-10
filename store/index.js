/*
* create on 2019/7/10.
* explain: 
* */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: ''
    },
    mutations: {
        login (state) {
            console.log('vuex中登录函数触发', state)
        },
        logout (state) {
            console.log('vuex中退出登录函数触发', state)
        }
    }
})