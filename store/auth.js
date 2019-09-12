import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = () => ({
    authorized: ''
});
export const getters = {
    IS_AUTH: (state) => {
        return state.authorized;
    }
}
export const mutations = {
    SET_AUTH: (state, isAuth) => {
        state.authorized = isAuth
    }
}
export const actions = {
    SET_AUTH: (context, payload) => {
        context.commit('SET_AUTH', payload)
    },
    nuxtServerInit ({ commit }, { req }) {
        
    }
}