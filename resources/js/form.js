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
    this.errors.clear();
  }

  data() {
    let data = {};

    for (let property in this.originalData) {
      data[property] = this[property];
    }

    return data;
  }

  post(url) {
    return this.submit('post', url);
  }

  submit(requestType, url) {
    return new Promise((resolve, reject) => {
      axios[requestType](url, this.data())
        .then(res => {
          this.onSuccess(res.data);
          resolve(res.data);
        })
        .catch(err => {
          this.onFail(err.response.data.errors);
          reject(err.response.data.errors);
        });
    });
  }

  onSuccess(data) {
    alert(data.message);
    this.reset();
  }

  onFail(errors) {
    this.isLoading = false;
    this.errors.record(errors);
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
    this.getListProjects();
  },
  beforeUpdate() {
    this.getListProjects();
  },
  methods: {
    onSubmit() {
      this.form.isLoading = true;
      this.form.post('/formE19')
        .then(data => console.log(data))
        .catch(error => console.log(error));
    },
    getListProjects() {
      axios.get('/project-list')
        .then(res => {
          this.projects = res.data;
        });
    },
  },
});
