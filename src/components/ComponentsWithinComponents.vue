<template>
  <div>
    <h1>E8 Components Within Components</h1>
    <ul>
      <task
        v-for="task in tasks"
        :key="task.task"
      >
        {{ task.task }}
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
				{ task: "Go to the Store", completed: true },
				{ task: "Go to the bank", completed: true },
				{ task: "Go to the farm", completed: false },
				{ task: "Go to the beach", completed: true },
			]
		}
	}

}
</script>
