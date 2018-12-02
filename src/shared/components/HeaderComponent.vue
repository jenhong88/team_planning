<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link :to="'/'">Home</router-link>
    <router-link :to="'calendar'">Calendar</router-link>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data () {
    return {
      msg: 'HEADER'
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	background: green;
	color: red;
}
</style>
