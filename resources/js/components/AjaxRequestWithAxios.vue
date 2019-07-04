<template>
  <div class="section">
    <div class="container">
      <h1 class="title">
        E18 Vue Ajax Requests With Axios
      </h1>
      <article class="message is-info">
        <div class="message-body">
          Listenning from <strong>component.</strong>
        </div>
      </article>
      <div class="content">
        <ol type="a">
          <li
            v-for="skill in skills"
            :key="skill"
          >
            {{ skill }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
	data(){
		return {
			skills: [],
		}
	},
	created() {
		axios.get('/skills').then(response =>
			(console.log(response.data),
			this.skills = response.data)
		);
	}
}
</script>
