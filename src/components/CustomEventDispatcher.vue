/* eslint-disable vue/html-quotes */
<template>
  <div class="section">
    <div class="container">
      <h1 class="title">
        E13 Component Communication Example #2: Event Dispatcher
      </h1>
      <div class="columns is-mobile">
        <div class="column is-one-third">
          <coupon-dispatcher
            :placeholder="placeholder"
          />
        </div>
        <div class="column">
          <text-dispatcher />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CouponDispatcher from "./widgets/CouponDispatcher";
import TextDispatcher from "./widgets/TextDispatcher";

export default {
	components: {
		CouponDispatcher,
		TextDispatcher
	},
	data(){
		return {
			placeholder:"Enter Coupon",
		}
	}
}
</script>
