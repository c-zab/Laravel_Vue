<template>
  <div class="list is-hoverable">
    <a
      v-for="(name, index) in names"
      :key="index"
      class="list-item"
    >
      {{ name }}
    </a>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FormOne',

  created() {
    axios.get('/project-list')
      .then(res => {
        this.names = res.data;
      });
  },

  data() {
    return {
      names: [],
    };
  },
};
</script>
