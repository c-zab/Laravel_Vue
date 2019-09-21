import Vue from 'vue';
import axios from 'axios';

Vue.component('list-name-project', require('./components/form/ListNameProject.vue').default);

class Errors {
  constructor() {
    this.errors = {};
  }

  get(field) {
    if (this.errors[field]) {
      return this.errors[field][0];
    }
  }

  record(errors) {
    this.errors = errors;
  }

  clear(field) {
    delete this.errors[field];
  }

  has(field) {
    return this.errors.hasOwnProperty(field);
  }

  any() {
    return Object.keys(this.errors).length > 0;
  }
}

new Vue({
  el: '#form',
  data() {
    return {
      projects: [],
      name: '',
      description: '',
      errors: new Errors,
    };
  },
  created() {
    axios.get('/project-list')
      .then(res => {
        this.projects = res.data;
      });
  },
  methods: {
    onSubmit() {
      axios.post('/formE19', this.$data)
        .then(this.onSuccess)
        .catch(err => {
          this.errors.record(err.response.data.errors);
        });
    },
    onSuccess(res) {
      alert(res.data.message);
      this.name = '';
      this.description = '';
    },
  },
});
