<template>
  <article
    v-if="isVisible"
    class="message"
  >
    <div class="message-header">
      <p>{{ title }}</p>
      <button
        class="delete"
        aria-label="delete"
        @click="CloseMessage"
      />
    </div>
    <div class="message-body">
      {{ body }}
    </div>
  </article>
</template>

<script>
export default {
	props: {
		title:{
			type: String,
			required: true
		},
		body: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			isVisible: true
		}
	},
	methods:{
		CloseMessage(){
			this.isVisible = false
		}
	}
}
</script>

<style>

</style>
