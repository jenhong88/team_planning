<template>
  <div class="hello">
    <Header/>
    <h1>{{ msg }}</h1>
    <v-calendar :attributes='attrs'>
    </v-calendar>
<!--     <v-date-picker
      mode='single'
      v-model='selectedValue'>
    </v-date-picker> -->
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      msg: 'CALENDAR',
      selectedValue: new Date(),
      attrs: [
        {
          key: 'today',
          dates: [
            { start: new Date(2018, 11, 1), end: new Date(2018, 11, 5) },
            { start: new Date(2018, 11, 15), span: 5 } // Span is number of days
          ],
          highlight: {
            backgroundColor: '#ff8080',
          },
          // Just use a normal style
          contentStyle: {
            color: '#fafafa',
          },
          // Our new popover here
          popover: {
            label: 'You just hovered over today\'s date!',
          }
        },
      ],
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
