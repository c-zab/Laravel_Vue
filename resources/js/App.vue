<template>
  <div id="app">
    <ajax-axios />
    <hot-module-replacement />
    <webpack-vue />
    <inline-template />
    <named-slots />
    <custom-event-dispatcher />
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
import EventListener from './components/EventListener.vue';
import AttributeClassBinding from './components/AttributeClassBinding.vue';
import ComputedProperties from './components/ComputedProperties.vue';
import Components from './components/Components.vue';
import ComponentsWithin from './components/ComponentsWithinComponents.vue';
import MessageComponent from './components/MessageComponent.vue';
import ModalComponent from './components/ModalComponent.vue';
import TabsComponent from './components/TabsComponent.vue';
import CustomEventComponent from './components/CustomEventComponent.vue';
import NamedSlots from './components/NamedSlots.vue';
import InlineTemplate from './components/InlineTemplate.vue';
import WebpackVue from './components/WebpackVue.vue';
import HotModuleReplacement from './components/HotModuleReplacement.vue';
import AjaxAxios from './components/AjaxRequestWithAxios.vue';

// For event dispatcher
import Vue from 'vue';
window.Event = new Vue();
import CustomEventDispatcher from './components/CustomEventDispatcher.vue';

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
    CustomEventComponent,
    CustomEventDispatcher,
    NamedSlots,
    InlineTemplate,
    WebpackVue,
    HotModuleReplacement,
    AjaxAxios,
  },
  data() {
    return {
      tasks:[
        { description: "go to the mall", completed: true },
        { description: "go to movies", completed: true },
        { description: "go to do groceries", completed: false },
        { description: "go to do laundry", completed: true },
        { description: "go to do gardering", completed: false },
        { description: "go to water the plants", completed: true },
      ],

    };
  },
};

</script>
