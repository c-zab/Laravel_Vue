import Vue from 'vue'

Vue.component('list-name-project', require('./components/form/ListNameProject.vue').default);


new Vue({
	el: '#form',
	data() {
		return {
			name: 'Here is my name',
			description: 'Here my description'
		}
	},
	methods: {
		onSubmit(){
			alert('submitting')
		}
	}
})
