<template>
  <div>
    <div class="tabs">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{'is-active': tab.isActive}"
        >
          <a
            :href="tab.href"
            @click="selectTab(tab)"
          >{{ tab.title }}</a>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <section class="hero is-primary">
        <div class="hero-body">
          <slot />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import tab from './Tab'

export default {
	components: {
		// eslint-disable-next-line vue/no-unused-components
		tab
	},
	data(){
		return {
			tabs: []
		}
	},
	created() {
		this.tabs = this.$children;
	},
	methods: {
		selectTab(selectedTab){
			this.tabs.forEach(tab => {
				tab.isActive = (tab.title == selectedTab.title)
			})
		}
	}
}
</script>
