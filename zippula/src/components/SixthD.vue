<template>
  <v-sheet class="about-section">
    <v-container class="py-16">
      <!-- Header -->
      <v-row justify="center" class="mb-12">
        <v-col cols="12" class="text-center">
          <v-chip class="mb-4 custom-chip" size="large" variant="outlined">
            <v-icon icon="mdi-account-heart" class="mr-2"></v-icon>
            O Meni
          </v-chip>
          <h2 class="main-heading mb-4">Strast Koja Je Postala Posao</h2>
          <p class="subtitle text-grey-darken-1">
            Od hobija do profesionalne restauracije - svaki Zippo ima svoju priču
          </p>
        </v-col>
      </v-row>

      <!-- Main Story Section -->
      <v-row align="center" class="mb-16">
        <!-- Left Side - Image -->
        <v-col cols="12" md="6" class="mb-8 mb-md-0">
          <v-card class="image-card elevation-8" rounded="xl">
            <v-img
              src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=600&fit=crop"
              cover
              height="500"
              class="rounded-xl"
            >
              <div class="image-overlay">
                <v-icon icon="mdi-heart-outline" size="80" class="heart-icon"></v-icon>
              </div>
            </v-img>
          </v-card>
        </v-col>

        <!-- Right Side - Story -->
        <v-col cols="12" md="6">
          <div class="content-wrapper pl-md-8">
            <div class="d-flex align-center mb-4">
              <v-icon icon="mdi-fire" color="#232526" size="32" class="mr-3"></v-icon>
              <h3 class="section-title">Kako Je Počelo</h3>
            </div>
            
            <p class="text-body-1 mb-4 text-grey-darken-2">
              Sve je počelo iz čiste radoznalosti i ljubavi prema retro predmetima. Prvi Zippo upaljač 
              koji mi je došao u ruke bio je poklon od dede - zarđao, nefunkcionalan, ali sa neverovatnom 
              pričom. Umesto da ga bacim, odlučio sam da ga restauriram.
            </p>
            
            <p class="text-body-1 mb-4 text-grey-darken-2">
              Taj prvi projekat me je potpuno fascinirao. Proces čišćenja, poliranја, vraćanja funkcionalnosti - 
              svaki korak je bio kao puzzle koji se lagano slaže. Kada sam upalio taj upaljač nakon mesec dana 
              rada, znao sam da sam pronašao nešto posebno.
            </p>

            <p class="text-body-1 mb-6 text-grey-darken-2">
              Danas, nakon godina učenja i usavršavanja, to što je počelo kao hobi u garaži postao je 
              side job koji me ispunjava. Svaki upaljač koji restauriram nosi deo te prve magije.
            </p>

            <v-card class="quote-card pa-6 elevation-4" rounded="lg">
              <v-icon icon="mdi-format-quote-open" size="40" class="quote-icon mb-3"></v-icon>
              <p class="text-h6 font-italic mb-3" style="font-family: 'Fredoka', sans-serif;">
                "Ovo nije samo posao - ovo je strast koju imam privilegiju da radim svaki dan nakon regularnog posla."
              </p>
              <v-divider class="my-3"></v-divider>
              <p class="text-caption text-grey-darken-1">
                Svaki Zippo koji prođe kroz moje ruke dobija deo moje pažnje i ljubavi prema zanatu
              </p>
            </v-card>
          </div>
        </v-col>
      </v-row>

      <!-- Why I Love This Section -->
      <v-row class="mb-16">
        <v-col cols="12" class="text-center mb-8">
          <h3 class="section-title mb-3">Zašto Volim Ovo Što Radim</h3>
          <p class="text-body-1 text-grey-darken-1">
            Svaki dan donosi nove izazove i priče
          </p>
        </v-col>

        <v-col
          v-for="(reason, index) in reasons"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="reason-card pa-6 h-100" elevation="4" rounded="xl">
            <v-sheet
              :class="['reason-icon-bg', 'mb-4', `reason-${index + 1}`]"
              class="mx-auto"
              rounded="lg"
              width="80"
              height="80"
            >
              <v-icon :icon="reason.icon" size="40" class="reason-icon"></v-icon>
            </v-sheet>
            <h4 class="reason-title mb-3">{{ reason.title }}</h4>
            <p class="text-body-2 text-grey-darken-1">{{ reason.description }}</p>
          </v-card>
        </v-col>
      </v-row>

      <!-- My Approach Section -->
      <v-row class="mb-16">
        <v-col cols="12" md="6" order="2" order-md="1">
          <div class="pr-md-8">
            <h3 class="section-title mb-6">Moj Pristup</h3>
            
            <v-timeline side="end" density="compact" class="custom-timeline">
              <v-timeline-item
                v-for="(step, index) in approach"
                :key="index"
                :dot-color="index === approach.length - 1 ? '#232526' : '#666'"
                size="small"
              >
                <template v-slot:icon>
                  <v-icon :icon="step.icon" size="20" color="white"></v-icon>
                </template>
                
                <v-card class="approach-card pa-4 mb-3" elevation="2" rounded="lg">
                  <h4 class="approach-title mb-2">{{ step.title }}</h4>
                  <p class="text-body-2 text-grey-darken-1">{{ step.description }}</p>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </div>
        </v-col>

        <v-col cols="12" md="6" order="1" order-md="2" class="mb-8 mb-md-0">
          <v-card class="passion-card pa-8 text-center" elevation="0" rounded="xl">
            <v-icon icon="mdi-tools" size="80" class="tools-icon mb-6"></v-icon>
            <h3 class="passion-title mb-4">Radim Sa Srcem</h3>
            <p class="text-body-1 mb-6 text-white">
              Svaki projekat radim sa istom pažnjom i posvećenošću kao da je moj vlastiti. 
              Nakon regularnog posla, ovo je moj način da se opustim i radim nešto što volim.
            </p>
            
            <v-row class="passion-stats">
              <v-col cols="6">
                <div class="passion-stat-number">Svaki Dan</div>
                <div class="passion-stat-label">Učim Nešto Novo</div>
              </v-col>
              <v-col cols="6">
                <div class="passion-stat-number">100%</div>
                <div class="passion-stat-label">Pažnje i Ljubavi</div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <!-- Values Grid -->
      <v-row class="mb-12">
        <v-col cols="12" class="text-center mb-8">
          <h3 class="section-title">Vrednosti Koje Neguju</h3>
        </v-col>

        <v-col
          v-for="(value, index) in values"
          :key="index"
          cols="12"
          sm="6"
          md="3"
        >
          <v-card class="value-card text-center pa-6 h-100" elevation="0" rounded="xl">
            <v-icon :icon="value.icon" size="48" class="value-icon mb-4"></v-icon>
            <h4 class="value-title mb-2">{{ value.title }}</h4>
            <p class="text-caption text-grey-darken-1">{{ value.description }}</p>
          </v-card>
        </v-col>
      </v-row>

      <!-- CTA Section -->
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-card class="cta-card pa-8 text-center" rounded="xl" elevation="8">
            <v-row align="center">
              <v-col cols="12" md="8" class="text-md-left text-center">
                <div class="d-flex align-center justify-center justify-md-start mb-3">
                  <v-icon icon="mdi-hand-wave" size="32" class="mr-3 wave-icon"></v-icon>
                  <h3 class="cta-title">Hajde Da Razgovaramo!</h3>
                </div>
                <p class="text-body-1 mb-md-0">
                  Imate Zippo koji treba restaurirati? Pošaljite mi poruku i pričajmo o vašem upaljaču. 
                  Sa zadovoljstvom ću saslušati njegovu priču!
                </p>
              </v-col>
              <v-col cols="12" md="4" class="text-center">
                <v-btn size="x-large" class="cta-button text-none" rounded="pill" block>
                  <v-icon icon="mdi-email-outline" class="mr-2"></v-icon>
                  Kontaktiraj Me
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue';

