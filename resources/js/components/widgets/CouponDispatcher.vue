<template>
  <div>
    <input
      v-model="value"
      class="input"
      :class="valueEntered ? 'is-primary' : 'is-danger'"
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
			value: ''
		}
	},
	computed:{
		valueEntered: (vm) => vm.value.length > 0
	},
	methods: {
		onCouponApplied() {
			Event.$emit('coupon-applied', this.value);
		}
	}
}
</script>
