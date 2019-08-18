<template>
  <div class="section">
    <div class="container">
      <h1 class="title">
        E6 The need for Computed Properties
      </h1>
      <h2 class="subtitle">
        All tasks
      </h2>

      <div class="content">
        <ul>
          <li
            v-for="(task, index) in tasks"
            :key="index"
          >
            <label
              class="checkbox"
              :for="index"
            >
              <input
                :id="index"
                v-model="task.completed"
                type="checkbox"
              >
              {{ task.description }}
            </label>
          </li>
        </ul>
      </div>
      <h2 class="subtitle">
        Completed Tasks
      </h2>
      <div class="content">
        <ul>
          <li
            v-for="(task, index) in completedTasks"
            :key="index"
            v-text="task.description"
          />
        </ul>
      </div>
      <h2 class="subtitle">
        Incompleted Tasks
      </h2>
      <div class="content">
        <ul>
          <li
            v-for="(task, index) in incompletedTasks"
            :key="index"
            v-text="task.description"
          />
        </ul>
      </div>
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
		completedTasks: (vm) => vm.tasks.filter(task=> task.completed),

		incompletedTasks: (vm) => vm.tasks.filter(task=> ! task.completed)

		// incompletedTasks(){
		// 	return this.tasks.filter(task=> ! task.completed)
		// }
	}
}
</script>
