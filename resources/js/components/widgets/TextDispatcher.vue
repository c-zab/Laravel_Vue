<template>
  <div>
    <span
      v-if="wasApplied"
      class="tag is-success"
    >Coupon Applied!&nbsp;<strong>{{ coupon }}</strong></span>
    <span
      v-else
      class="tag is-danger"
    >No Coupon!</span>
  </div>
</template>

<script>
export default {
	data(){
		return {
			wasApplied: false,
			coupon: ''
		}
	},
	created() {
		Event.$on('coupon-applied', (value) => {
			this.wasApplied = value.length > 0
			this.coupon = value
		});
	},
}
</script>
