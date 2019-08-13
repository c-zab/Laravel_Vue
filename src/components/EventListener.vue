<template>
  <div>
    <h1>E4 Event Listener</h1>
    <h2>All tasks</h2>
    <ul>
      <li
        v-for="(task, index) in tasks"
        :key="index"
      >
        <input
          :id="index"
          v-model="task.completed"
          type="checkbox"
        >
        <label :for="index">{{ task.description }}</label>
      </li>
    </ul>
    <h3>Completed Tasks</h3>
    <ul>
      <li
        v-for="task in completedTasks"
        :key="task.id"
        v-text="task.description"
      />
    </ul>
    <h4>Incompleted Tasks</h4>
    <ul>
      <li
        v-for="task in incompletedTasks"
        :key="task.id"
        v-text="task.description"
      />
    </ul>
    <div id="break">
      Break
    </div>
  </div>
</template>

<script>
export default {
	name: "EventListener",
	props: {
		tasks: {
			type: Array,
			required: true
		}
	},
	computed: {
		completedTasks() {
			return this.tasks.filter(task => task.completed);
		},
		incompletedTasks() {
			return this.tasks.filter(task => !task.completed);
		}
	}
};
</script>
