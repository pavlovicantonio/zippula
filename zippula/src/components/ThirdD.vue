<template>
  <v-sheet class="services-section">
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(item, index) in items"
          :key="index"
          class="service-col"
          :style="{ '--delay': index * 0.1 + 's' }"
        >
          <v-card 
            class="service-card"
            elevation="4"
            rounded="xl"
          >
            <v-card-text class="service-item">
              <!-- Icon Circle -->
              <div class="icon-circle">
                <v-icon class="service-icon" size="70">{{ item.icon }}</v-icon>
              </div>

              <!-- Title -->
              <h3 class="icon-title">
                {{ item.title }}
              </h3>

              <!-- Description -->
              <p class="icon-text">
                {{ item.text }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
const items = [
  { icon: 'mdi-shield-check', title: 'Restoration', text: 'Complete Zippo lighter restoration' },
  { icon: 'mdi-fire', title: 'Ignition System', text: 'Flint and spark wheel replacement' },
  { icon: 'mdi-waves', title: 'Wick Replacement', text: 'New wick installed and adjusted' },
  { icon: 'mdi-cloud', title: 'Cotton Replacement', text: 'Fresh cotton for optimal fuel absorption' },
  { icon: 'mdi-gas-station', title: 'Fuel Refill', text: 'Proper fuel refill and testing' },
  { icon: 'mdi-wrench', title: 'Full Service', text: 'Complete maintenance ready to use' }
]
</script>

<style scoped>
.services-section {
  width: 100%;
  min-height: 70vh;
  padding: 80px 0;
  background: #f9fafb;
}

/* Animation */
.service-col {
  animation: fadeInUp 0.6s ease-out backwards;
  animation-delay: var(--delay);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Card Container */
.service-card {
  height: 100%;
  background: #ffffff !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
}

.service-item {
  text-align: center;
  padding: 32px 24px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Icon Circle - Original colors */
.icon-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 2px solid #333;
  margin: 0 auto 24px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: #232526;
  background: -webkit-linear-gradient(to right, #414345, #232526);
  background: linear-gradient(to right, #414345, #232526);
  cursor: pointer;
}

.icon-circle:hover {
  transform: scale(1.15);
}

.service-icon {
  color: #ffffff !important;
}

/* Title */
.icon-title {
  font-weight: 600;
  margin-bottom: 12px;
  font-family: 'Fredoka', sans-serif;
  font-size: 1.5rem;
  color: #000000;
}

/* Text */
.icon-text {
  font-size: 1rem;
  opacity: 0.7;
  font-family: 'Fredoka', sans-serif;
  line-height: 1.6;
  color: #000000;
  margin: 0;
}

/* Responsive */
@media (max-width: 960px) {
  .icon-circle {
    width: 120px;
    height: 120px;
  }
}

@media (max-width: 600px) {
  .service-item {
    padding: 24px 16px !important;
  }
  
  .icon-circle {
    width: 140px;
    height: 140px;
  }
  
  .icon-title {
    font-size: 1.25rem;
  }
  
  .icon-text {
    font-size: 0.9rem;
  }
}
</style>