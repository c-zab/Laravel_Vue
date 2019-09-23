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
    if (field) {
      delete this.errors[field];
      return;
    }
    this.errors = {};
  }

  has(field) {
    return this.errors.hasOwnProperty(field);
  }

  any() {
    return Object.keys(this.errors).length > 0;
  }
}

class Form {
  constructor(data) {
    this.originalData = data;

    for (let field in data) {
      this[field] = data[field];
    }

    this.errors = new Errors;
  }

  reset() {
    for (let field in this.originalData) {
      (field !== 'isLoading') ? this[field] = '' : this.isLoading = false;
    }
  }

  data() {
    let data = Object.assign({}, this);
    delete data.originalData;
    delete data.errors;
    return data;
  }

  submit(requestType, url) {
    axios[requestType](url, this.data())
      .then(this.onSuccess.bind(this))
      .catch(this.onFail.bind(this));
  }

  onSuccess(res) {
    alert(res.data.message);
    this.errors.clear();
    this.reset();
  }

  onFail(err) {
    this.isLoading = false;
    this.errors.record(err.response.data.errors);
  }
}

new Vue({
  el: '#form',
  data() {
    return {
      projects: [],
      form: new Form({
        name: '',
        description: '',
        isLoading: false,
      }),
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
      this.form.isLoading = true;
      this.form.submit('post', '/formE19');
    },
  },
});
