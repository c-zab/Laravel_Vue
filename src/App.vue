<template>
  <div id="app">
    <tabs-component />
    <modal-component />
    <message-component />
    <components-within />
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
import ComponentsWithin from './components/ComponentsWithinComponents.vue'
import MessageComponent from './components/MessageComponent.vue'
import ModalComponent from './components/ModalComponent.vue'
import TabsComponent from './components/TabsComponent.vue'

export default {
	name: 'App',
	components: {
		EventListener,
		AttributeClassBinding,
		ComputedProperties,
		Components,
		ComponentsWithin,
		MessageComponent,
		ModalComponent,
		TabsComponent
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
