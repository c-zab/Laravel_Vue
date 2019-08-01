<template>
  <div class="hello">
		<h2>All names</h2>
    <ul>
      <li
        v-for="(name, index) in names"
        :key="index" v-text="name"
      >
      </li>
    </ul>
		<input type="text" placeholder="Enter name" v-model="input">
		<button type="button" @click="addName">Add name</button>
  </div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data() {
		return {
			names:["Carlos", "Jhon", "Saki"],
			input: ''
		}
	},
	methods: {
		addName(){
			this.names.push(this.input);
			this.input = ''
		}
	}
}
</script>
