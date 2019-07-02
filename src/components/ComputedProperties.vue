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
            v-for="task in tasks"
            :key="task.id"
          >
            <label
              class="checkbox"
              for="checkbox"
            >
              <input
                id="checkbox"
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
            v-for="task in completedTasks"
            :key="task.id"
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
            v-for="task in incompletedTasks"
            :key="task.id"
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
		completedTasks(){
			return this.tasks.filter(task=> task.completed);
		},
		incompletedTasks(){
			return this.tasks.filter(task=> ! task.completed)
		}
	}
}
</script>
