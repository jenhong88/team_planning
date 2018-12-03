// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import HeaderComponent from './shared/components/HeaderComponent'
import router from './router'

Vue.config.productionTip = false

import VCalendar from 'v-calendar';

// stylesheets
import 'v-calendar/lib/v-calendar.min.css';
import './assets/styles/main.css';
import './assets/styles/vendor.min.css';
import './assets/styles/dashboard.css';
import './assets/styles/documentation.css';
import './assets/styles/error.css';
import './assets/styles/invoice.css';
import './assets/styles/lockscreen.css';
import './assets/styles/login-register.css';
import './assets/styles/user-profile.css';

// libraries
import './assets/js/charts.js';
import './assets/js/main.js';
import './assets/js/settings.min.js';
import './assets/js/vendor.min.js';

// Use v-calendar, v-date-picker & v-popover components
Vue.use(VCalendar, {
	locale: 'en',
	firstDayOfWeek: 1,
	paneWidth: 600
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
