<template>
  <div class="hello">
    <header />
    <h1>{{ msg }}</h1>
    <p>{{ weather }}</p>
    <GmapMap
      :center="{lat:40.7128, lng:-74.0060}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100%; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap> 
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Calendar",
  data() {
    return {
      msg: "WELCOME TO TEAMDREAM",
      weather: ""
    };
  },
  created() {
    axios
      .get(`http://api.openweathermap.org/data/2.5/forecast?q=New_York&APPID=dc7d08d80be0c3aa1fbd760521de9b5a`)
      .then(response => {
        this.weather = response.data;
        console.log(response.data)
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
}
</style>
