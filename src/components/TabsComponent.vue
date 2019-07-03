<template>
  <div class="section">
    <div class="container">
      <h1 class="title">
        E11 Practical Component Exercise #3: Tabs
      </h1>

      <tabs>
        <tab
          name="About us"
          :selected="true"
        >
          <h1>Here is the content for About us tab</h1>
        </tab>
        <tab name="About our culture">
          <h1>Here is the content for About our culture tab</h1>
        </tab>
        <tab name="About our vision">
          <h1>Here is the content for About our vision tab</h1>
        </tab>
        <tab name="About our other stuff">
          <h1>Here is the content for our other stuff tab</h1>
        </tab>
      </tabs>
    </div>
  </div>
</template>

<script>
import tabs from './widgets/Tabs'
import tab from './widgets/Tab'

export default {
	components: {
		tabs,
		tab
	}
}
</script>

<style>

</style>
