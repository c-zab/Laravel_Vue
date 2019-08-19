<template>
  <div class="section">
    <div class="container">
      <h1 class="title">
        E11 Practical Component Exercise #3: Tabs
      </h1>

      <tabs>
        <tab
          title="About us"
          :selected="true"
        >
          <template slot="title">
            <h1 class="title">
              About us
            </h1>
          </template>
          <template slot="subtitle">
            <h2 class="subtitle">
              Subtitle for About us
            </h2>
          </template>
        </tab>

        <tab title="About our culture">
          <template slot="title">
            <h1 class="title">
              About our culture
            </h1>
          </template>
        </tab>

        <tab title="About our vision">
          <template slot="title">
            <h1 class="title">
              About our vision
            </h1>
          </template>
          <template slot="subtitle">
            <h2 class="subtitle">
              Subtitle for About our vision
            </h2>
          </template>
        </tab>

        <tab title="About our other stuff">
          <template slot="title">
            <h1 class="title">
              About our other stuff
            </h1>
          </template>
        </tab>
      </tabs>
    </div>
  </div>
</template>

<script>
import tabs from "./widgets/Tabs";
import tab from "./widgets/Tab";

export default {
	components: {
		tabs,
		tab
	}
};
</script>
