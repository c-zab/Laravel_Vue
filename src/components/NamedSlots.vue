<template>
  <div class="section">
    <div class="container">
      <h1 class="title">
        E14 Named Slots in a Nutshell
      </h1>
      <button
        class="button is-primary"
        @click="isVisible = true"
      >
        Show Modal
      </button>
      <modal
        v-if="isVisible"
        @close-modal="isVisible = false"
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
	}
}
</script>
