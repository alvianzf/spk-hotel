import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: '',
        choiceResult: '',
        email: ''
    },
    mutations:{
        login (state, token) {
            state.token = token
        },
        choiceResult (state, choiceResult) {
            state.choiceResult = choiceResult
        }
    },
    getters: {
        token: state => state.token,
        choiceResult: state => state.choiceResult
    }
})

export default store