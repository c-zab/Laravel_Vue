/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

window.Vue = require('vue');
window.Event = new Vue();

const axios = require('axios');

Vue.component('app-vue', require('./App.vue').default);

const app = new Vue({
	el: '#app',
	data(){
		return {
			name:'',
			description: '',
			errors: {}
		}
	},
	methods: {
		onSubmit(){
			axios.post('/formE19', {
				name: this.name,
				description: this.description})

				.then(this.onSuccess)

				.catch(error => {
					this.errors = error.response.data.errors,
					this.num = Object.keys(error.response.data.errors).length
				});
		},
		getErrors(field) {
			return `${field}`
		},
		clearInput(field) {
			delete this.errors[field];
		},
		onSuccess(response){
			alert(response.data.message),
			this.name = '',
			this.description = ''
		}
	}
});
