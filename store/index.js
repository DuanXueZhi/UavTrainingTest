/*
* create on 2019/7/10.
* explain: 
* */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userInformation: {}
    },
    getters: { // 监听state变化
        userInformation (state) {
            return state.userInformation
        }
    },
    mutations: {
        updateUserInformation (state, userInfo) {
            state.userInformation = userInfo
        }
    },
    actions: {
        actionsUpdateUserInfo (context, userInfo) {
            context.commit('updateUserInformation', userInfo)
        }
    }
})

export default store