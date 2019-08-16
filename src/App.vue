<template>
  <div id="app">
    <components />
    <computed-properties :tasks="tasks" />
    <attribute-class-binding />
    <event-listener />
  </div>
</template>

<script>
import EventListener from './components/EventListener.vue'
import AttributeClassBinding from './components/AttributeClassBinding.vue'
import ComputedProperties from './components/ComputedProperties.vue'
import Components from './components/Components.vue'

export default {
	name: 'App',
	components: {
		EventListener,
		AttributeClassBinding,
		ComputedProperties,
		Components
	},
	data() {
		return {
			tasks:[
				{description: "go to the mall", completed: true},
				{description: "go to movies", completed: true},
				{description: "go to do groceries", completed: false},
				{description: "go to do laundry", completed: true},
				{description: "go to do gardering", completed: false},
				{description: "go to water the plants", completed: true}
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
