<template>
  <div class="section">
    <div class="container">
      <h1 class="title">
        E9 Practical Component Exercise #1: Message
      </h1>
      <message
        title="Here my title"
        body="Lorem sit apend arem"
      />
      <message
        title="Here another title"
        body="Lorem sit apend arem Lorem sit apend arem Lorem sit apend arem"
      />
    </div>
  </div>
</template>

<script>
import Message from "./widgets/Message";
export default {
	name: 'MessageComponent',
	components: {
		Message
	}
}
</script>
