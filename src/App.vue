<template>
  <div id="app">
    <custom-event-component />
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
import CustomEventComponent from './components/CustomEventComponent.vue'

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
		TabsComponent,
		CustomEventComponent
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