const reasons = ref([
  {
    icon: 'mdi-puzzle',
    title: 'Svaki Upaljač Je Misterija',
    description: 'Nikada ne znam šta će mi doneti sledeći projekat. Svaki upaljač krije svoju priču, patinu, oštećenja koja pričaju gde je sve bio.',
  },
  {
    icon: 'mdi-hand-heart',
    title: 'Rad Sa Rukama',
    description: 'Nakon celog dana za računarom, nema boljeg osećaja nego prljavi ruke i videti fizički rezultat svog rada.',
  },
  {
    icon: 'mdi-emoticon-happy',
    title: 'Radost Klijenata',
    description: 'Kada vidim osmeh na licu kada klijent dobije nazad svoj omiljeni upaljač - to je nemerljivo. To je razlog zašto ovo radim.',
  },
  {
    icon: 'mdi-history',
    title: 'Vraćam Uspomene',
    description: 'Mnogi upaljači nose emotivnu vrednost - pokloni, nasleđe, sećanja. Privilegija je biti deo tog procesa očuvanja uspomena.',
  },
  {
    icon: 'mdi-school',
    title: 'Konstantno Učenje',
    description: 'Svaki dan učim nešto novo - nove tehnike, materijale, istoriju modela. Nikada ne dosadi.',
  },
  {
    icon: 'mdi-heart-flash',
    title: 'Terapeutski Efekat',
    description: 'Poliranje, čišćenje, fino podešavanje - to je moja meditacija. Posle stresnog dana, ovo me vraća u balans.',
  },
]);

