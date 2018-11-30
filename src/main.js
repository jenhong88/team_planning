// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { setupCalendar, Calendar} from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css';

// Remember to setup calendar (passing in defaults if needed)
setupCalendar({
  firstDayOfWeek: 2 // Monday,
  // ...,                // ...other defaults
});

// Register component(s)
Vue.component('v-calendar', Calendar);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
