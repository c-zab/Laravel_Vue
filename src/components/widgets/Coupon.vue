<template>
  <div class="columns">
    <div class="column is-one-fifth">
      <input
        class="input is-one-fifth"
        placeholder="Enter coupon"
        type="text"
        @blur="onCouponApplied"
      >
    </div>
  </div>
</template>

<script>
export default {
	methods: {
		onCouponApplied(){
			this.$emit('coupon-applied');
		}
	}
}
</script>
