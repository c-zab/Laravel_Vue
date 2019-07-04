<template>
  <div class="section">
    <div class="container">
      <h1 class="title">
        E17 Hot Module Replacement
      </h1>
      <h1 class="title is-5">
        The count is: {{ count }}
      </h1>
      <button
        class="button is-dark"
        @click=" count += 1"
      >
        Increment
      </button>
      <article class="message is-primary pt-3">
        <div class="message-body">
          <p>
            This project is already running <strong>Hot module Replacement.</strong>
          </p>
          <p>Please run <code>npm run serve</code> in the console.</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
	data(){
		return {
			count: 0
		}
	}

}
</script>

<style>

</style>
