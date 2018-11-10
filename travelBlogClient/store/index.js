import mutations from './mutations.js'
import state from './state.js'
import actions from './actions.js'
import getters from './getters.js'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store