import Vue from 'vue'
import Vuex from 'vuex'
import vuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexLocalStorage = new vuexPersist({
    key: 'vuex',
    storage: window.localStorage
})

const store = new Vuex.Store({
    plugins: [vuexLocalStorage.plugin],
    state: {
        token: '',
        choiceResult: '',
        distance: '',
        rate: '',
        email: ''
    },
    mutations:{
        login (state, token) {
            state.token = token
        },
        choiceResult (state, choiceResult) {
            state.choiceResult = choiceResult
        },
        distance (state, distance) {
            state.distance = distance
        },
        rate (state, rate) {
            state.rate = rate
        }

    },
    getters: {
        token: state => state.token,
        choiceResult: state => state.choiceResult,
        distance: state => state.distance,
        rate: state => state.rate
    }
})

export default store