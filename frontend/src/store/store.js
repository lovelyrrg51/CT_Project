import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState({
        key: 'vuex',              
        reducer (val) {                                
          if(val.loginFlag === false) {
            return {}
          }
          return val
        }
    })],

    state: {
        loginFlag: false,
        windowWidth: 0,

        user: {
            id: '',
            email: '',
            name: '',
            password: '',
            receive_notifications: 0,
            receive_monthly_reports: 0
        },

        mainData: [],
        isConnected: false,
        socketMessage: ''
    },

    mutations: {
        setLoginFlag (state, login) {
            state.loginFlag = login;
        },

        setWindowWidth (state, width) {
            state.windowWidth = width;
        },

        setMainData (state, mainData) {
            state.mainData = mainData;
        },

        setSocketMessage(state, message) {
          state.socketMessage = message;
          state.mainData = [...state.mainData, message];
        }
    },
    
    actions: {
        setLoginFlag ({ commit }, login) {
            commit('setLoginFlag', login);
        },

        setWindowWidth ({ commit }, width) {
            commit('setWindowWidth', width);
        },

        setMainData ({ commit }, mainData) {
            commit('setMainData', mainData);
        },

        setSocketMessage ({ commit }, socketMessage) {
            commit('setSocketMessage', socketMessage);
        }
    },
    
    getters: {
        getLoginFlag (state) {
            return state.loginFlag;
        },

        getWindowWidth (state) {
            return state.windowWidth;
        },

        getMainData (state) {
            return state.mainData;
        },

        setSocketMessage (state) {
            return state.socketMessage;
        }
    }
})