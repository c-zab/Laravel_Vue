<template>
  <div>
    <h1>E8 Components Within Components</h1>
    <ul>
      <task
        v-for="(task, index) in tasks"
        :key="index"
      >
        {{ task.chore }}
      </task>
    </ul>
    <div id="break">
      break
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