const approach = ref([
  {
    icon: 'mdi-handshake',
    title: 'Razgovor i Razumevanje',
    description: 'Prvo saslušam priču o upaljaču i klijentova očekivanja.',
  },
  {
    icon: 'mdi-magnify',
    title: 'Detaljna Analiza',
    description: 'Pregledram svaki detalj i kreiram plan restauracije.',
  },
  {
    icon: 'mdi-information',
    title: 'Transparentna Komunikacija',
    description: 'Informišem o stanju, procesu i realnim očekivanjima.',
  },
  {
    icon: 'mdi-tools',
    title: 'Pažljiva Restauracija',
    description: 'Radim sa maksimalnom pažnjom, korak po korak.',
  },
  {
    icon: 'mdi-camera',
    title: 'Dokumentacija Procesa',
    description: 'Fotografišem proces da klijenti vide transformaciju.',
  },
  {
    icon: 'mdi-check-circle',
    title: 'Kontrola Kvaliteta',
    description: 'Pre predaje testirm sve funkcije višestruko.',
  },
]);

const values = ref([
  {
    icon: 'mdi-handshake',
    title: 'Poštenje',
    description: 'Nikad neću obećati nešto što ne mogu isporučiti',
  },
  {
    icon: 'mdi-clock-check',
    title: 'Pouzdanost',
    description: 'Dogovoreni rokovi se poštuju',
  },
  {
    icon: 'mdi-diamond-stone',
    title: 'Kvalitet',
    description: 'Bez kompromisa u radu',
  },
  {
    icon: 'mdi-account-star',
    title: 'Strast',
    description: 'Radim sa ljubavlju prema zanatu',
  },
]);
</script>

<style scoped>
.about-section {
  background: linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%);
  min-height: 100vh;
}

.custom-chip {
  border-color: #232526;
  color: #232526;
  font-weight: 500;
}

.main-heading {
  font-family: 'Fredoka', sans-serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  color: #232526;
  font-weight: 700;
}

.subtitle {
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto;
}

.section-title {
  font-family: 'Fredoka', sans-serif;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  color: #232526;
  font-weight: 600;
}

