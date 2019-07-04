<template>
  <div class="section">
    <div class="container">
      <h1 class="title">
        E5 Attribute and Class Binding
      </h1>
      <button
        class="button"
        :title="title"
      >
        Hover over me!
      </button>
      <button
        class="button"
        :class="{'is-success': isLoading}"
        @click="ToggleClass"
      >
        Toggle me!
      </button>
      <button
        class="button"
        :disabled="disabled"
        @click="DisabledClass"
      >
        Disabled me!
      </button>
    </div>
  </div>
</template>

<script>
export default {
	name: "AttributeClassBinding",
	data() {
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
