import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '../public/style/main.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


Vue.config.productionTip = false;

Vue.use(VueSweetalert2)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
