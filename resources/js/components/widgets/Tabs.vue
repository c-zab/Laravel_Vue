<template>
  <div>
    <div class="tabs">
      <ul>
        <li
          v-for="tab in tabs"
          :key="tab.name"
          :class="{'is-active': tab.isActive}"
        >
          <a
            :href="tab.href"
            @click="selectTab(tab)"
          >{{ tab.name }}</a>
        </li>
      </ul>
    </div>
    <div class="tabs-details">
      <slot />
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
				tab.isActive = (tab.name == selectedTab.name)
			})
		}
	}
}
</script>
