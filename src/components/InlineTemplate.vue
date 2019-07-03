<template>
  <div class="section">
    <div class="container">
      <h1 class="title">
        E15 Single-Use Components and Inline Templates
      </h1>
      <progress-view inline-template>
        <div>
          <h4 class="title is-5">
            Your progress through this course {{ completionRate }}%
          </h4>
          <button
            class="button is-info"
            @click="completionRate += 10"
          >
            Update Completion Rate
          </button>
        </div>
      </progress-view>
    </div>
  </div>
</template>

<script>
import ProgressView from "./widgets/ProgressView";

export default {
	components: {
		ProgressView
	}
}
</script>
