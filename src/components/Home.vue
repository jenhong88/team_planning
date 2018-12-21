<template>
  <div class="hello">
    <header />
    <h1>{{ msg }}</h1>
    <button v-on:click="calculate">Calculate</button>

    <ul>
      <li v-for="entry in entries">
        <!-- {{ entry.draw_date | moment("MMMM Do YYYY") }} -->
        <!-- {{ entry.winning_numbers }} -->
        <!-- {{ entry.mega_ball }} -->
        <div>{{ entry.winning_numbers | first }}</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </li>
    </ul>

    <!-- <b-table striped hover :items="average"></b-table> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Calendar",
  data() {
    return {
      msg: "WELCOME TO TEAMDREAM",
      entries: [],
      errors: [],
      average: [
        { first: "", second: "", third: "", fourth: "", fifth: "", mega: "" }
      ]
    };
  },
  created() {
    axios
      .get(`https://data.ny.gov/resource/5xaw-6ayf.json`)
      .then(response => {
        const allEntries = response.data;

        function colorCheck(num){
          if(num >= 30){
            return "high"
          }else{
            return "low"
          }
        }

        allEntries.map(entry => {
          const numbers = entry.winning_numbers;
          entry.first = colorCheck(numbers.split(" ")[0]);
          entry.second = numbers.split(" ")[1];
          entry.third = numbers.split(" ")[2];
          entry.fourth = numbers.split(" ")[3];
          entry.fifth = numbers.split(" ")[4];
          entry.mega = entry.mega_ball;
        });
        this.entries = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods: {
    calculate() {
      const data = this.entries;
      const ave = this.average[0];
      let first = 0;
      let second = 0;
      let third = 0;
      let fourth = 0;
      let fifth = 0;
      let mega = 0;

      data.map(e => {
        const { winning_numbers, draw_date } = e;
        const splitNumbers = winning_numbers.split(" ");

        if (
          parseInt(draw_date.split("")[2]) === 1 &&
          parseInt(draw_date.split("")[3]) >= 2
        ) {
          first = parseInt(splitNumbers[0]) + first;
          second = parseInt(splitNumbers[1]) + second;
          third = parseInt(splitNumbers[2]) + third;
          fourth = parseInt(splitNumbers[3]) + fourth;
          fifth = parseInt(splitNumbers[4]) + fifth;
          mega = parseInt(e.mega_ball) + mega;
        }
      });
      ave.first = first / data.length;
      ave.second = second / data.length;
      ave.third = third / data.length;
      ave.fourth = fourth / data.length;
      ave.fifth = fifth / data.length;
      ave.mega = mega / data.length;
    }
  },
  filters: {
    first: function(value) {
      const first = value.split(" ")[0];
      return first;
    },
    color: function(value) {
      if (value >= 30) {
        return "high";
      } else {
        return "low";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
  text-align: center;
}
li {
  font-size: 10px;
  height: 12px;
  widows: 100%;
}
</style>
