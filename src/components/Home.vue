<template>
  <div class="hello">
    <header />
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <p>{{ weather }}</p> -->
    <!--
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
    -->
    <div class="row tile-count">
      <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 tile-stats-count">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-6">
            <!-- <i class="fa fa-pencil-square-o" aria-hidden="true"></i> -->
            <h5 class="text-muted text-uppercase">Outdoorsy</h5>
          </div>
<!--           <div class="col-md-6 col-sm-6 col-6">
            <h3 class="counter text-right m-t-15 text-info">168</h3>
          </div> -->
          <div class="col-12">
            <div class="progress progress-sm">
              <div
                class="progress-bar bg-info"
                role="progressbar"
                style="width: 100%;"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 tile-stats-count">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-6">
            <!-- <i class="fa fa-files-o" aria-hidden="true"></i> -->
            <h5 class="text-muted text-uppercase">Music Concerts</h5>
          </div>
<!--           <div class="col-md-6 col-sm-6 col-6">
            <h3 class="counter text-right m-t-15 text-primary">123</h3>
          </div> -->
          <div class="col-12">
            <div class="progress progress-sm">
              <div
                class="progress-bar bg-primary"
                role="progressbar"
                style="width: 100%;"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 tile-stats-count">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-6">
            <!-- <i class="fa fa-users" aria-hidden="true"></i> -->
            <h5 class="text-muted text-uppercase">Unique Events</h5>
          </div>
          <!-- <div class="col-md-6 col-sm-6 col-6"> -->
            <!-- <h3 class="counter text-right m-t-15 text-danger">34</h3> -->
          <!-- </div> -->
          <div class="col-12">
            <div class="progress progress-sm">
              <div
                class="progress-bar bg-danger"
                role="progressbar"
                style="width: 100%;"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 tile-stats-count">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-6">
            <!-- <i class="fa fa-shopping-bag" aria-hidden="true"></i> -->
            <h5 class="text-muted text-uppercase">Night Life</h5>
          </div>
          <!-- <div class="col-md-6 col-sm-6 col-6"> -->
            <!-- <h3 class="counter text-right m-t-15 text-success">570</h3> -->
          <!-- </div> -->
          <div class="col-12">
            <div class="progress progress-sm">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                style="width: 100%;"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    // axios
    //   .get(
    //     `http://api.openweathermap.org/data/2.5/forecast?q=New_York&APPID=dc7d08d80be0c3aa1fbd760521de9b5a`
    //   )
    //   .then(response => {
    //     this.weather = response.data;
    //     console.log(response.data);
    //   })
    //   .catch(e => {
    //     this.errors.push(e);
    //   });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
}
</style>
