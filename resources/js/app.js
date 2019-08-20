/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

window.Vue = require('vue');
window.Event = new Vue();

const axios = require('axios');

Vue.component('app-vue', require('./App.vue').default);

const app = new Vue({
	el: '#app'
});
