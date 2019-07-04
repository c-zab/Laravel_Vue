
window.Vue = require('vue');

Vue.component('app-vue', require('./App.vue').default);

const app = new Vue({
	el: '#app',
});
