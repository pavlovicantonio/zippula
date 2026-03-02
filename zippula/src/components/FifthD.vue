<template>
  <v-sheet class="stats-section">
    <v-container fluid class="py-16">
      <v-row justify="center" align="center" class="min-h-screen">
        <v-col cols="12" class="text-center mb-12">
          <h2 class="stats-heading mb-4">Naši Rezultati Govore Za Sebe</h2>
          <p class="stats-subtitle text-grey-darken-1">
            Pouzdanost i kvalitet koji se meri godinama iskustva
          </p>
        </v-col>

        <v-col cols="12">
        <div ref="statsRef">
          <v-row justify="center" class="stats-container">
            <!-- Stat 1: Restauriranih -->
            <v-col cols="12" md="4" class="text-center px-8 mb-8 mb-md-0">
              <v-card class="stat-card pa-8 elevation-8" rounded="xl">
                <v-icon icon="mdi-hammer-wrench" size="64" class="stat-icon mb-6"></v-icon>
                <div class="stat-number-wrapper mb-4">
                  <span class="stat-number">{{ animatedStats.restored }}</span>
                  <span class="stat-plus">+</span>
                </div>
                <div class="stat-label">Restauriranih Zippo Upaljača</div>
                <v-divider class="my-4"></v-divider>
                <p class="text-body-2 text-grey-darken-1">
                  Svaki projekat je urađen sa maksimalnom pažnjom i posvećenošću
                </p>
              </v-card>
            </v-col>

            <!-- Stat 2: Godina -->
            <v-col cols="12" md="4" class="text-center px-8 mb-8 mb-md-0">
              <v-card class="stat-card pa-8 elevation-8" rounded="xl">
                <v-icon icon="mdi-calendar-clock" size="64" class="stat-icon mb-6"></v-icon>
                <div class="stat-number-wrapper mb-4">
                  <span class="stat-number">{{ animatedStats.years }}</span>
                  <span class="stat-plus">+</span>
                </div>
                <div class="stat-label">Godina Iskustva</div>
                <v-divider class="my-4"></v-divider>
                <p class="text-body-2 text-grey-darken-1">
                  Decenija posvećenog rada i usavršavanja veštine
                </p>
              </v-card>
            </v-col>

            <!-- Stat 3: Zadovoljnih -->
            <v-col cols="12" md="4" class="text-center px-8">
              <v-card class="stat-card pa-8 elevation-8" rounded="xl">
                <v-icon icon="mdi-emoticon-happy" size="64" class="stat-icon mb-6"></v-icon>
                <div class="stat-number-wrapper mb-4">
                  <span class="stat-number">{{ animatedStats.satisfaction }}</span>
                  <span class="stat-percent">%</span>
                </div>
                <div class="stat-label">Zadovoljnih Klijenata</div>
                <v-divider class="my-4"></v-divider>
                <p class="text-body-2 text-grey-darken-1">
                  Garancija kvaliteta i vrhunska usluga bez kompromisa
                </p>
              </v-card>
            </v-col>
          </v-row></div>
        </v-col>

        <!-- Additional Info -->
        <v-col cols="12" class="text-center mt-12">
          <v-chip class="px-6 py-2" size="large" color="#232526">
            <v-icon icon="mdi-star" class="mr-2"></v-icon>
            Svi naši klijenti preporučuju našu uslugu
          </v-chip>
        </v-col>
      </v-row>
       
    </v-container>
  </v-sheet>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';

const statsRef = ref(null);
const hasAnimated = ref(false);

const targetStats = {
  restored: 500,
  years: 10,
  satisfaction: 100,
};

const animatedStats = reactive({
  restored: 0,
  years: 0,
  satisfaction: 0,
});

const animateValue = (key, start, end, duration) => {
  const startTime = performance.now();
  const range = end - start;

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    
    animatedStats[key] = Math.floor(start + range * easeOut);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      animatedStats[key] = end;
    }
  };

  requestAnimationFrame(animate);
};

const startAnimation = () => {
  if (hasAnimated.value) return;
  
  hasAnimated.value = true;
  
  // Different durations for variety
  animateValue('restored', 0, targetStats.restored, 2000);
  animateValue('years', 0, targetStats.years, 1800);
  animateValue('satisfaction', 0, targetStats.satisfaction, 2200);
};

let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          startAnimation();
        }
      });
    },
    {
      threshold: 0.3, // Trigger when 30% of the section is visible
    }
  );

  if (statsRef.value) {
    observer.observe(statsRef.value);
  }
});

onUnmounted(() => {
  if (observer && statsRef.value) {
    observer.unobserve(statsRef.value);
  }
});
</script>

<style scoped>
.stats-section {
  background: linear-gradient(135deg, #232526 0%, #414345 100%);
  position: relative;
  overflow: hidden;
}

.stats-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.min-h-screen {
  min-height: 100vh;
}

.stats-heading {
  font-family: 'Fredoka', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: white;
  font-weight: 700;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.stats-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto;
}

.stat-card {
  background: white;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 3px solid transparent;
}

.stat-card:hover {
  transform: translateY(-12px) scale(1.02);
  border-color: #232526;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
}

.stat-icon {
  color: #232526;
  transition: transform 0.3s ease;
}

.stat-card:hover .stat-icon {
  transform: scale(1.2) rotate(5deg);
}

.stat-number-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
}

.stat-number {
  font-family: 'Fredoka', sans-serif;
  font-size: clamp(3.5rem, 6vw, 5rem);
  font-weight: 800;
  color: #232526;
  line-height: 1;
  background: linear-gradient(135deg, #232526 0%, #414345 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-plus,
.stat-percent {
  font-family: 'Fredoka', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #232526;
  line-height: 1;
}

.stat-label {
  font-family: 'Fredoka', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #232526;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@keyframes pulse-border {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(35, 37, 38, 0.7);
  }
  50% {
    box-shadow: 0 0 0 20px rgba(35, 37, 38, 0);
  }
}

.stat-card {
  animation: pulse-border 3s infinite;
}

.stat-card:nth-child(1) {
  animation-delay: 0s;
}

.stat-card:nth-child(2) {
  animation-delay: 0.5s;
}

.stat-card:nth-child(3) {
  animation-delay: 1s;
}
</style>