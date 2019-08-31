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
export default {
	name: 'FormOne',
	data() {
		return {
			names: ['Karla', 'Carlos', 'Richard']
		}
	}
}
</script>
