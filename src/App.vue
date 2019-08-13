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
				{description: "go to the mall", completed: true},
				{description: "go to movies", completed: true},
				{description: "go to do groceries", completed: false},
				{description: "go to do laundry", completed: true},
				{description: "go to do gardering", completed: false},
				{description: "go to water the plants", completed: true}
			]
		};
	}
}

</script>

<style>

</style>
