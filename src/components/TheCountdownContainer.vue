<script setup lang="ts">
import TheCountdown from '@/components/TheCountdown.vue'

import { ref } from 'vue'
import type { Ref } from 'vue'

const now: Date = new Date()
const targetDate: Date = new Date('July 4, 2026')

const timeRemaining: Ref<number> = ref(targetDate.valueOf() - now.valueOf())
</script>

<template>
  <VueCountdown
    :time="timeRemaining"
    v-slot="{ days, hours, minutes, seconds }"
    class="container"
    tag="div"
  >
    <TheCountdown
      :days="days"
      :hours="hours"
      :minutes="minutes"
      :seconds="seconds"
    />
  </VueCountdown>
</template>
