<template>
  <div id="app" class="nav-md theme-green">
<!--     <HeaderComponent/>
    <router-view/> -->
    <div class="main-container">

        <!-- sidebar -->
        <div class="sidebar">
            <div class="scroll-wrapper">
                <div class="navbar nav-title">
                    <a href="index.html" class="site-title navbar-brand site-logo">
                        <span class="icon-admin-logo"></span>
                    </a>
                </div>
                <div class="nav toggle">
                    <a href="javascript:void(0)" id="sidebar-menu-toggle" class="btn btn-circle ripple">
                       <i class="fa fa-times"></i>
                    </a>
                </div>
                <div class="clearfix"></div>
                <!-- menu profile quick info -->
                <div class="profile clearfix">
                    <div class="profile-pic">
                        <img src="img/avatar.png" alt="Profile picture" class="rounded-circle profile-img">
                    </div>
                    <div class="profile-info">
                        <h2>James Mcavoy</h2>
                    </div>
                </div>
                <!-- /menu profile quick info -->
        
                <!-- search -->
                <div class="search-wrap d-sm-none clearfix text-center">
                    <form action="" autocomplete="on">
                        <input class="search" name="search" type="text" placeholder="What're we looking for?">
                        <div>
                            <button class="search-submit" value="Rechercher" type="submit"> <i class="fa fa-search" aria-hidden="true"></i></button>
                        </div>
                    </form>
                </div>
                <!-- /search -->
        
                <!-- sidebar menu -->
                <div id="sidebar-menu" class="main-menu-wrapper">
                    <div class="menu-section">
                        <ul class="nav side-menu flex-column">
                            <li class="nav-item">
                                <a href="index.html" title="Dashboard">
                                    <i class="fa fa-home" aria-hidden="true"></i>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li class="nav-item has-child">
                                <a href="javascript:void(0);" class="ripple" title="UI Elements">
                                    <i class="fa fa-desktop" aria-hidden="true"></i>
                                    <span>UI Elements</span>
                                    <span class="fa fa-chevron-right"></span>
                                </a>
                                <ul class="nav child-menu">
                                    <li class="child-menu-title">UI Elements</li>
                                    <li><a href="ui-colors.html">Colors</a></li>
                                    <li><a href="ui-typography.html">Typography</a></li>
                                    <li><a href="ui-buttons.html">Buttons</a></li>
                                    <li><a href="ui-cards.html">Cards</a></li>
                                    <li><a href="ui-tabs-accordions.html">Tabs & Accordions</a></li>
                                    <li><a href="ui-modals.html">Modals</a></li>
                                    <li><a href="ui-progress-bars.html">Progress Bars</a></li>
                                    <li><a href="ui-notifications.html">Notifications</a></li>
                                    <li><a href="ui-images.html">Images</a></li>
                                    <li><a href="ui-carousel.html">Carousel</a></li>
                                    <li><a href="ui-sliders.html">Sliders</a></li>
                                </ul>
                            </li>
                            <li class="nav-item has-child">
                                <a href="javascript:void(0);" class="ripple" title="Tables">
                                    <i class="fa fa-table" aria-hidden="true"></i>
                                    <span>Tables</span>
                                    <span class="fa fa-chevron-right" aria-hidden="true"></span>
                                </a>
                                <ul class="nav child-menu">
                                    <li class="child-menu-title">Tables</li>
                                    <li><a href="basic-tables.html">Basic Tables</a></li>
                                    <li><a href="data-tables.html">Data Tables</a></li>
                                </ul>
                            </li>
                            <li class="nav-item has-child">
                                <a href="javascript:void(0);" class="ripple" title="Icons">
                                    <i class="fa fa-clone" aria-hidden="true"></i>
                                    <span>Icons</span>
                                    <span class="fa fa-chevron-right" aria-hidden="true"></span>
                                </a>
                                <ul class="nav child-menu">
                                    <li class="child-menu-title">Icons</li>
                                    <li><a href="icons-material.html">Material Design</a></li>
                                    <li><a href="icons-fontawesome.html">Font awesome</a></li>
                                </ul>
                            </li>
                            <li class="nav-item has-child">
                                <a href="javascript:void(0);" class="ripple" title="Forms">
                                    <i class="fa fa-edit" aria-hidden="true"></i>
                                    <span>Forms</span>
                                    <span class="fa fa-chevron-right" aria-hidden="true"></span>
                                </a>
                                <ul class="nav child-menu">
                                    <li class="child-menu-title">Forms</li>
                                    <li><a href="form-general.html">General Elements</a></li>
                                    <li><a href="form-advanced.html">Advanced Components</a></li>
                                    <li><a href="form-layouts.html">Form Layouts</a></li>
                                    <li><a href="form-wizard.html">Form Wizard</a></li>
                                </ul>
                            </li>
                            <li class="nav-item has-child">
                                <a href="javascript:void(0);" class="ripple" title="Extras">
                                    <i class="fa fa-windows" aria-hidden="true"></i>
                                    <span>Extras</span>
                                    <span class="fa fa-chevron-right"></span>
                                </a>
                                <ul class="nav child-menu">
                                    <li class="child-menu-title">Extras</li>
                                    <li><a href="403-error.html">403 Error</a></li>
                                    <li><a href="404-error.html">404 Error</a></li>
                                    <li><a href="500-error.html">500 Error</a></li>
                                    <li><a href="invoice.html">Invoice</a></li>
                                    <li class="has-child">
                                        <a href="javascript:void(0);" title="Login">
                                            <span>Login</span>
                                            <span class="fa fa-chevron-right"></span>
                                        </a>
                                        <ul class="nav child-menu">
                                            <li><a href="login.html">Login V1</a></li>
                                            <li><a href="loginV2.html">Login V2</a></li>
                                        </ul>
                                    </li>
                                    <li class="has-child">
                                        <a href="javascript:void(0);" title="Register">
                                            <span>Register</span>
                                            <span class="fa fa-chevron-right"></span>
                                        </a>
                                        <ul class="nav child-menu">
                                            <li><a href="register.html">Register V1</a></li>
                                            <li><a href="registerV2.html">Register V2</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="lockscreen.html">Lockscreen</a></li>
                                    <li><a href="recover-password.html">Recover Password</a></li>
                                    <li><a href="user-profile.html">User Profile</a></li>
                                    <li class="has-child">
                                        <a href="javascript:void(0);">
                                            <span>Email Templates</span>
                                            <span class="fa fa-chevron-right"></span>
                                        </a>
                                        <ul class="nav child-menu">
                                            <li><a href="email-template-basic.html">Email Template Basic</a></li>
                                            <li><a href="email-template-alert.html">Email Template Alert</a></li>
                                            <li><a href="email-template-billing.html">Email Template Billing</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item has-child">
                                <a href="javascript:void(0);" class="ripple" title="Menu levels">
                                    <i class="fa fa-level-down" aria-hidden="true"></i>
                                    <span>Menu levels</span>
                                    <span class="fa fa-chevron-right"></span>
                                </a>
                                <ul class="nav child-menu">
                                    <li class="child-menu-title">Menu levels</li>
                                    <li><a href="javascript:void(0);" title="Menu levels">
                                        <span>Menu Level 1.1</span>
                                    </a></li>
                                    <li class="has-child">
                                        <a href="javascript:void(0);">
                                            <span>Menu Level 1.2</span>
                                            <span class="fa fa-chevron-right"></span>
                                        </a>
                                        <ul class="nav child-menu">
                                            <li><a href="javascript:void(0);" title="Menu levels">Menu Level 2.1</a></li>
                                            <li class="has-child">
                                                <a href="javascript:void(0);">
                                                    <span>Menu Level 2.2</span>
                                                    <span class="fa fa-chevron-right"></span>
                                                 </a>
                                                <ul class="nav child-menu">
                                                    <li><a href="javascript:void(0);">Menu Level 3.1</a></li>
                                                    <li><a href="javascript:void(0);">Menu Level 3.2</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a href="documentation.html" title="Documentation">
                                    <i class="fa fa-file-text" aria-hidden="true"></i>
                                    <span>Documentation</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- /sidebar menu -->
            </div>
        </div>
        <!-- /sidebar -->

        <div class="content-wrapper">

            <!-- header content  -->
            <header class="header">
                <nav class="header-menu">
                    <div class="nav toggle">
                        <a href="javascript:void(0)" id="menu-toggle" class="ripple">
                            <span class="bars"></span>
                        </a>
                    </div>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="search-wrap d-sm-none d-md-block">
                            <form action="" autocomplete="on">
                                <input type="text" name="search" class="search" placeholder="What're we looking for?">
                                <div>
                                    <button class="search-submit" value="" type="submit"> <i class="fa fa-search" aria-hidden="true"></i></button>
                                </div>
                            </form>
                        </li>
                        <li role="presentation" class="dropdown notifications-list">
                            <a href="javascript:void(0)" class="dropdown-toggle info-number ripple" data-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-bell-o"></i>
                                <span class="badge">6</span>
                            </a>
                            <ul id="menu" class="dropdown-menu list-unstyled dropdown-menu-lg" role="menu">
                                <li class="notif-title"> Notifications
                                    <button type="button" class="float-right close btn btn-circle d-none d-block-xs"><i class="fa fa-close"></i></button>
                                </li>
                                <li class="list-group notification-list">
                                  <ul class="p-0">
                                      <!-- list item-->
                                      <li class="list-group-item">
                                          <a href="javascript:void(0);">
                                              <div class="m-r-10 notif-img float-left">
                                                  <i class="fa fa-exclamation-triangle text-danger" aria-hidden="true"></i>
                                              </div>
                                              <div class="notif-info"><p class="text-danger notif-text">98% Server Load</p>
                                                  <time class="float-right">12 min ago</time>
                                              </div>
                                          </a>
                                      </li>
                                      <!-- list item-->
                                      <li class="list-group-item">
                                          <a href="javascript:void(0);">
                                              <div class="m-r-10 notif-img float-left">
                                                  <i class="fa fa-exclamation-triangle text-warning " aria-hidden="true"></i>
                                              </div>
                                              <div class="notif-info"><p class="text-warning notif-text">Warning Notification</p>
                                                  <time class="float-right">12 min ago</time>
                                              </div>
                                          </a>
                                      </li>
                                      <!-- list item-->
                                      <li class="list-group-item">
                                          <a href="javascript:void(0);">
                                              <div class="m-r-10 notif-img float-left">
                                                  <i class="fa fa-check-circle text-success" aria-hidden="true"></i>
                                              </div>
                                              <div class="notif-info"><p class="text-success notif-text">Success Notification</p>
                                                <time class="float-right">12 min ago</time>
                                              </div>
                                          </a>
                                      </li>
            
                                  </ul>
                                </li>
                                <li class="read-all-notif"><a href="javascript:void(0)">Read all notifications<i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                            </ul>
                        </li>
                        <li class="profile-dropdown dropdown">
                            <a href="javascript:void(0)" class="user-profile dropdown-toggle ripple" data-toggle="dropdown" aria-expanded="false">
                                <img src="img/avatar.png" alt="Profile picture" class="rounded-circle">
                                <span class="d-none d-sm-block">James Mcavoy</span>
                                <span class="fa fa-angle-down"></span>
                            </a>
                            <ul class="dropdown-menu float-right">
                                <li class="d-none d-block-xs p-0">
                                    <button type="button" class="close btn btn-circle"><i class="fa fa-close"></i></button>
                                    <div class="profile clearfix">
                                        <div class="profile-pic">
                                            <img src="img/avatar.png" alt="Profile picture" class="rounded-circle profile-img">
                                        </div>
                                        <div class="profile-info">
                                            <h2>James Mcavoy</h2>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="user-profile.html"><i class="fa fa-user-o" aria-hidden="true"></i>Profile</a></li>
                                <li><a href="javascript:void(0)"><i class="fa fa-cog" aria-hidden="true"></i> Settings</a></li>
                                <li><a href="lockscreen.html"><i class="fa fa-lock" aria-hidden="true"></i> Lock screen</a></li>
                                <li class="divider"></li>
                                <li><a href="login.html"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
            <!-- /header content -->

            <!-- theme settings-->
            <div class="settings-wrapper builder d-none d-md-block" id="builder">
                <div class="p-l-20 p-r-30">
                    <a id="builder-close" class="builder-close settings-toggle" href="javascript:void(0)" title="Close">
                        <i class="fa fa-close" aria-hidden="true"></i>
                    </a>
                    <a id="builder-toggle" class="builder-toggle" title="Settings">
                        <i class="fa fa-cog fa-spin" aria-hidden="true"></i>
                    </a>
            
                    <ul class="nav nav-tabs nav-tabs-simple nav-tabs-simple-bottom nav-justified" id="settingsTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="layouts-tab" data-toggle="tab" href="#layouts" role="tab" aria-controls="layouts" aria-expanded="true">Layout settings</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="colors-tab" data-toggle="tab" href="#colors" role="tab" aria-controls="colors" aria-expanded="false">Custom Colors</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="settingsTabContent">
                        <div role="tabpanel" class="tab-pane fade active show" id="layouts" aria-labelledby="layouts-tab" aria-expanded="true">
                            <div class="scroll-wrapper">
                                <div class="scroll-content">
                                    <div class="p-r-20">
                                        <h5 class="semi-bold">
                                            Layout color options
                                        </h5>
                                        <div class="sidebar-settings m-b-10">
                                            <p class="hint-text mb-0">
                                                Sidebar color.
                                            </p>
                                            <button type="button" class="btn btn-outline-primary btn-activate-sidebar mt-2 active" title="Light Sidebar" id="activate-light-sidebar">
                                                Light
                                            </button>
                                            <button type="button" class="btn btn-outline-primary btn-activate-sidebar mt-2" title="Dark Sidebar" id="activate-dark-sidebar">
                                                Dark
                                            </button>
                                        </div>
                                        <div class="header-settings m-b-10">
                                            <p class="hint-text mb-0">
                                                Header color.
                                            </p>
                                            <button type="button" class="btn btn-outline-info btn-activate-header mt-2" title="Light Header" id="activate-light-header">
                                                Light
                                            </button>
                                            <button type="button" class="btn btn-outline-info btn-activate-header mt-2 active" title="Dark Header" id="activate-dark-header">
                                                Dark
                                            </button>
                                        </div>
            
                                        <div class="m-b-10">
                                            <p class="hint-text mb-0">
                                                Main color of your theme
                                            </p>
                                            <button type="button" class="btn btn-outline-green btn-activate-color btn-raised mt-2 btn-circle active" id="activate-green" title="Green">
                                                <i class="fa fa-check" aria-hidden="true"></i>
                                            </button>
                                            <button type="button" class="btn btn-outline-purple btn-activate-color btn-raised mt-2 btn-circle" id="activate-purple" title="Purple">
                                                <i class="fa fa-check" aria-hidden="true"></i>
                                            </button>
                                            <button type="button" class="btn btn-outline-red btn-activate-color btn-raised mt-2 btn-circle" id="activate-red" title="Red">
                                                <i class="fa fa-check" aria-hidden="true"></i>
                                            </button>
                                            <button type="button" class="btn btn-outline-cyan btn-activate-color btn-raised mt-2 btn-circle" id="activate-cyan" title="Cyan">
                                                <i class="fa fa-check" aria-hidden="true"></i>
                                            </button>
                                            <button type="button" class="btn btn-outline-orange btn-activate-color btn-raised mt-2 btn-circle" id="activate-orange" title="Orange">
                                                <i class="fa fa-check" aria-hidden="true"></i>
                                            </button>
                                            <button type="button" class="btn btn-outline-grey btn-activate-color btn-raised mt-2 btn-circle" id="activate-grey" title="Grey">
                                                <i class="fa fa-check" aria-hidden="true"></i>
                                            </button>
                                            <p class="hint-text mt-2">Pick a Custom Theme Color</p>
                                            <input class="jscolor form-control btn-activate-color d-inline-block" id="activate-custom" value="4DD0E1" title="Pick a custom theme color">
                                        </div>
                                        <h5 class="semi-bold">
                                            Layout view options
                                        </h5>
                                        <div class="row p-b-35">
                                            <div class="col-md-12 col-lg-12">
                                                <div class="card box-shadow-none">
                                                    <div class="card-body p-0">
                                                        <h5 class="card-title hint-text">Fixed full width header</h5>
                                                        <div class="ml-auto mr-auto layout-view layout-view-fixed-header d-flex align-items-center justify-content-center"
                                                             id="activate-fixed-header"
                                                             title="Activate Fixed Full Width Header">
                                                            <button type="button" class="card-link btn btn-theme btn-activate mt-2"></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
            
                                            <div class="col-md-12 col-lg-12">
                                                <div class="card box-shadow-none">
                                                    <div class="card-body p-0">
                                                        <h5 class="card-title hint-text">Left sidebar</h5>
                                                        <div class="ml-auto mr-auto layout-view active layout-view-left-sidebar d-flex align-items-center justify-content-center"
                                                             id="activate-left-sidebar"
                                                             title="Activate Left Sidebar">
                                                            <button type="button" class="card-link btn btn-theme btn-activate mt-2"></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
            
                                            <div class="col-md-12 col-lg-12">
                                                <div class="card box-shadow-none">
                                                    <div class="card-body p-0">
                                                        <h5 class="card-title hint-text">Right sidebar</h5>
                                                        <div class="ml-auto mr-auto layout-view layout-view-right-sidebar d-flex align-items-center justify-content-center"
                                                             id="activate-right-sidebar"
                                                             title="Activate Right Sidebar">
                                                            <button type="button" class="card-link btn btn-theme btn-activate mt-2"></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
            
                                            <div class="col-md-12 col-lg-12">
                                                <div class="card box-shadow-none">
                                                    <div class="card-body p-0">
                                                        <h5 class="card-title hint-text">RTL Content</h5>
                                                        <div class="ml-auto mr-auto layout-view layout-view-rtl-content d-flex align-items-center justify-content-center"
                                                             id="activate-rtl-content"
                                                             title="Activate RTL Content">
                                                            <button type="button" class="card-link btn btn-theme btn-activate activate-rtl mt-2"></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="colors" role="tabpanel" aria-labelledby="colors-tab" aria-expanded="false">
                            <div class="scroll-wrapper">
                                <div class="scroll-content">
                                    <div>
                                        <h5 class="semi-bold">
                                            Color Options
                                        </h5>
                                        <p class="hint-text">
                                            Customize colors of your theme.
                                        </p>
                                        <div class="row mb-2">
                                            <div class="col-12">
                                                <div class="d-flex justify-content-between align-items-center color-settings-row p-l-5 p-r-5">
                                                    <div>
                                                        <label>Pick a primary background color</label>
                                                        <input class="jscolor {position:'left'} form-control" id="primary-color" value="6d5cae" title="Pick a primary background color">
                                                        <label>Pick a primary text color</label>
                                                        <input class="jscolor {position:'left'} form-control" id="primary-text-color" value="ffffff" title="Pick a primary text color">
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                      <button class="btn mt-1 btn-prev" id="btn-primary-prev" title="Preview of primary color">Primary</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-12">
                                                <div class="d-flex justify-content-between align-items-center color-settings-row p-l-5 p-r-5">
                                                    <div>
                                                        <label>Pick a secondary background color</label>
                                                        <input class="jscolor {position:'left'} form-control" id="secondary-color" value="cfd0d2" title="Pick a secondary background color">
                                                        <label>Pick a secondary text color</label>
                                                        <input class="jscolor {position:'left'} form-control" id="secondary-text-color" value="ffffff" title="Pick a secondary text color">
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <button class="btn mt-1 btn-prev" id="btn-secondary-prev" title="Preview of secondary color">Secondary</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-12">
                                                <div class="d-flex justify-content-between align-items-center color-settings-row p-l-5 p-r-5">
                                                    <div>
                                                        <label>Pick a success background color</label>
                                                        <input class="jscolor {position:'left'} form-control" id="success-color" value="0aa89e" title="Pick a success background color">
                                                        <label>Pick a success text color</label>
                                                        <input class="jscolor {position:'left'} form-control" id="success-text-color" value="ffffff" title="Pick a success text color">
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <button class="btn mt-1 btn-prev" id="btn-success-prev" title="Preview of success color">Success</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
            
            
                                        <div class="row mb-2">
                                            <div class="col-12">
                                                <div class="d-flex justify-content-between align-items-center color-settings-row p-l-5 p-r-5">
                                                    <div>
                                                        <label>Pick a info background color</label>
                                                        <input class="jscolor {position:'left'} form-control" id="info-color" value="4DD0E1" title="Pick a info background color">
                                                        <label>Pick a info text color</label>
                                                        <input class="jscolor {position:'left'} form-control" id="info-text-color" value="ffffff" title="Pick a info text color">
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <button class="btn mt-1 btn-prev" id="btn-info-prev" title="Preview of info color">Info</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div class="row mb-2">
                                            <div class="col-12">
                                                <div class="d-flex justify-content-between align-items-center color-settings-row p-l-5 p-r-5">
                                                    <div>
                                                        <label>Pick a warning background color</label>
                                                        <input class="jscolor {position:'left'} form-control" id="warning-color" value="ffaa00" title="Pick a warning background color">
                                                        <label>Pick a warning text color</label>
                                                        <input class="jscolor {position:'left'} form-control" id="warning-text-color" value="ffffff" title="Pick a warning text color">
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <button class="btn mt-1 btn-prev" id="btn-warning-prev" title="Preview of warning color">Warning</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div class="row mb-2">
                                            <div class="col-12">
                                                <div class="d-flex justify-content-between align-items-center color-settings-row p-l-5 p-r-5">
                                                    <div>
                                                        <label>Pick a danger background color</label>
                                                        <input class="jscolor {position:'left'} form-control" id="danger-color" value="e43a45" title="Pick a danger background color">
                                                        <label>Pick a danger text color</label>
                                                        <input class="jscolor {position:'left'} form-control" id="danger-text-color" value="ffffff" title="Pick a danger text color">
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <button class="btn mt-1 btn-prev" id="btn-danger-prev" title="Preview of danger color">Danger</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div class="row mb-2">
                                            <div class="col-12">
                                                <div class="d-flex justify-content-between align-items-center color-settings-row p-l-5 p-r-5">
                                                    <div>
                                                        <label>Pick a light background color</label>
                                                        <input class="jscolor {position:'left'} form-control" id="light-color" value="eaeef3" title="Pick a light background color">
                                                        <label>Pick a light text color</label>
                                                        <input class="jscolor {position:'left'} form-control" id="light-text-color" value="8e959d" title="Pick a light text color">
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <button class="btn mt-1 btn-prev" id="btn-light-prev" title="Preview of light color">Light</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div class="row mb-2">
                                            <div class="col-12">
                                                <div class="d-flex justify-content-between align-items-center color-settings-row p-l-5 p-r-5">
                                                    <div>
                                                        <label>Pick a dark background color</label>
                                                        <input class="jscolor {position:'left'} form-control" id="dark-color" value="8e959d" title="Pick a dark background color">
                                                        <label>Pick a dark text color</label>
                                                        <input class="jscolor {position:'left'} form-control" id="dark-text-color" value="ffffff" title="Pick a dark text color">
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <button class="btn mt-1 btn-prev" id="btn-dark-prev" title="Preview of dark color">Dark</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fixed-bottom-buttons">
                        <div class="mt-2">
                            <button type="button" id="btnOpenSaveSettingsModal" class="btn btn-theme btn-raised" data-toggle="modal" data-target="#save-settings-modal" title="Save Settings">
                                <i class="fa fa-check left" aria-hidden="true"></i><span>Save</span>
                            </button>
                            <button type="button" class="btn btn-theme btn-raised" id="btnPrevSettings" title="Preview Settings">
                                <i class="fa fa-clone left" aria-hidden="true"></i><span>Preview</span>
                            </button>
                            <button type="button" class="btn btn-light btn-raised" id="btnCancelSettings" title="Cancel Settings">
                                <i class="fa fa-ban left" aria-hidden="true"></i><span>Cancel</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Settings Modal -->
            <div class="modal fade" id="save-settings-modal" tabindex="-1" role="dialog" aria-labelledby="SaveModal" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="SaveModal">Save Settings</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <p>If you want to get this view in the project, you should change <code>body</code> classlist to this</p>
                                <p id="customized-body-classlist" class="font-weight-bold"></p>
                            </div>
                           <div>
                               <p>If you want to use these colors in the template, you should find and replace the code of this file <span class="text-success">src/sass/partials/default-colors.sass</span> to this code</p>
                               <p id="customized-css" class="font-weight-bold"></p>
                           </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-theme" id="btnSaveSettings">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /theme settings -->

            <!-- page content -->
            <div class="main-content small-gutter" role="main">
                <div class="row bg-title clearfix page-title">
                    <div class="col-12 col-lg-3">
                        <h4 class="page-title">Welcome!</h4>
                    </div>
                    <div class="col-12 col-lg-9">
                        <ol class="breadcrumb pl-0 pr-0 float-lg-right">
                            <li><a href="index.html">Musa</a></li>
                            <li class="active">Dashboard</li>
                        </ol>
                    </div>
                </div>
                <!-- top tiles -->
                <div class="row tile-count">
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 tile-stats-count">
                        <div class="row">
                            <div class="col-md-6 col-sm-6 col-6"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                <h5 class="text-muted text-uppercase">New Products</h5>
                            </div>
                            <div class="col-md-6 col-sm-6 col-6">
                                <h3 class="counter text-right m-t-15 text-info">168</h3>
                            </div>
                            <div class="col-12">
                                <div class="progress progress-sm">
                                    <div class="progress-bar bg-info" role="progressbar" style="width: 54%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 tile-stats-count">
                        <div class="row">
                            <div class="col-md-6 col-sm-6 col-6"><i class="fa fa-files-o" aria-hidden="true"></i>
                                <h5 class="text-muted text-uppercase">New Categories</h5>
                            </div>
                            <div class="col-md-6 col-sm-6 col-6">
                                <h3 class="counter text-right m-t-15 text-primary">123</h3>
                            </div>
                            <div class="col-12">
                                <div class="progress progress-sm">
                                    <div class="progress-bar bg-primary" role="progressbar" style="width: 26%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 tile-stats-count">
                        <div class="row">
                            <div class="col-md-6 col-sm-6 col-6"> <i class="fa fa-users" aria-hidden="true"></i>
                                <h5 class="text-muted text-uppercase">New Customers</h5>
                            </div>
                            <div class="col-md-6 col-sm-6 col-6">
                                <h3 class="counter text-right m-t-15 text-danger">34</h3>
                            </div>
                            <div class="col-12">
                                <div class="progress progress-sm">
                                    <div class="progress-bar bg-danger" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 tile-stats-count">
                        <div class="row">
                            <div class="col-md-6 col-sm-6 col-6"><i class="fa fa-shopping-bag" aria-hidden="true"></i>
                                <h5 class="text-muted text-uppercase">All Products</h5>
                            </div>
                            <div class="col-md-6 col-sm-6 col-6">
                                <h3 class="counter text-right m-t-15 text-success">570</h3>
                            </div>
                            <div class="col-12">
                                <div class="progress progress-sm">
                                    <div class="progress-bar bg-success" role="progressbar" style="width: 74%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /top tiles -->

                <div class="row">
                    <div class="col-12 col-xl-7 m-b-10">
                        <div class="h-100 w-100 bg-white padding-25 white-box">
                            <h4 class="box-title">Share statistics</h4>
                            <div id="areaChart"></div>
                        </div>
                    </div>
                    <div class="col-12 col-xl-5 m-b-10">
                        <div class="h-100 bg-white padding-25 white-box">
                            <h4 class="box-title">Recent sales</h4>
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Date</th>
                                        <th>Price</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Electronics</td>
                                        <td><span class="badge badge-pill badge-primary text-uppercase">SALE</span> </td>
                                        <td>January 18</td>
                                        <td><span class="text-primary">$32</span></td>
                                    </tr>
                                    <tr>
                                        <td>Books</td>
                                        <td><span class="badge badge-pill badge-info text-uppercase">EXTENDED</span></td>
                                        <td>May 19</td>
                                        <td><span class="text-info">$1400</span></td>
                                    </tr>
                                    <tr>
                                        <td>Crafts</td>
                                        <td><span class="badge badge-pill badge-danger text-uppercase">SALE</span></td>
                                        <td>June 20</td>
                                        <td><span class="text-danger">-$38</span></td>
                                    </tr>
                                    <tr>
                                        <td>Video games</td>
                                        <td><span class="badge badge-pill badge-success text-uppercase">EXTENDED</span></td>
                                        <td>June 22</td>
                                        <td><span class="text-success">$350</span></td>
                                    </tr>
                                    <tr>
                                        <td>Shoes</td>
                                        <td><span class="badge badge-pill badge-warning text-uppercase">EXTENDED</span></td>
                                        <td>July 22</td>
                                        <td><span class="text-warning">$64</span></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-4 m-b-10">
                        <div class="row h-100">
                            <div class="col-12 m-b-10 carousel-wrapper">
                                <div class="h-100 w-100 bg-primary padding-25 d-flex align-items-center justify-content-center">
                                    <div id="dashboardCarousel1" class="carousel slide w-100 dashboard-carousel m-t-20" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-target="#dashboardCarousel1" data-slide-to="0" class=""></li>
                                            <li data-target="#dashboardCarousel1" data-slide-to="1" class=""></li>
                                            <li data-target="#dashboardCarousel1" data-slide-to="2" class="active"></li>
                                        </ol>
                                        <div class="carousel-inner h-100 w-100">
                                            <div class="carousel-item active">
                                                <div class="text-left">
                                                    <h4 class="mt-0">Share statistics</h4>
                                                    <p class="m-0 hint-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dolores facilis maiores minus itaque excepturi.</p>
                                                </div>
                                                <h2 class="m-t-20">
                                                    <i class="fa fa-angle-down"></i>
                                                    254,453
                                                </h2>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="text-left">
                                                    <h4 class="mt-0">Total Sales</h4>
                                                    <p class="m-0 hint-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dolores facilis maiores minus itaque excepturi.</p>
                                                </div>
                                                <h2 class="m-t-20">
                                                    <i class="fa fa-angle-down"></i>
                                                    58,634
                                                </h2>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="text-left">
                                                    <h4 class="mt-0">Website Traffics</h4>
                                                    <p class="m-0 hint-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dolores facilis maiores minus itaque excepturi.</p>
                                                </div>
                                                <h2 class="m-t-20">
                                                    <i class="fa fa-angle-up"></i>
                                                    241,147
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 carousel-wrapper">
                                <div class="h-100 w-100 bg-info padding-25 d-flex align-items-center justify-content-center">
                                    <div id="carouselExampleSlidesOnly2" class="carousel slide w-100" data-ride="carousel">
                                        <div class="carousel-inner h-100 w-100">
                                            <div class="carousel-item active">
                                                <div class="text-left">
                                                    <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dolores facilis maiores minus itaque excepturi.</p>
                                                </div>
                                                <div class="m-t-40">
                                                    <div class="float-left mr-3">
                                                        <img src="img/user-1.png" alt="" class="rounded-circle profile-img" style="width: 44px; height: 44px;">
                                                    </div>
                                                    <div class="text-left">
                                                        <h6 class="m-0 hint-text">
                                                            Share Public Post - 20m ago
                                                        </h6>
                                                        <h4 class="m-0">Richard Cook</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="text-left">
                                                    <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dolores facilis maiores minus itaque excepturi.</p>
                                                </div>
                                                <div class="m-t-40">
                                                    <div class="float-left mr-3">
                                                        <img src="img/user-2.png" alt="" class="rounded-circle profile-img" style="width: 44px; height: 44px;">
                                                    </div>
                                                    <div class="text-left">
                                                        <h6 class="m-0 hint-text">
                                                            Share Public Post - 2h ago
                                                        </h6>
                                                        <h4 class="m-0">Samuel Nelson</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="text-left">
                                                    <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dolores facilis maiores minus itaque excepturi.</p>
                                                </div>
                                                <div class="m-t-40">
                                                    <div class="float-left mr-3">
                                                        <img src="img/user-3.png" alt="" class="rounded-circle profile-img" style="width: 44px; height: 44px;">
                                                    </div>
                                                    <div class="text-left">
                                                        <h6 class="m-0 hint-text">
                                                            Share Public Post - 3h ago
                                                        </h6>
                                                        <h4 class="m-0">Richard Sevian</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-4 m-b-10">
                        <div class="h-100 bg-white padding-25 white-box">
                            <h4 class="box-title">To Do List</h4>
                            <ul class="list-task list-group" data-role="tasklist">
                                <li class="list-group-item border-0" data-role="task">
                                    <div class="d-flex w-100 justify-content-between align-items-center">
                                        <div class="custom-control custom-checkbox material-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="meetNewSuppliers" checked>
                                            <label class="custom-control-label" for="meetNewSuppliers">Meet new suppliers</label>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item border-0" data-role="task">
                                    <div class="d-flex w-100 justify-content-between align-items-center">
                                        <div class="custom-control custom-checkbox material-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="makeSalesReport" checked>
                                            <label class="custom-control-label" for="makeSalesReport">Make sales report</label>
                                        </div>
                                        <span class="badge badge-danger">Today</span>
                                    </div>
                                </li>
                                <li class="list-group-item border-0" data-role="task">
                                    <div class="d-flex w-100 justify-content-between align-items-center">
                                        <div class="custom-control custom-checkbox material-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="makeAnAppointement" checked>
                                            <label class="custom-control-label" for="makeAnAppointement">Make an appointement</label>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item border-0" data-role="task">
                                    <div class="d-flex w-100 justify-content-between align-items-center">
                                        <div class="custom-control custom-checkbox material-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="rearrangeAllTasks">
                                            <label class="custom-control-label" for="rearrangeAllTasks">Rearrange all tasks</label>
                                        </div>
                                        <span class="badge badge-warning">8 days</span>
                                    </div>
                                </li>
                                <li class="list-group-item border-0" data-role="task">
                                    <div class="d-flex w-100 justify-content-between align-items-center">
                                        <div class="custom-control custom-checkbox material-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="makeAnewOrder">
                                            <label class="custom-control-label" for="makeAnewOrder">Make a new order</label>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item border-0" data-role="task">
                                    <div class="d-flex w-100 justify-content-between align-items-center">
                                        <div class="custom-control custom-checkbox material-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="generalThings">
                                            <label class="custom-control-label" for="generalThings">General things</label>
                                        </div>
                                        <span class="badge badge-success">3 weeks</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-4 m-b-10">
                        <div class="h-100 w-100 bg-white padding-25 white-box">
                            <h4 class="box-title">Total sales</h4>
                            <div class="text-center">
                                <div id="pieChart"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-4 m-b-10">
                        <div class="h-100 w-100 bg-white padding-25 white-box">
                            <h4 class="box-title">Sales analytics</h4>
                            <div id="columnChart"></div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-4 m-b-10">
                        <div class="h-100 bg-white padding-25 white-box">
                            <h4 class="box-title">New registrations</h4>
                            <ul class="list-new-registrations list-group" data-role="newregistrationslist">
                                <li class="list-group-item border-0" data-role="newregistrationslist">
                                    <a href="#">
                                        <div class="d-flex align-items-center">
                                            <div class="img-wrapper float-left"><img src="img/user-1.png" class="rounded-circle"></div>
                                            <div class="d-flex w-100 justify-content-between align-items-center">
                                                <h5>Richard Cook</h5>
                                                <button type="button" class="btn"><i class="fa fa-ban"></i></button>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="list-group-item border-0" data-role="newregistrationslist">
                                    <a href="#">
                                        <div class="d-flex align-items-center">
                                            <div class="img-wrapper float-left"><img src="img/user-3.png" class="rounded-circle"></div>
                                            <div class="d-flex w-100 justify-content-between align-items-center">
                                                <h5>Richard Sevian</h5>
                                                <button type="button" class="btn"><i class="fa fa-ban"></i></button>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="list-group-item border-0" data-role="newregistrationslist">
                                    <a href="#">
                                        <div class="d-flex align-items-center">
                                            <div class="img-wrapper float-left"><img src="img/user-2.png" class="rounded-circle"></div>
                                            <div class="d-flex w-100 justify-content-between align-items-center">
                                                <h5>Samuel Nelson</h5>
                                                <button type="button" class="btn"><i class="fa fa-ban"></i></button>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="list-group-item border-0" data-role="newregistrationslist">
                                    <a href="#">
                                        <div class="d-flex align-items-center">
                                            <div class="img-wrapper float-left"><img src="img/user-4.png" class="rounded-circle"></div>
                                            <div class="d-flex w-100 justify-content-between align-items-center">
                                                <h5>Mary Cruise</h5>
                                                <button type="button" class="btn"><i class="fa fa-ban"></i></button>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="list-group-item border-0" data-role="newregistrationslist">
                                    <a href="#">
                                        <div class="d-flex align-items-center">
                                            <div class="img-wrapper float-left"><img src="img/user-5.png" class="rounded-circle"></div>
                                            <div class="d-flex w-100 justify-content-between align-items-center">
                                                <h5>Jessica Anderson</h5>
                                                <button type="button" class="btn"><i class="fa fa-ban"></i></button>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-4 m-b-10">
                        <div class="h-100 w-100 bg-white padding-25 white-box">
                            <h4 class="box-title">Recent Orders</h4>
                            <div class="table-responsive data-table-wrapper">
                                <table class="table m-b-0 data-table">
                                    <thead>
                                    <tr>
                                        <th></th>
                                        <th>Product Name</th>
                                        <th>Increase / Decrease</th>
                                        <th>Manage</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div id="areaChart1"></div>
                                        </td>
                                        <td>
                                            <span  class="d-block">NoteBook </span></td>
                                        <td><span class="text-success">+$1400</span></td>
                                        <td class="actions">
                                            <a href="#" class="text-info mr-2" title="Edit"><i class="fa fa-pencil"></i></a>
                                            <a href="#" class="text-danger mr-2" title="Delete"><i class="fa fa-trash-o"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div id="columnChart1"></div>
                                        </td>
                                        <td>
                                            <span class="d-block">Phone</span></td>
                                        <td><span class="text-primary">$65</span></td>
                                        <td class="actions">
                                            <a href="#" class="text-info mr-2" title="Edit"><i class="fa fa-pencil"></i></a>
                                            <a href="#" class="text-danger mr-2" title="Delete"><i class="fa fa-trash-o"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div id="pieChart1"></div>
                                        </td>
                                        <td>
                                            <span  class="d-block">Television </span></td>
                                        <td><span class="text-danger">-$260</span></td>
                                        <td class="actions">
                                            <a href="#" class="text-info mr-2" title="Edit"><i class="fa fa-pencil"></i></a>
                                            <a href="#" class="text-danger mr-2" title="Delete"><i class="fa fa-trash-o"></i></a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- /page content -->
    
            <!-- footer content -->
            <footer class="footer">
                <div class="float-right">
                    Admin Template by <a href="javascript:void(0)" class="company-name text-theme">
                    <span class="icon-admin-logo"></span>
                </a>
                </div>
                <div class="clearfix"></div>
            </footer>
            
            <!-- /footer content -->

        </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './shared/components/HeaderComponent'

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
};
</script>

<style>

</style>
