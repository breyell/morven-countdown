<script setup>
import BaseCountdown from "./components/BaseCountdown.vue";
import { ref } from "vue";

const now = new Date();
const targetDate = new Date("July 4, 2026");

let time = ref(targetDate - now);
</script>

<template>
  <vue-countdown
    :time="time"
    v-slot="{ days, hours, minutes, seconds }"
    class="container"
    tag="div"
  >
    <BaseCountdown
      :days="days"
      :hours="hours"
      :minutes="minutes"
      :seconds="seconds"
    />
  </vue-countdown>
</template>

<style scoped>
.container {
  padding: 30px;
  background-color: #d5d8c5;
  color: #3b5548;
}
</style>
