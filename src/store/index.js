import Vue from 'vue'
import Vuex from 'vuex'
import  MarkDownMOdule  from './markdown/markdownModule';
import DemoListModule from '../views/demo-list/demo-list.store';

Vue.use(Vuex)

export default new Vuex.Store({
 modules: {
  MarkDownMOdule,
  DemoListModule
 }
})
