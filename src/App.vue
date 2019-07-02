<template>
  <div id="app">
    <EventListener :tasks="tasks" />
  </div>
</template>

<script>
import EventListener from './components/EventListener.vue'

export default {
	name: 'App',
	components: {
		EventListener
	},
	data: function() {
		return {
			tasks:[
				{id: 1, description: "go to the mall", completed: true},
				{id: 2, description: "go to movies", completed: true},
				{id: 3, description: "go to do groceries", completed: false},
				{id: 4, description: "go to do laundry", completed: true},
				{id: 5, description: "go to do gardering", completed: false},
				{id: 6, description: "go to water the plants", completed: true}
			]
		};
	}
}

</script>

<style>

</style>
