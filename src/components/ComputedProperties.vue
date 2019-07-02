<template>
  <div>
    <h1>E6 The need for Computed Properties</h1>
    <h2>All tasks</h2>
    <ul>
      <li
        v-for="task in tasks"
        :key="task.id"
      >
        <input
          id="checkbox"
          v-model="task.completed"
          type="checkbox"
        >
        <label for="checkbox"> {{ task.description }}</label>
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
      break
    </div>
  </div>
</template>

<script>
export default {
	name: 'ComputedProperties',
	props:{
		tasks: {
			type: Array,
			required: true
		}
	},
	data() {
		return {

		};
	},
	computed: {
		completedTasks(){
			return this.tasks.filter(task=> task.completed);
		},
		incompletedTasks(){
			return this.tasks.filter(task=> ! task.completed)
		}
	}
}
</script>
