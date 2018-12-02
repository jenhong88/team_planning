<template>
  <div class="hello">
    <Header/>
    <h1>{{ msg }}</h1>
    <v-calendar
      is-double-paned>
    </v-calendar>
    <v-date-picker
      mode='single'
      v-model='selectedValue'>
    </v-date-picker>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      msg: 'CALENDAR',
      selectedValue: new Date(),
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
