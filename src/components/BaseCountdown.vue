<script setup>
import axios from 'axios'
import { onMounted, ref, computed } from 'vue'
let facts = ref(undefined)

const props = defineProps({
  days: Number,
  hours: Number,
  minutes: Number,
  seconds: Number,
})

onMounted(() => {
  getData()

  setInterval(() => {
    if (props.hours === 1) {
      getData()
      console.log('getting data!')
    }
  }, 60 * 60 * 1000) // run once per hour
})

let currentFact = computed(() => {
  if (!facts.value) {
    return null
  }

  return facts.value.facts.find((fact) => fact.daysRemaining === props.days)
})

let getData = () => {
  axios
    // .get("http://localhost:3001/facts") //  /for testing
    .get(
      'https://api.sheety.co/20ee3c95295b1712249da847304fdce8/factSheet/facts'
    )
    .then((response) => (facts.value = response.data))
}
</script>

<template>
  <div class="countdown">
    <div class="days">
      <div class="days-number">{{ days }}</div>
      <div class="days-label">days</div>
    </div>
    <div class="clock">
      <div class="clock-number">
        {{ hours }} : {{ minutes }} : {{ seconds }}
      </div>
      <div class="clock-labels">
        <div class="hours">hours</div>
        <div class="minutes">minutes</div>
        <div class="seconds">seconds</div>
      </div>
    </div>
  </div>
  <div v-if="currentFact" class="fact">
    <div class="fact-lead">{{ currentFact.lead }}</div>
    <div class="fact-text">{{ currentFact.fact }}</div>
  </div>
</template>

<style scoped>
.countdown {
  display: flex;
}

.days {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  color: #fff;
  background-color: #3b5548;
}
.days-number {
  display: inline-block;
  font-size: 80px;
}
.days-label {
  text-transform: uppercase;
}

.clock {
  margin-left: 30px;
  margin-top: auto;
  margin-bottom: 2px;
}
.clock-number {
  font-size: 60px;
}
.clock-labels {
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
}
.hours,
.minutes,
.seconds {
  display: inline-block;
  text-transform: uppercase;
}

.fact {
  margin-top: 30px;
}
.fact-lead {
  text-transform: uppercase;
}
.fact-text {
  margin-top: 10px;
}
</style>
