import Vue from 'vue';
import './style.css'
import App from './App';
import router from './router';
import store from './store';
import 'mdb-vue-ui-kit/css/mdb.min.css'

Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App },
});

