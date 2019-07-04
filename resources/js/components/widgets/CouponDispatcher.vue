<template>
  <div>
    <input
      class="input is-primary"
      :placeholder="placeholder"
      type="text"
      @blur="onCouponApplied"
    >
  </div>
</template>
<script>
export default {
	props: {
		placeholder: {
			type: String,
			default: "Disable input"
		}
	},
	data(){
		return {
		}
	},
	methods: {
		onCouponApplied() {
			Event.$emit('coupon-applied');
		}
	}
}
</script>
