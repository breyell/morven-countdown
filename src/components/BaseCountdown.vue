<template>
  <vue-countdown :time="time" v-slot="{ days, hours, minutes, seconds }" class="container" tag="div">
    <div class="countdown">
      <div class="days">
        <div class="days-number">{{ days }}</div>
        <div class="days-label">days</div>
      </div>
      <div class="clock">
        <div class="clock-number">{{ hours }} : {{ minutes }} : {{ seconds }}</div>
        <div class="clock-labels">
          <div class="hours">hours</div>
          <div class="minutes">minutes</div>
          <div class="seconds">seconds</div>
        </div>
      </div>
    </div>
    <div class="fact">
      <div class="fact-lead">On July 30th, 1772...</div>
      <div class="fact-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae deserunt exercitationem repellendus. Delectus praesentium eveniet error dolore repudiandae, earum voluptas id eius saepe officiis pariatur similique perferendis odio asperiores deserunt.</div>
    </div>
  </vue-countdown>
</template>

<script>
export default {
  data() {
    const now = new Date();
    const targetDate = new Date('July 4, 2026');

    return {
      time: targetDate - now,
    };
  },
}
</script>

<style scoped>
  .container {
    padding: 30px;
    background-color: #d5d8c5;
    color: #3b5548;
  }

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
