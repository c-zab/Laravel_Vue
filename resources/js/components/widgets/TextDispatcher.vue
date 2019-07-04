<template>
  <div>
    <span
      v-if="!wasApplied"
      class="tag is-danger"
    >No Coupon!</span>
    <span
      v-if="wasApplied"
      class="tag is-success"
    >Coupon Applied!</span>
  </div>
</template>

<script>
export default {
	data(){
		return {
			wasApplied: false
		}
	},
	created() {
		Event.$on('coupon-applied', () => this.wasApplied = true);
	},
}
</script>
