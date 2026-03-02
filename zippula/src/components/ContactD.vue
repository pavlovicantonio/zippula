<template>
  <v-sheet class="contact-section">
    <v-container class="py-16">
      <!-- Header -->
      <v-row justify="center" class="mb-12">
        <v-col cols="12" class="text-center">
          <v-chip class="mb-4 custom-chip" size="large" variant="outlined">
            <v-icon icon="mdi-email" class="mr-2"></v-icon>
            Kontakt
          </v-chip>
          <h2 class="main-heading mb-4">Hajde Da Razgovaramo! 💬</h2>
          <p class="subtitle text-grey-darken-1">
            Imaš pitanje, predlog ili želiš da učiš zajedno? Pošalji mi poruku!
          </p>
        </v-col>
      </v-row>

      <v-row justify="center">
        <!-- Contact Form -->
        <v-col cols="12" md="8" lg="6">
          <v-card class="form-card pa-8" elevation="8" rounded="xl">
            <!-- Success State -->
            <div v-if="formSubmitted" class="text-center py-12">
              <v-icon icon="mdi-check-circle" size="100" color="success" class="mb-6 success-icon"></v-icon>
              <h3 class="success-title mb-4">Poruka Uspješno Poslana! 🎉</h3>
              <p class="text-body-1 text-grey-darken-1 mb-6">
                Hvala ti na poruci! Odgovorit ću ti što prije. 
                Obično odgovorim u roku 24-48 sati. 📬
              </p>
              <v-btn
                color="primary"
                size="large"
                rounded="pill"
                @click="resetForm"
                class="text-none"
              >
                <v-icon icon="mdi-email-plus" class="mr-2"></v-icon>
                Pošalji Drugu Poruku
              </v-btn>
            </div>

            <!-- Form -->
            <v-form v-else ref="formRef" v-model="formValid" @submit.prevent="submitForm">
              <!-- Name Field -->
              <div class="mb-6">
                <label class="field-label mb-2 d-block">
                  <v-icon icon="mdi-account" size="20" class="mr-2"></v-icon>
                  Tvoje Ime *
                </label>
                <v-text-field
                  v-model="formData.name"
                  placeholder="Marko Marković"
                  variant="outlined"
                  density="comfortable"
                  color="primary"
                  :rules="[rules.required]"
                  hide-details="auto"
                  class="custom-input"
                ></v-text-field>
              </div>

              <!-- Email Field -->
              <div class="mb-6">
                <label class="field-label mb-2 d-block">
                  <v-icon icon="mdi-email" size="20" class="mr-2"></v-icon>
                  Email Adresa *
                </label>
                <v-text-field
                  v-model="formData.email"
                  placeholder="marko@primjer.ba"
                  variant="outlined"
                  density="comfortable"
                  color="primary"
                  type="email"
                  :rules="[rules.required, rules.email]"
                  hide-details="auto"
                  class="custom-input"
                ></v-text-field>
              </div>

              <!-- Subject Field -->
              <div class="mb-6">
                <label class="field-label mb-2 d-block">
                  <v-icon icon="mdi-tag" size="20" class="mr-2"></v-icon>
                  Tema Poruke *
                </label>
                <v-select
                  v-model="formData.subject"
                  :items="subjectOptions"
                  placeholder="Odaberi temu"
                  variant="outlined"
                  density="comfortable"
                  color="primary"
                  :rules="[rules.required]"
                  hide-details="auto"
                  class="custom-input"
                ></v-select>
              </div>

              <!-- Message Field -->
              <div class="mb-6">
                <label class="field-label mb-2 d-block">
                  <v-icon icon="mdi-message-text" size="20" class="mr-2"></v-icon>
                  Tvoja Poruka *
                </label>
                <v-textarea
                  v-model="formData.message"
                  placeholder="Napiši svoju poruku ovdje..."
                  variant="outlined"
                  rows="6"
                  color="primary"
                  :rules="[rules.required, rules.minLength]"
                  counter="500"
                  maxlength="500"
                  hide-details="auto"
                  class="custom-input"
                ></v-textarea>
              </div>

              <!-- Privacy Notice -->
              <v-alert
                type="info"
                variant="tonal"
                class="mb-6"
                rounded="lg"
                density="compact"
              >
                <div class="text-caption">
                  <v-icon icon="mdi-shield-check" size="18" class="mr-2"></v-icon>
                  Tvoji podaci su sigurni i neću ih dijeliti sa trećim licima. Koristim ih samo za odgovor na tvoju poruku. 🔒
                </div>
              </v-alert>

              <!-- Error Alert -->
              <v-alert
                v-if="errorMessage"
                type="error"
                variant="tonal"
                class="mb-6"
                rounded="lg"
                closable
                @click:close="errorMessage = ''"
              >
                <div class="font-weight-bold">{{ errorMessage }}</div>
              </v-alert>

              <!-- Submit Button -->
              <v-btn
                type="submit"
                size="x-large"
                rounded="pill"
                block
                :loading="submitting"
                :disabled="!formValid || submitting"
                class="submit-button text-none"
              >
                <v-icon icon="mdi-send" class="mr-2"></v-icon>
                <span class="font-weight-bold">Pošalji Poruku</span>
              </v-btn>
            </v-form>
          </v-card>

          <!-- Contact Info Cards -->
          <v-row class="mt-8">
            <v-col cols="12" sm="6">
              <v-card class="info-card pa-6 text-center h-100" elevation="4" rounded="xl">
                <v-icon icon="mdi-clock-fast" size="48" color="#232526" class="mb-4"></v-icon>
                <h4 class="info-title mb-2">Brz Odgovor</h4>
                <p class="text-body-2 text-grey-darken-1">
                  Obično odgovaram u roku 24-48 sati
                </p>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card class="info-card pa-6 text-center h-100" elevation="4" rounded="xl">
                <v-icon icon="mdi-heart-flash" size="48" color="#232526" class="mb-4"></v-icon>
                <h4 class="info-title mb-2">Sa Ljubavlju</h4>
                <p class="text-body-2 text-grey-darken-1">
                  Svaka poruka je važna i čitam ih sa pažnjom
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <!-- Side Info (Optional) -->
        <v-col cols="12" md="4" lg="3" class="d-none d-md-block">
          <v-card class="side-card pa-6" elevation="0" rounded="xl">
            <h4 class="side-title mb-4">
              <v-icon icon="mdi-information" class="mr-2"></v-icon>
              Često Postavljana Pitanja
            </h4>
            
            <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
              <v-chip
                size="small"
                color="primary"
                variant="flat"
                class="mb-2"
              >
                {{ faq.question }}
              </v-chip>
              <p class="text-caption text-grey-darken-1">{{ faq.answer }}</p>
              <v-divider v-if="index < faqs.length - 1" class="mt-4"></v-divider>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const formRef = ref(null);
