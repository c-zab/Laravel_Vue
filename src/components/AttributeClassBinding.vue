<template>
  <div>
    <h1>E5 Attribute and Class Binding</h1>
    <button :title="title">
      Hover over me!
    </button>
    <button
      :class="{'is-loading': isLoading}"
      @click="ToggleClass"
    >
      Toggle me!
    </button>
    <button
      :disabled="disabled"
      @click="DisabledClass"
    >
      Disabled me!
    </button>
    <button id="break">
      break
    </button>
  </div>
</template>

<script>
export default {
	name: "AttributeClassBinding",
	data: function() {
		return {
			title: "I am a title",
			isLoading: false,
			disabled: false
		}
	},
	methods: {
		ToggleClass(){
			this.isLoading = ! this.isLoading;
		},
		DisabledClass(){
			this.disabled = true
		}
	}
}
</script>

<style>
.is-loading {
	background: teal;
}
</style>
