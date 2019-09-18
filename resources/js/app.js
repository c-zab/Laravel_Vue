/* eslint-disable no-unused-vars */

window.Vue = require('vue');
window.Event = new Vue();

Vue.component('app', require('./App.vue').default);

const app = new Vue({
  el: '#app',
});