const formValid = ref(false);
const submitting = ref(false);
const formSubmitted = ref(false);
const errorMessage = ref('');

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const subjectOptions = [
  '💬 Opće Pitanje',
  '🐛 Prijavi Bug',
  '💡 Prijedlog za Poboljšanje',
  '💲 Cijene',
  '🤝 Suradnja',
  '🎉 Ostalo',
];

const faqs = [
  {
    question: 'Koliko traje odgovor?',
    answer: 'Obično odgovorim u roku 24-48 sati.',
  },
  {
    question: 'Je li forma besplatna?',
    answer: 'Da! Potpuno je besplatna za sve.',
  },
  {
    question: 'Šta ako imam bug?',
    answer: 'Odaberi "Prijavi Bug" i detaljno opiši problem.',
  },
];

const rules = {
  required: (v) => !!v || 'Ovo polje je obavezno',
  email: (v) => /.+@.+\..+/.test(v) || 'Email mora biti validan',
  minLength: (v) => (v && v.length >= 10) || 'Poruka mora imati najmanje 10 karaktera',
};

// 🔥 EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_vqysyub';
const EMAILJS_TEMPLATE_ID = 'template_2omqk4f';
const EMAILJS_PUBLIC_KEY = '1oINBDVrG5_bkgnU7';

const submitForm = async () => {
  if (!formValid.value) return;

  submitting.value = true;
  errorMessage.value = '';

  try {
    // 📧 Pripremi template parametre
    const templateParams = {
      from_name: formData.value.name,
      from_email: formData.value.email,
      subject: formData.value.subject,
      message: formData.value.message,
    };

    // 🐛 Debug log
    console.log('📧 Slanje emaila...', {
      serviceId: EMAILJS_SERVICE_ID,
      templateId: EMAILJS_TEMPLATE_ID,
      params: templateParams,
    });

    // 📨 Pošalji email
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('✅ Email poslan uspješno!', response);

    // ✅ Success
    formSubmitted.value = true;
  } catch (error) {
    console.error('❌ EmailJS Error:', error);
    
    // Detaljna greška za debugging
    if (error.text) {
      console.error('Error details:', error.text);
      errorMessage.value = `Greška: ${error.text}`;
    } else {
      errorMessage.value = 'Greška pri slanju poruke. Provjerite EmailJS konfiguraciju.';
    }
  } finally {
    submitting.value = false;
  }
};

const resetForm = () => {
  formSubmitted.value = false;
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  if (formRef.value) {
    formRef.value.reset();
  }
};
</script>
<style scoped>
.contact-section {
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

/* Form Card */
.form-card {
  background: white;
  border: 3px solid transparent;
  transition: all 0.3s ease;
}

.form-card:hover {
  border-color: #232526;
}

.field-label {
  font-weight: 600;
  color: #232526;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
}

.custom-input :deep(.v-field) {
  border-radius: 12px;
}

.custom-input :deep(.v-field--focused) {
  box-shadow: 0 0 0 3px rgba(35, 37, 38, 0.1);
}

/* Submit Button */
.submit-button {
  background: linear-gradient(135deg, #232526 0%, #414345 100%) !important;
  color: white !important;
  font-family: 'Fredoka', sans-serif;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  transform: scale(1.02);
  box-shadow: 0 8px 20px rgba(35, 37, 38, 0.3) !important;
}

/* Success State */
.success-icon {
  animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.success-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 2rem;
  color: #232526;
  font-weight: 700;
}

/* Info Cards */
.info-card {
  background: white;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.info-card:hover {
  transform: translateY(-5px);
  border-color: #232526;
  box-shadow: 0 12px 28px rgba(35, 37, 38, 0.2) !important;
}

.info-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 1.25rem;
  color: #232526;
  font-weight: 600;
}

/* Side Card */
.side-card {
  background: rgba(35, 37, 38, 0.03);
  position: sticky;
  top: 100px;
}

.side-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 1.1rem;
  color: #232526;
  font-weight: 600;
}

.h-100 {
  height: 100%;
}
</style>
