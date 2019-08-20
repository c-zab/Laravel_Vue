<template>
  <div class="columns">
    <div class="column is-one-fifth">
      <input
        v-model="value"
        class="input is-one-fifth"
        placeholder="Enter coupon"
        type="text"
        @blur="onCouponApplied(value)"
      >
    </div>
  </div>
</template>

<script>
export default {
	data(){
		return {
			value: ''
		}
	},
	methods: {
		onCouponApplied(value){
			this.$emit('coupon-applied', value)
		}
	}
}
</script>
