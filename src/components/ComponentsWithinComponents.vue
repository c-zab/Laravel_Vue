<template>
  <div class="section">
    <div class="container">
      <h1 class="title">
        E8 Components Within Components
      </h1>
      <div class="content">
        <ol class="1">
          <task
            v-for="(task, index) in tasks"
            :key="index"
          >
            {{ task.chore }}
          </task>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>

import task from "./widgets/Task.vue";

export default {
	name:'ComponentsWithinComponents',
	components: {
		task
	},
	data() {
		return {
			tasks: [
				{ chore: "Go to the Store", completed: true },
				{ chore: "Go to the bank", completed: true },
				{ chore: "Go to the farm", completed: false },
				{ chore: "Go to the beach", completed: true },
			]
		}
	}

}
</script>
