<template>
  <div class="hello">
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
      <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 tile-stats-count"
      v-on:click="changePage('outdoors')">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-6">
            <!-- <i class="fa fa-pencil-square-o" aria-hidden="true"></i> -->
            <h5 class="text-muted text-uppercase">Outdoorsy</h5>
          </div>
          <!--
            <div class="col-md-6 col-sm-6 col-6">
              <h3 class="counter text-right m-t-15 text-info">168</h3>
            </div>
          -->
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
      <div
        class="col-sm-6 col-md-6 col-lg-3 col-xl-3 tile-stats-count"
        v-on:click="changePage('music')"
      >
        <div class="row">
          <div class="col-md-6 col-sm-6 col-6">
            <!-- <i class="fa fa-files-o" aria-hidden="true"></i> -->
            <h5 class="text-muted text-uppercase">Music Concerts</h5>
          </div>
          <!--
            <div class="col-md-6 col-sm-6 col-6">
              <h3 class="counter text-right m-t-15 text-primary">123</h3>
            </div>
          -->
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
      <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 tile-stats-count"
      v-on:click="changePage('unique')">
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
      <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 tile-stats-count"
      v-on:click="changePage('nightlife')">
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
    <div class="row">
      <div class="col-lg-12 col-xl-12 m-b-10">
        <div v-if="options[0].outdoors"><Outdoors /></div>
        <div v-if="options[0].music"><Music /></div>
        <div v-if="options[0].unique"><Outdoors /></div>
        <div v-if="options[0].nightlife"><Nightlife /></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Outdoors from "./Outdoors";
import Music from "./Music";
import Unique from "./Unique";
import Nightlife from "./Nightlife";

export default {
  name: "Calendar",
  components: {
    Outdoors,
    Music,
    Unique,
    Nightlife
  },
  data() {
    return {
      msg: "WELCOME TO TEAMDREAM",
      weather: "",
      options: [{
        outdoors: false,
        music: false,
        unique: false,
        nightlife: false
      }]
    };
  },
  methods: {
    changePage: function (chosenPage) {
      const allOptions = this.options[0]
      if(chosenPage === 'outdoors'){
        allOptions.outdoors = true
        allOptions.music = false
        allOptions.unique = false
        allOptions.nightlife = false
      }
      if(chosenPage === 'music'){
        allOptions.outdoors = false
        allOptions.music = true
        allOptions.unique = false
        allOptions.nightlife = false
      }
      if(chosenPage === 'unique'){
        allOptions.outdoors = false
        allOptions.music = false
        allOptions.unique = true
        allOptions.nightlife = false
      }
      if(chosenPage === 'nightlife'){
        allOptions.outdoors = false
        allOptions.music = false
        allOptions.unique = false
        allOptions.nightlife = true
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
}
</style>
