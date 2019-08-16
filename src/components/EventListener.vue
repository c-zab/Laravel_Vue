<template>
  <div>
    <h1>E4 Event Listener</h1>
    <input
      v-model="newName"
      type="text"
    >
    <button @click="AddName">
      Add name
    </button>
    <ul>
      <li
        v-for="(name, index) in names"
        :key="index"
        v-text="name"
      />
    </ul>
    <div id="break">
      Break
    </div>
  </div>
</template>

<script>
export default {
	name: 'EventListener',
	data(){
		return {
			newName: '',
			names: ['Carlos', 'Joe', 'Thiago', 'Martin']
		}
	},
	methods:{
		AddName(){
			if(this.newName !== '') this.names.push(this.newName);
			this.newName = ""
		}
	}

}
</script>
