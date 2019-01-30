<template>
  <div class="hello">
    <header />
    <h1>{{ msg }}</h1>
    <button v-on:click="calculate">Calculate</button>

    <!--
      <ul>
        <li>{{ average[0].first }}</li>
        <li>{{ average[0].second }}</li>
        <li>{{ average[0].third }}</li>
        <li>{{ average[0].fourth }}</li>
        <li>{{ average[0].fifth }}</li>
        <li>Mega: {{ average[0].mega }}</li>
      </ul>
    -->

    <ul>
      <li v-for="number in numberStat.sort()">
        <!-- {{ entry.draw_date | moment("MMMM Do YYYY") }} -->
        <!-- {{ entry.winning_numbers }} -->
        <!-- {{ entry.mega_ball }} -->
        <!-- <div>{{ entry.winning_numbers | first }}</div> -->
        {{ number }}
      </li>
    </ul>

    <!-- <b-table striped hover :items="average"></b-table> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Lotto",
  data() {
    return {
      msg: "WELCOME TO TEAMDREAM",
      entries: [],
      errors: [],
      average: [
        { first: "", second: "", third: "", fourth: "", fifth: "", mega: "" }
      ],
      numberStat: [],
      availableNumbers: {}
    };
  },
  created() {
    axios
      .get(`https://data.ny.gov/resource/5xaw-6ayf.json`)
      .then(response => {
        const allEntries = response.data;

        allEntries.map(entry => {
          let numbers = entry.winning_numbers;

          entry.first = Math.round(numbers.split(" ")[0]);
          entry.second = Math.round(numbers.split(" ")[1]);
          entry.third = Math.round(numbers.split(" ")[2]);
          entry.fourth = Math.round(numbers.split(" ")[3]);
          entry.fifth = Math.round(numbers.split(" ")[4]);
          entry.mega = Math.round(entry.mega_ball);

          const first = Math.round(numbers.split(" ")[0]);
          const second = Math.round(numbers.split(" ")[1]);
          const third = Math.round(numbers.split(" ")[2]);
          const fourth = Math.round(numbers.split(" ")[3]);
          const fifth = Math.round(numbers.split(" ")[4]);
          const mega = Math.round(entry.mega_ball);

          this.numberStat.push(first);
          // console.log(first)
          let stats = this.availableNumbers;
          
          // this.availableNumbers.first = "hello"

          stats.map(e => {
            // console.log(e)
            if (e === first) {
              // console.log("MATCHED ==== ", e);
            }
          });

          stats.push(second);
          stats.push(third);
          stats.push(fourth);
          stats.push(fifth);
          stats.push(mega);
        });
        this.entries = allEntries;
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
      ave.first = Math.round(first / data.length);
      ave.second = Math.round(second / data.length);
      ave.third = Math.round(third / data.length);
      ave.fourth = Math.round(fourth / data.length);
      ave.fifth = Math.round(fifth / data.length);
      ave.mega = Math.round(mega / data.length);
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
  font-size: 20px;
  line-height: 20px;
  widows: 100%;
  text-align: left;
  display: inline;
}
</style>
