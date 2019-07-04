<template>
  <div class="section">
    <div class="container">
      <h1 class="title">
        E4 Event Listener
      </h1>

      <div class="columns">
        <div class="column is-one-fifth">
          <input
            v-model="newName"
            class="input"
            type="text"
          >
        </div>
        <div class="column">
          <button
            class="button"
            @click="AddName"
          >
            Add name
          </button>
        </div>
      </div>
      <div class="content">
        <ol type="1">
          <li
            v-for="name in names"
            :key="name"
            v-text="name"
          />
        </ol>
      </div>
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
			if (this.newName !== "") {
				this.names.push(this.newName);
				this.newName = ""
			}
		}
	}

}
</script>
