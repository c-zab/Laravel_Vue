<template>
  <footer class="modal is-active">
    <div
      class="modal-background"
      @click="closeModal"
    />
    <footer class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          <slot name="title" />
        </p>
        <button
          class="delete"
          aria-label="close"
          @click="closeModal"
        />
      </header>
      <section class="modal-card-body">
        <slot />
      </section>
      <footer class="modal-card-foot">
        <slot name="footer">
          <button class="button is-warning">
            Deafult
          </button>
        </slot>
      </footer>
    </footer>
  </footer>
</template>

<script>
export default {
	methods: {
		closeModal(){
			this.$emit('close-modal');
		}
	}
}
</script>
