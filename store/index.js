import Vue from 'vue';
import Vuex from 'vuex';
const cookieparser = process.server ? require('cookieparser') : undefined
Vue.use(Vuex);
// require('whatwg-fetch');


export const state = () => ({
    tasks:[
        {'id': 1, 'name': 'Gurpreet Singh', 'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
        {'id': 2, 'name': 'Amberish Raj', 'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.'},
        {'id': 3, 'name': 'Amit kumar', 'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, exercitationem praesentium nihil.'}
    ]
})

export const getters = {
    // Getting all task
    TASKS : state => {
        return state.tasks;
    },

    // Get task by Id
    getTaskById: (state) => (id) => {
        let itemId = id;
        return state.tasks.filter(task => task.id == itemId)[0];
    }
}

export const mutations = {

    // Set task to the state
    SET_TASK: (state, task) => {
        state.tasks.push(task)
    },

    // Set task to the state
    DELETE_TASK: (state, id) => {

        for(var i = 0; i < state.tasks.length; i++) {
            if(state.tasks[i].id == id) {
                state.tasks.splice(i, 1);
                break;
            }
        }
    }

}
export const actions = { 
    // Set task to the state
    SET_TASK : (context,payload) => {
        context.commit("SET_TASK",payload);
    },
    // Delete task from state
    DELETE_TASK : (context,payload) => {
        context.commit("DELETE_TASK",payload);
    },
    nuxtServerInit ({ commit }, { req }) {
        let auth = '';
        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                auth = parsed.auth
            } catch (err) {
                // No valid cookie found
            }
        }
        commit('auth/SET_AUTH', auth)
    }

}