import Axios from 'axios';
import Vue from 'vue';

const http = (params) => {
  return new Promise((resolve, reject) => {
    Axios({
      ...params,
      baseURL: Vue.prototype.$baseUrl,
    }).then(res => {
      resolve(res.data.data)
    }).catch(err => {
      reject(err);
    });
  })
}

export default http;
