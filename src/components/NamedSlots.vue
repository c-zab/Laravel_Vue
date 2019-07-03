<template>
  <div class="section">
    <div class="container">
      <h1 class="title">
        E14 Named Slots in a Nutshell
      </h1>
      <button
        class="button is-primary"
        @click="showModal"
      >
        Show Modal
      </button>
      <modal
        v-if="isVisible"
        @close-modal="closeModal"
      >
        <template slot="title">
          Here my title
        </template>

        <p>
          A nice body!
        </p>

        <template slot="footer">
          <button class="button is-success">
            Save changes
          </button>
          <button class="button">
            Cancel
          </button>
        </template>
      </modal>
    </div>
  </div>
</template>

<script>
import Modal from './widgets/ModalSlots'
export default {
	components: {
		Modal
	},
	data(){
		return {
			isVisible: false
		}
	},
	methods: {
		showModal(){
			this.isVisible = true
		},
		closeModal() {
			this.isVisible = false
		}
	}

}
</script>

<style>

</style>