/* Image Card */
.image-card {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.image-card:hover {
  transform: translateY(-8px);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(35, 37, 38, 0.8) 0%, rgba(35, 37, 38, 0.4) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-card:hover .image-overlay {
  opacity: 1;
}

.heart-icon {
  color: #ffffff;
  animation: heartbeat 1.5s infinite;
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  10%, 30% {
    transform: scale(1.15);
  }
  20%, 40% {
    transform: scale(1);
  }
}

/* Quote Card */
.quote-card {
  background: linear-gradient(135deg, rgba(35, 37, 38, 0.05) 0%, rgba(35, 37, 38, 0.02) 100%);
  border-left: 4px solid #232526;
}

.quote-icon {
  color: #232526;
  opacity: 0.3;
}

/* Reasons Cards */
.reason-card {
  transition: all 0.3s ease;
  border: 2px solid transparent;
  background: white;
}

.reason-card:hover {
  transform: translateY(-10px);
  border-color: #232526;
  box-shadow: 0 12px 28px rgba(35, 37, 38, 0.2) !important;
}

.reason-icon-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.reason-1 {
  background: linear-gradient(135deg, #232526 0%, #414345 100%);
}

.reason-2 {
  background: linear-gradient(135deg, #414345 0%, #232526 100%);
}

.reason-3 {
  background: linear-gradient(135deg, #232526 0%, #5a5b5d 100%);
}

.reason-4 {
  background: linear-gradient(135deg, #5a5b5d 0%, #232526 100%);
}

.reason-5 {
  background: linear-gradient(135deg, #232526 0%, #414345 100%);
}

.reason-6 {
  background: linear-gradient(135deg, #414345 0%, #5a5b5d 100%);
}

.reason-icon {
  color: white;
}

.reason-card:hover .reason-icon-bg {
  transform: scale(1.1) rotate(5deg);
}

.reason-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 1.25rem;
  color: #232526;
  font-weight: 600;
}

/* Approach Timeline */
.custom-timeline {
  margin-left: 0;
}

.approach-card {
  background: white;
  transition: all 0.3s ease;
}

.approach-card:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 16px rgba(35, 37, 38, 0.15) !important;
}

.approach-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 1.1rem;
  color: #232526;
  font-weight: 600;
}

/* Passion Card */
.passion-card {
  background: linear-gradient(135deg, #232526 0%, #414345 100%);
  color: white;
}

.tools-icon {
  color: rgba(255, 255, 255, 0.9);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.passion-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 2rem;
  color: white;
  font-weight: 700;
}

.passion-stats {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid rgba(255, 255, 255, 0.2);
}

.passion-stat-number {
  font-family: 'Fredoka', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.passion-stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}

/* Values Cards */
.value-card {
  background: rgba(35, 37, 38, 0.03);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.value-card:hover {
  background: white;
  border-color: #232526;
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(35, 37, 38, 0.15) !important;
}

.value-icon {
  color: #232526;
  transition: transform 0.3s ease;
}

.value-card:hover .value-icon {
  transform: scale(1.2);
}

.value-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 1.25rem;
  color: #232526;
  font-weight: 600;
}

/* CTA Card */
.cta-card {
  background: white;
  border: 3px solid #232526;
}

.cta-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 1.75rem;
  color: #232526;
  font-weight: 700;
  margin: 0;
}

.wave-icon {
  color: #232526;
  animation: wave 2s ease-in-out infinite;
}

@keyframes wave {
  0%, 100% {
    transform: rotate(0deg);
  }
  10%, 30% {
    transform: rotate(14deg);
  }
  20%, 40% {
    transform: rotate(-8deg);
  }
  50% {
    transform: rotate(14deg);
  }
  60% {
    transform: rotate(0deg);
  }
}

.cta-button {
  background-color: #232526 !important;
  color: white !important;
  font-weight: 600;
  font-family: 'Fredoka', sans-serif;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #414345 !important;
  transform: scale(1.05);
}

.content-wrapper {
  line-height: 1.8;
}

.h-100 {
  height: 100%;
}
</style>