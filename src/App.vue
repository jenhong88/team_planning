<template>
  <div id="app" class="nav-md theme-green">
    <div class="main-container">
        <!-- sidebar -->
        <Sidebar/>
        <!-- /sidebar -->
        <div class="content-wrapper">
            <HeaderComponent/>
            <!-- page content -->
            <div class="main-content small-gutter" role="main">
                <div class="row bg-title clearfix page-title">
                    <div class="col-12 col-lg-3">
                        <h4 class="page-title">Welcome!</h4>
                        <!-- <button v-on:click="showToastr">TOASTER</button> -->
                    </div>
                </div>
                <router-view/>
            </div>
            <!-- /page content -->
        </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './shared/components/HeaderComponent'
import Sidebar from './shared/components/Sidebar'



export default {
  name: 'App',
  components: {
    HeaderComponent,
    Sidebar
  },
  mounted: function () {
      this.showToastr()
   },
  methods: {
    showToastr: function () {
        this.$toastr('success', 'it works!', 'Yeahh')
    }
  }
};
</script>

<style lang="scss">
@import './assets/styles/sass/main.scss'

</style>
