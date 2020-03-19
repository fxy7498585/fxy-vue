import Axios from 'axios'
import Vue from 'vue'
import http from '../../axios/axios';
const MarkDownMOdule= {
  state: {
    a: 1,
    markDownList:[{
      id: '',
      name: '',
      category: '',
      editorValue: '',
    }]
  },
  mutations: {
    getMarkDownList(state, payload) {
      state.markDownList = [...payload.data];
    },
    deleteArticle(state, id) {
      state.markDownList = state.markDownList.filter(item => item.id !== id);
    }
  },
  actions: {
    addMarkDownArticle(context, params) {
      return new Promise((resolve, reject) => {
        Axios({
          method: 'POST',
          url: Vue.prototype.$baseUrl + '/api/add/markdown',
          data: {...params}
        }).then(res => {

          resolve(res && res.data)
        }).catch(err => {
          reject(err)
        });
      })
    },
    updateArticle(context, params) {
     return new Promise((resolve, reject) => {
      Axios({
        method: 'POSt',
        url: Vue.prototype.$baseUrl + '/api/update/markdownlist',
        data: {...params.payload}
      }).then(res => {
        resolve(res && res.data)
      }).catch(err => {
        reject(err);
      });
     });
    },
    deleteArticle({commit}, params) {
      return new Promise((resolve, reject) => {
        Axios({
          method: 'POSt',
          url: Vue.prototype.$baseUrl + '/api/delete/markdownlist',
          data: {...params.payload}
        }).then(res => {
          commit('deleteArticle', params.payload.id)
          resolve(res && res.data)
        }).catch(err => {
          reject(err);
        });
      });
    },
    getMarkDownList({commit}) {
      return http({
        method: 'GET',
        url: '/api/get/markdownlist',
      }).then(res => {
        commit('getMarkDownList', {
          type: 'getMarkDownList',
          data: res
        })
        return res;
      });
     
    }
  },
  modules: {
  }
}


export default MarkDownMOdule;