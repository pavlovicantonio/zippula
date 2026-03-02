<template>
  <v-container fluid class="how-it-works">
    <v-row justify="center" align="center" class="min-h-screen py-12">
      <v-col cols="12" class="text-center mb-8">
        <h1 class="text mb-4">How It Works</h1>
        <p class="text-h6 text-grey-darken-1">Get started in four simple steps</p>
      </v-col>

      <!-- Desktop Layout -->
      <v-col cols="12" class="d-none d-md-block">
        <v-row justify="center" align="start">
          <template v-for="(step, index) in steps" :key="index">
            <v-col cols="auto" class="d-flex flex-column align-center text-center px-4" style="max-width: 250px;">
              <div class="step-wrapper">
                <!-- Icon Circle -->
                <v-sheet
                  class="icon-circle mb-6 elevation-4"
                  rounded="circle"
                  width="96"
                  height="96"
                >
                  <v-icon :icon="step.icon" size="48" style="color: #232526;"></v-icon>
                </v-sheet>

                <!-- Step Number -->
                <v-sheet
                  class="step-number mb-4 elevation-2"
                  rounded="circle"
                  width="40"
                  height="40"
                >
                  <span class="text-white text-h6">{{ index + 1 }}</span>
                </v-sheet>

                <!-- Title -->
                <h3 class="text-h5 mb-3 title-fixed">{{ step.title }}</h3>

                <!-- Description -->
                <p class="text-body-2 text-grey-darken-1 description-fixed">
                  {{ step.description }}
                </p>
              </div>
            </v-col>

            <!-- Arrow between steps - aligned with icon -->
            <v-col v-if="index < steps.length - 1" cols="auto" class="arrow-container-desktop px-2">
              <v-icon icon="mdi-arrow-right" size="32" style="color: #232526;"></v-icon>
            </v-col>
          </template>
        </v-row>
      </v-col>

      <!-- Mobile Layout -->
      <v-col cols="12" class="d-md-none">
        <v-row>
          <v-col
            v-for="(step, index) in steps"
            :key="index"
            cols="12"
            class="d-flex flex-column align-center text-center"
          >
            <!-- Icon Circle -->
            <v-sheet
              class="icon-circle mb-4 elevation-4"
              rounded="circle"
              width="80"
              height="80"
            >
              <v-icon :icon="step.icon" size="40" style="color: #232526;"></v-icon>
            </v-sheet>

            <!-- Step Number -->
            <v-sheet
              class="step-number mb-3 elevation-2"
              rounded="circle"
              width="40"
              height="40"
            >
              <span class="text-white text-h6">{{ index + 1 }}</span>
            </v-sheet>

            <!-- Title -->
            <h3 class="text-h5 mb-2">{{ step.title }}</h3>

            <!-- Description -->
            <p class="text-body-2 text-grey-darken-1 mb-6" style="max-width: 300px;">
              {{ step.description }}
            </p>

            <!-- Arrow between steps -->
            <v-icon
              v-if="index < steps.length - 1"
              icon="mdi-arrow-down"
              size="32"
              style="color: #232526;"
              class="mb-6"
            ></v-icon>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const steps = ref([
  {
    icon: 'mdi-package-variant',
    title: 'Deliver',
    description: 'Send us your Zippo and let us know what you want restored or customized.',
  },
  {
    icon: 'mdi-calendar-clock',
    title: 'Schedule',
    description: 'We schedule the repair and set a timeline for completion that works for you.',
  },
  {
    icon: 'mdi-hammer-wrench',
    title: 'Repair',
    description: 'Complete restoration, cleaning, and part replacement for your Zippo.',
  },
  {
    icon: 'mdi-truck',
    title: 'Complete',
    description: 'Complete your payment and we ship your fully restored Zippo back to you.',
  },
]);
</script>

<style scoped>
.how-it-works {
  background-color: #ffffff;
  min-height: 100vh;
}

.text{
    font-family: 'Fredoka', sans-serif;
    font-size: clamp(2.5rem, 5vw, 3rem);
}

.min-h-screen {
  min-height: 100vh;
}

.icon-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 4px solid #232526;
  transition: transform 0.3s ease;
}

.icon-circle:hover {
  transform: scale(1.1);
}

.step-number {
  background-color: #232526;
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow-container-desktop {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 48px; /* Half of icon height (96px / 2) to center with icon */
}

.step-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

.title-fixed {
  min-height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.description-fixed {
  max-width: 220px;
  min-height: 96px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
}
</style>