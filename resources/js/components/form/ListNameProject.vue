<template>
  <div class="list is-hoverable">
    <a
      v-for="(name, index) in projects"
      :key="index"
      class="list-item"
    >
      {{ name }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'FormOne',
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>
