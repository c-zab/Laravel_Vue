<template>
  <div
    class="modal"
    :class="{'is-active' : isVisible}"
  >
    <div class="modal-background" />
    <div class="modal-content">
      <div class="box">
        <slot />
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="$emit('close')"
    />
  </div>
</template>

<script>
export default {
	props:{
		// eslint-disable-next-line vue/prop-name-casing
		"is-visible":{
			type: Boolean,
			require: true
		},
	},

}
</script>

<style>

</style>
