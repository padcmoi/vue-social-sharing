import './assets/vendor/fontawesome-free-5.14.0-web/css/all.css';

import Vue from 'vue';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
