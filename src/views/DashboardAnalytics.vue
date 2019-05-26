 j8j76<!-- =========================================================================================
  File Name: DashboardAnalytics.vue
  Description: Dashboard Analytics
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="dashboard-analytics">
    <div class="vx-row">

     <!-- Google Maps -->
      <div class="vx-col w-full lg:w-3/3 mb-base height">
        <vx-card>
          <div class="mt-5">
              <gmap-map :center="center" :zoom="15" style="width: 100%; height: 500px">
                  <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
                      {{infoContent}}
                  </gmap-info-window>
                  <gmap-marker :key="i" v-for="(m,i) in markers" :position="m.position" :clickable="true" @click="toggleInfoWindow(m,i)"></gmap-marker>
              </gmap-map>
          </div>
        </vx-card>
      </div>

      <div class="vx-col w-full lg:w-1/3 mb-base height">
          <vx-card>
              <div slot="no-body">
                  <img :src="require(`@/assets/images/pages/${card_1.contentImg1}`)" alt="content-img" class="responsive card-img-top">
              </div>
              <h5 class="mb-2">{{ card_1.title }}</h5>
              <p class="text-grey">{{ card_1.subtitle }}</p>
              <p class="text-grey">{{ card_1.subtitle_2 }}</p>
              <div class="flex justify-between flex-wrap">
                  <vs-button class="mt-4 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">Let's Go!!!</vs-button>
                  <vs-button class="mt-4" type="border" color="#b9b9b9">Hard Pass</vs-button>
              </div>
          </vx-card>
      </div>

      <div class="vx-col w-full lg:w-1/3 mb-base height">
          <vx-card>
              <div slot="no-body">
                  <img :src="require(`@/assets/images/pages/${card_1.contentImg1}`)" alt="content-img" class="responsive card-img-top">
              </div>
              <h5 class="mb-2">{{ card_1.title }}</h5>
              <p class="text-grey">{{ card_1.subtitle }}</p>
              <p class="text-grey">{{ card_1.subtitle_2 }}</p>
              <div class="flex justify-between flex-wrap">
                  <vs-button class="mt-4 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">Let's Go!!!</vs-button>
                  <vs-button class="mt-4" type="border" color="#b9b9b9">Hard Pass</vs-button>
              </div>
          </vx-card>
      </div>

      <div class="vx-col w-full lg:w-1/3 mb-base height">
          <vx-card>
              <div slot="no-body">
                  <img :src="require(`@/assets/images/pages/${card_1.contentImg1}`)" alt="content-img" class="responsive card-img-top">
              </div>
              <h5 class="mb-2">{{ card_1.title }}</h5>
              <p class="text-grey">{{ card_1.subtitle }}</p>
              <p class="text-grey">{{ card_1.subtitle_2 }}</p>
              <div class="flex justify-between flex-wrap">
                  <vs-button class="mt-4 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">Let's Go!!!</vs-button>
                  <vs-button class="mt-4" type="border" color="#b9b9b9">Hard Pass</vs-button>
              </div>
          </vx-card>
      </div>

      <!-- Calendar -->
      <Calendar />


    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
import analyticsData from "./ui-elements/card/analyticsData.js";
import ChangeTimeDurationDropdown from "@/components/ChangeTimeDurationDropdown.vue";
import GoogleMapInfoWindow from "@/views/charts-and-maps/maps/google-map/GoogleMapInfoWindow.vue"
import Calendar from "@/views/apps/Calendar.vue";


export default {
  data() {
    return {
      analyticsData: analyticsData,
      isImp: false,
      navbarSearchAndPinList: this.$store.state.navbarSearchAndPinList,
      show: false,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      tableList: [
        "vs-th: Component",
        "vs-tr: Component",
        "vs-td: Component",
        "thread: Slot",
        "tbody: Slot",
        "header: Slot"
      ],
      users: [
        {
          orderNo: 879985,
          status: "Moving",
          statusColor: "success",
          operator: "Cinar Knowles",
          operatorImg: "avatar-s-2.png",
          usersLiked: [
            { name: "Vennie Mostowy", img: "avatar-s-5.png" },
            { name: "Elicia Rieske", img: "avatar-s-7.png" },
            { name: "Julee Rossignol", img: "avatar-s-10.png" },
            { name: "Darcey Nooner", img: "avatar-s-8.png" }
          ],
          location: "Anniston, Alabama",
          distance: "130 km",
          distPercent: 80,
          startDate: "14:58 26/07/2018",
          estDelDate: "28/07/2018"
        }
      ],
      card_1: {
                contentImg1: 'logo.jpg',
                title: 'Vuesax Admin',
                subtitle: 'By Pixinvent Creative Studio',
                subtitle_2: 'Elite Author'
      },
      center: { lat: 47.376332, lng: 8.547511 },
      infoContent: '',
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
      pixelOffset: { width: 0, height: -35 }
      },
      markers: [
          { position: { lat: 47.376332, lng: 8.547511 }, infoText: 'Marker 1' },
          { position: { lat: 47.374592, lng: 8.548867 }, infoText: 'Marker 2' },
          { position: { lat: 47.379592, lng: 8.549867 }, infoText: 'Marker 3' }
      ]
    };
  },
  components: {
    VueApexCharts,
    StatisticsCardLine,
    ChangeTimeDurationDropdown,
    GoogleMapInfoWindow,
    Calendar
  },  
  methods: {
        toggleInfoWindow: function(marker, idx) {
            this.infoWindowPos = marker.position;
            this.infoContent = marker.infoText;
            //check if its the same marker that was selected if yes toggle
            if (this.currentMidx == idx) {
                this.infoWinOpen = !this.infoWinOpen;
            }
            //if different marker set infowindow to open and reset current marker index
            else {
                this.infoWinOpen = true;
                this.currentMidx = idx;
            }
        }
    }
};
</script>

<style lang="scss">
.height {
  height: 100%;
}
#dashboard-analytics {
  .greet-user {
    position: relative;
    .decore-left {
      position: absolute;
      left: 0;
      top: 0;
    }
    .decore-right {
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  @media (max-width: 576px) {
    .decore-left,
    .decore-right {
      width: 140px;
    }
  }
}
</style>
