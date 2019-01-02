// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

Vue.config.productionTip = false

import VueToastr from '@deveodk/vue-toastr'
import VCalendar from 'v-calendar';

import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDoL3TdDlYcai33kONiuZlokxEDJgMapI4',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
 
  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,
 
  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})

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
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
// If you would like custom styling of the toastr the css file can be replaced
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'

// libraries
import './assets/js/charts.js';
import './assets/js/main.js';
import './assets/js/settings.js';
import './assets/js/jscolor.min.js';

// Use v-calendar, v-date-picker & v-popover components
Vue.use(VCalendar, {
	locale: 'en',
	firstDayOfWeek: 1,
	paneWidth: 600
});

Vue.use(VueToastr, {
    defaultPosition: 'toast-top-right',
    defaultType: 'info',
    defaultTimeout: 3000
})

Vue.use(require('vue-moment'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
