/*=========================================================================================
  File Name: themeConfig.js
  Description: Theme configuration
  ----------------------------------------------------------------------------------------
  Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/

// MAIN COLORS - VUESAX THEME COLORS
let colors = {
	primary: '#55c6d0',
	success: '#55c6d0',
	danger: '#55c6d0',
	warning: '#55c6d0',
	dark: '#55c6d0',
}

import Vue from 'vue'
import Vuesax from 'vuesax'
Vue.use(Vuesax, { theme:{ colors } });


// CONFIGS
const themeConfig = {
	theme: 'semi-dark',						// options[String]: 'light'(default), 'dark', 'semi-dark'
	sidebarCollapsed: false,			// options[Boolean]: true, false(default)
	navbarColor: "#fff",				// options[String]: HEX color / rgb / rgba / Valid HTML Color name - (default: #fff)
	navbarType: "floating",				// options[String]: floating(default) / static / sticky / hidden
	footerType: "static",				// options[String]: static(default) / sticky / hidden
	routerTransition: 'zoom-fade',		// options[String]: zoom-fade / slide-fade / fade-bottom / fade / zoom-out / none(default)
	disableCustomizer: true,			// options[Boolean]: true, false(default)
	hideScrollToTop: false,				// options[Boolean]: true, false(default)
	disableThemeTour: true,					// options[Boolean]: true, false(default)
  // NOTE: themeTour will be disabled in screens < 1200. Please refer docs for more info.
}

export default themeConfig
