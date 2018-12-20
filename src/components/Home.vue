<template>
  <div class="hello">
    <header />
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="entry in entries">
        {{ entry.draw_date | moment("MMMM Do YYYY") }}
        {{ entry.winning_numbers }}
        {{ entry.mega_ball }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Calendar",
  data() {
    return {
      msg: "WELCOME TO TEAMDREAM",
      entries: [],
      errors: []
    };
  },
  created() {
    axios
      .get(`https://data.ny.gov/resource/5xaw-6ayf.json`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.entries = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
}
</style>
