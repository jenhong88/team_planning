 <!-- =========================================================================================
  File Name: DashboardAnalytics.vue
  Description: Dashboard Analytics
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="dashboard-analytics">
<!--     <div class="vx-row">
      <div class="vx-col sm:w-1/5 w-full ml-auto" v-if="!poll">
        <vs-button class="mr-3 mb-2" v-on:click="!poll">Send</vs-button>
      </div>
    </div> -->

    <vs-row>
      <vs-col vs-offset="10" v-tooltip="'col - 1'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="1">
        <div class="vx-col sm:w-1/5 w-full ml-auto" v-if="!poll">
          <vs-button class="mr-3 mb-2" v-on:click="poll=!poll">Poll</vs-button>
        </div>
      </vs-col>
    </vs-row>

    here{{test}}here

    <!-- <div class="vx-row">
      <FormLayouts v-if="poll" />
      <div class="vx-col w-full lg:w-1/4 mb-base height">
          <vx-card>
              <div slot="no-body">
                  <img :src="require(`@/assets/images/pages/${card_1.contentImg1}`)" alt="content-img" class="responsive card-img-top">
              </div>
              <h5 class="mb-2">{{ card_1.title }}</h5>
              <p class="text-grey">{{ card_1.subtitle }}</p>
              <p class="text-grey">Vote YES:{{ card_1.vote_yes }}</p>
              <p class="text-grey">Vote NO:{{ card_1.vote_no }}</p>
              <div class="flex justify-between flex-wrap">
                  <vs-button class="mt-4 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC" v-on:click="()=>{this.card_1.vote_yes++}">Yes</vs-button>
                  <vs-button class="mt-4" type="border" color="#b9b9b9" v-on:click="()=>{this.card_1.vote_no++}">No</vs-button>
              </div>
          </vx-card>
      </div>

      <div class="vx-col w-full lg:w-1/4 mb-base height">
          <vx-card>
              <div slot="no-body">
                  <img :src="require(`@/assets/images/pages/${card_2.contentImg2}`)" alt="content-img" class="responsive card-img-top">
              </div>
              <h5 class="mb-2">{{ card_2.title }}</h5>
              <p class="text-grey">{{ card_2.subtitle }}</p>
              <p class="text-grey">Vote YES:{{ card_2.vote_yes }}</p>
              <p class="text-grey">Vote NO:{{ card_2.vote_no }}</p>
              <div class="flex justify-between flex-wrap">
                  <vs-button class="mt-4 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC" v-on:click="()=>{this.card_2.vote_yes++}">Yes</vs-button>
                  <vs-button class="mt-4" type="border" color="#b9b9b9" v-on:click="()=>{this.card_2.vote_no++}">No</vs-button>
              </div>
          </vx-card>
      </div>

      <div class="vx-col w-full lg:w-1/4 mb-base height">
          <vx-card>
              <div slot="no-body">
                  <img :src="require(`@/assets/images/pages/${card_3.contentImg3}`)" alt="content-img" class="responsive card-img-top">
              </div>
              <h5 class="mb-2">{{ card_3.title }}</h5>
              <p class="text-grey">{{ card_3.subtitle }}</p>
              <p class="text-grey">Vote YES:{{ card_3.vote_yes }}</p>
              <p class="text-grey">Vote NO:{{ card_3.vote_no }}</p>
              <div class="flex justify-between flex-wrap">
                  <vs-button class="mt-4 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC" v-on:click="()=>{this.card_3.vote_yes++}">Yes</vs-button>
                  <vs-button class="mt-4" type="border" color="#b9b9b9" v-on:click="()=>{this.card_3.vote_no++}">No</vs-button>
              </div>
          </vx-card>
      </div>

      <div class="vx-col w-full lg:w-1/4 mb-base height">
          <vx-card>
              <div slot="no-body">
                  <img :src="require(`@/assets/images/pages/${card_3.contentImg3}`)" alt="content-img" class="responsive card-img-top">
              </div>
              <h5 class="mb-2">{{ card_3.title }}</h5>
              <p class="text-grey">{{ card_3.subtitle }}</p>
              <p class="text-grey">Vote YES:{{ card_3.vote_yes }}</p>
              <p class="text-grey">Vote NO:{{ card_3.vote_no }}</p>
              <div class="flex justify-between flex-wrap">
                  <vs-button class="mt-4 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC" v-on:click="()=>{this.card_3.vote_yes++}">Yes</vs-button>
                  <vs-button class="mt-4" type="border" color="#b9b9b9" v-on:click="()=>{this.card_3.vote_no++}">No</vs-button>
              </div>
          </vx-card>
      </div> -->

    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
import analyticsData from "./ui-elements/card/analyticsData.js";
import ChangeTimeDurationDropdown from "@/components/ChangeTimeDurationDropdown.vue";
import FormLayouts from "./forms/FormLayouts.vue";
import axios from 'axios'



axios.get('https://maenan-241423.firebaseio.com/activities.json')
  .then(function (response) {
    test = response
    // console.log('HERE ===> ', response)
  })
  .catch(function (error) {
    // Error Occurred
  });

export default {
  data() {
    return {
      test: '',
      poll: false,
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
                contentImg1: 'demo_1.jpg',
                title: 'Africa',
                subtitle: 'Recommended by:',
                subtitle_2: 'Anna',
                vote_yes: 0,
                vote_no: 0
      },
      card_2: {
                contentImg2: 'demo_2.jpg',
                title: 'Budapest',
                subtitle: 'Recommended by:',
                subtitle_2: 'Paul',
                vote_yes: 0,
                vote_no: 0
      },
      card_3: {
                contentImg3: 'demo_3.jpg',
                title: 'Thailand',
                subtitle: 'Recommended by:',
                subtitle_2: 'Kevin',
                vote_yes: 0,
                vote_no: 0
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
          { position: { lat: 8.7832, lng: 34.5085 }, infoText: 'Africa' },
          { position: { lat: 47.374592, lng: 8.548867 }, infoText: 'Marker 2' },
          { position: { lat: 47.379592, lng: 8.549867 }, infoText: 'Marker 3' }
      ]
    };
  },
  components: {
    VueApexCharts,
    StatisticsCardLine,
    ChangeTimeDurationDropdown,
    FormLayouts
  },
  mounted: function () {
    this.$nextTick(function () {
      console.log('LOADED')
      this.$http.get("https://maenan-241423.firebaseio.com/activities.json")
        .then(response => {
          console.log(response.json())
        })
    })
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
        },
        voteYes: (tile) => {
          let tileId = `this.${tile}`
          this.card_1[0].vote_yes++
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
