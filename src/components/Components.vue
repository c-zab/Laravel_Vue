<template>
  <div class="section">
    <div class="container">
      <h1 class="title">
        E7 Components 101
      </h1>

      <div class="content">
        <ul>
          <task>Clean room</task>
          <task>Clean bathroom</task>
          <task>Clear cache</task>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import Task from './widgets/Task.vue' ;

export default {
	name: 'Components',
	components: {
		Task
	}
}
</script>
