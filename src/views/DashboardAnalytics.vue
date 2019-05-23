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

      <div class="vx-col w-full lg:w-1/3 mb-base">
          <vx-card>
              <div slot="no-body">
                  <img :src="require(`@/assets/images/pages/${card_1.contentImg1}`)" alt="content-img" class="responsive card-img-top">
              </div>
              <h5 class="mb-2">{{ card_1.title }}</h5>
              <p class="text-grey">{{ card_1.subtitle }}</p>
              <p class="text-grey">{{ card_1.subtitle_2 }}</p>
              <div class="flex justify-between flex-wrap">
                  <vs-button class="mt-4 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">Download</vs-button>
                  <vs-button class="mt-4" type="border" color="#b9b9b9">View All</vs-button>
              </div>
          </vx-card>
      </div>

      <!-- CARD 7: Sales Stats -->
      <div class="vx-col w-full lg:w-1/3 mb-base">
        <vx-card title="Departure Time Poll" subtitle="next 6 Months">
          <template slot="actions">
            <feather-icon
              icon="MoreVerticalIcon"
              svgClasses="w-6 h-6 text-grey"
            ></feather-icon>
          </template>
          <div slot="no-body-bottom">
            <vue-apex-charts
              type="radar"
              height="400"
              :options="analyticsData.statisticsRadar.chartOptions"
              :series="analyticsData.statisticsRadar.series"
            />
          </div>
        </vx-card>
      </div>

      <!-- CARD 8: Activity Timeline -->
      <div class="vx-col w-full lg:w-1/3 mb-base">
        <vx-card title="Activity Timeline">
          <ul class="activity-timeline">
            <li>
              <div class="timeline-icon bg-primary">
                <feather-icon
                  icon="PlusIcon"
                  svgClasses="text-white stroke-current w-5 h-5"
                ></feather-icon>
              </div>
              <div class="timeline-info">
                <p class="font-semibold">Activities</p>
                <span class="activity-desc"
                  >Bonbon macaroon jelly beans gummi bears jelly lollipop
                  apple</span
                >
              </div>
              <small class="text-grey activity-e-time">25 mins ago</small>
            </li>
            <li>
              <div class="timeline-icon bg-warning">
                <feather-icon
                  icon="AlertCircleIcon"
                  svgClasses="text-white stroke-current w-5 h-5"
                ></feather-icon>
              </div>
              <div class="timeline-info">
                <p class="font-semibold">Location needs polling</p>
                <span class="activity-desc"
                  >Cupcake gummi bears soufflé caramels candy</span
                >
              </div>
              <small class="text-grey activity-e-time">15 days ago</small>
            </li>
            <li>
              <div class="timeline-icon bg-danger">
                <feather-icon
                  icon="CheckIcon"
                  svgClasses="text-white stroke-current w-5 h-5"
                ></feather-icon>
              </div>
              <div class="timeline-info">
                <p class="font-semibold">Vision Board Started</p>
                <span class="activity-desc"
                  >Candy ice cream cake. Halvah gummi bears</span
                >
              </div>
              <small class="text-grey activity-e-time">20 days ago</small>
            </li>
            <li>
              <div class="timeline-icon bg-success">
                <feather-icon
                  icon="CheckIcon"
                  svgClasses="text-white stroke-current w-5 h-5"
                ></feather-icon>
              </div>
              <div class="timeline-info">
                <p class="font-semibold">Departure date polled</p>
                <span class="activity-desc"
                  >Candy ice cream cake. Halvah gummi bears Cupcake gummi bears
                  soufflé caramels candy.</span
                >
              </div>
              <small class="text-grey activity-e-time">25 days ago</small>
            </li>
            <li>
              <div class="timeline-icon bg-primary">
                <feather-icon
                  icon="CheckIcon"
                  svgClasses="text-white stroke-current w-5 h-5"
                ></feather-icon>
              </div>
              <div class="timeline-info">
                <p class="font-semibold">Invited Members to Dashboard</p>
                <span class="activity-desc"
                  >Candy ice cream cake. Halvah gummi bears Cupcake gummi
                  bears.</span
                >
              </div>
              <small class="text-grey activity-e-time">28 days ago</small>
            </li>
          </ul>
        </vx-card>
      </div>


    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
import analyticsData from "./ui-elements/card/analyticsData.js";
import ChangeTimeDurationDropdown from "@/components/ChangeTimeDurationDropdown.vue";

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
        // {
        //   orderNo: 156897,
        //   status: "Pending",
        //   statusColor: "warning",
        //   operator: "Britany Ryder",
        //   operatorImg: "avatar-s-4.png",
        //   usersLiked: [
        //     { name: "Trina Lynes", img: "avatar-s-1.png" },
        //     { name: "Lilian Nenez", img: "avatar-s-2.png" },
        //     { name: "Alberto Glotzbach", img: "avatar-s-3.png" }
        //   ],
        //   location: "Cordova, Alaska",
        //   distance: "234 km",
        //   distPercent: 60,
        //   startDate: "14:58 26/07/2018",
        //   estDelDate: "28/07/2018"
        // },
        // {
        //   orderNo: 568975,
        //   status: "Moving",
        //   statusColor: "success",
        //   operator: "Kishan Ashton",
        //   operatorImg: "avatar-s-1.png",
        //   usersLiked: [
        //     { name: "Lai Lewandowski", img: "avatar-s-6.png" },
        //     { name: "Elicia Rieske", img: "avatar-s-7.png" },
        //     { name: "Darcey Nooner", img: "avatar-s-8.png" },
        //     { name: "Julee Rossignol", img: "avatar-s-10.png" },
        //     { name: "Jeffrey Gerondale", img: "avatar-s-9.png" }
        //   ],
        //   location: "Florence, Alabama",
        //   distance: "168 km",
        //   distPercent: 70,
        //   startDate: "14:58 26/07/2018",
        //   estDelDate: "28/07/2018"
        // },
        // {
        //   orderNo: 245689,
        //   status: "Canceled",
        //   statusColor: "danger",
        //   operator: "Anabella Elliott",
        //   operatorImg: "avatar-s-6.png",
        //   usersLiked: [
        //     { name: "Vennie Mostowy", img: "avatar-s-5.png" },
        //     { name: "Elicia Rieske", img: "avatar-s-7.png" }
        //   ],
        //   location: "Clifton, Arizona",
        //   distance: "125 km",
        //   distPercent: 95,
        //   startDate: "14:58 26/07/2018",
        //   estDelDate: "28/07/2018"
        // }
      ],
      card_1: {
                contentImg1: 'content-img-1.jpg',
                title: 'Vuesax Admin',
                subtitle: 'By Pixinvent Creative Studio',
                subtitle_2: 'Elite Author',
            }
    };
  },
  components: {
    VueApexCharts,
    StatisticsCardLine,
    ChangeTimeDurationDropdown
  }
};
</script>

<style lang="scss">
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
