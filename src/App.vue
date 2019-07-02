<template>
  <div id="app">
    <ComputedProperties :tasks="tasks" />
    <AttributeClassBinding />
    <EventListener />
  </div>
</template>

<script>
import EventListener from './components/EventListener.vue'
import AttributeClassBinding from './components/AttributeClassBinding.vue'
import ComputedProperties from './components/ComputedProperties.vue'

export default {
	name: 'App',
	components: {
		EventListener,
		AttributeClassBinding,
		ComputedProperties
	},
	data() {
		return {

			tasks:[
				{id: 1, description: "go to the mall", completed: true},
				{id: 2, description: "go to movies", completed: true},
				{id: 3, description: "go to do groceries", completed: false},
				{id: 4, description: "go to do laundry", completed: true},
				{id: 5, description: "go to do gardering", completed: false},
				{id: 6, description: "go to water the plants", completed: true}
			],

		};
	}
}

</script>

<style>
#break {
   width: 100%;
   margin: 0;
   padding: 0;
   background-color:#000;
   top: 0;
   left: 0;
}
</style>
