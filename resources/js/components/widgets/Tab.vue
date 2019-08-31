<template>
  <div
    v-if="isActive"
    class="container"
  >
    <slot name="title" />
    <slot name="subtitle">
      <h2 class="subtitle">
        Default subtitle
      </h2>
    </slot>
  </div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true
		},
		selected: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			isActive: false
		}
	},
	computed:{
		href() {
			return '#'+this.title.toLowerCase().replace(/ /g,'-');
		}
	},
	mounted(){
		this.isActive = this.selected;
	},
}
</script>
