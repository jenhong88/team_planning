<template>
  <div class="hello">
    <header />
    <h1>{{ msg }}</h1>
    <div>{{ posts }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Calendar',
  data () {
    return {
      msg: 'WELCOME TO TEAMDREAM',
      posts: [],
      errors: []
    }
  },
  created() {
    axios.get(`https://data.ny.gov/resource/5xaw-6ayf.json`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
