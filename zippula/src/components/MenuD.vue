<template>
  <v-app-bar
    flat
    :height="isMobile ? 70 : 100"
    :class="['menu-bar', { scrolled }]"
  >
    <v-container class="menu-container pa-0">
      
      <!-- 📱 MOBILE LAYOUT -->
      <template v-if="isMobile">
        <!-- Logo Lijevo -->
        <div class="logo-mobile" @click="scrollTo('home')">
          <v-img
            src="@/assets/logo-zippula1.png"
            alt="ZipPola Logo"
            width="140"
            contain
          />
        </div>

        <!-- Spacer -->
        <v-spacer></v-spacer>

        <!-- Hamburger Menu -->
        <v-btn
          icon
          variant="text"
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="hamburger-btn"
        >
          <v-icon size="28">{{ mobileMenuOpen ? 'mdi-close' : 'mdi-menu' }}</v-icon>
        </v-btn>
      </template>

      <!-- 🖥️ DESKTOP LAYOUT -->
      <template v-else>
        <!-- LIJEVI MENU -->
        <div class="menu-left">
          <v-btn variant="text" class="btnhover" @click="scrollTo('services')">
            Services
          </v-btn>
          <v-btn variant="text" class="btnhover" @click="scrollTo('process')">
            How it works
          </v-btn>
        </div>

        <!-- LOGO SREDINA -->
        <div class="logo-wrapper" @click="scrollTo('home')">
          <v-img
            src="@/assets/logo-zippula1.png"
            alt="ZipPola Logo"
            width="260"
            contain
          />
        </div>

        <!-- DESNI MENU -->
        <div class="menu-right">
          <v-btn variant="text" class="btnhover" @click="scrollTo('about')">
            About
          </v-btn>
          <v-btn variant="text" class="btnhover" @click="scrollTo('contact')">
            Contact
          </v-btn>
        </div>
      </template>

    </v-container>
  </v-app-bar>

  <!-- 📱 MOBILE DRAWER MENU -->
  <v-navigation-drawer
    v-model="mobileMenuOpen"
    location="right"
    temporary
    width="280"
    class="mobile-drawer"
  >
    <!-- Header sa Logom -->
    <div class="drawer-header pa-6">
      <v-img
        src="@/assets/logo-zippula1.png"
        alt="ZipPola Logo"
        width="160"
        contain
        class="mb-4"
      />
      <v-divider></v-divider>
    </div>

    <!-- Menu Items -->
    <v-list class="pa-4" density="comfortable">
      <v-list-item
        v-for="item in menuItems"
        :key="item.id"
        @click="handleMobileClick(item.id)"
        class="mobile-menu-item mb-2"
        rounded="xl"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon" class="mr-3" color="#232526"></v-icon>
        </template>
        <v-list-item-title class="mobile-menu-text">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>

    <!-- Footer -->
    <template v-slot:append>
      <div class="drawer-footer pa-6 text-center">
        <v-divider class="mb-4"></v-divider>
        <p class="text-caption text-grey-darken-1">
          © 2024 ZipPula<br>
          Restoration with Love ❤️
        </p>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();
const isMobile = computed(() => mobile.value);

const scrolled = ref(false);
const mobileMenuOpen = ref(false);

const menuItems = [
  { id: 'home', title: 'Home', icon: 'mdi-home' },
  { id: 'services', title: 'Services', icon: 'mdi-wrench' },
  { id: 'process', title: 'How it works', icon: 'mdi-cog' },
  { id: 'about', title: 'About', icon: 'mdi-account-heart' },
  { id: 'contact', title: 'Contact', icon: 'mdi-email' },
];

const handleScroll = () => {
  scrolled.value = window.scrollY > 40;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    // Zatvori mobile menu nakon klika
    mobileMenuOpen.value = false;
  }
};

const handleMobileClick = (id) => {
  scrollTo(id);
};
</script>

<style scoped>
/* ========== APP BAR ========== */
.menu-bar {
  background-color: rgba(255, 255, 255, 0.85) !important;
  backdrop-filter: blur(8px);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.menu-bar.scrolled {
  background-color: #f0f0f0 !important;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08) !important;
}

.menu-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
}

/* ========== DESKTOP LAYOUT ========== */
.menu-left,
.menu-right {
  display: flex;
  align-items: center;
  gap: 14px;
  z-index: 10;
}

.logo-wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo-wrapper:hover {
  transform: translateX(-50%) scale(1.05);
}

/* ========== MOBILE LAYOUT ========== */
.logo-mobile {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo-mobile:hover {
  transform: scale(1.05);
}

.hamburger-btn {
  color: #232526 !important;
}

/* ========== BUTTON STYLES ========== */
.btnhover {
  font-family: 'Fredoka', sans-serif;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: none;
  color: #232526;
  transition: color 0.3s ease;
}

.btnhover:hover {
  color: #FA891A !important;
}

/* ========== MOBILE DRAWER ========== */
.mobile-drawer {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
}

.drawer-header {
  background: linear-gradient(135deg, #232526 0%, #414345 100%);
}

.mobile-menu-item {
  transition: all 0.3s ease;
  cursor: pointer;
  background: white;
  margin-bottom: 8px;
  border: 2px solid transparent;
}

.mobile-menu-item:hover {
  background: linear-gradient(135deg, rgba(250, 137, 26, 0.1) 0%, rgba(250, 137, 26, 0.05) 100%);
  border-color: #FA891A;
  transform: translateX(8px);
}

.mobile-menu-text {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #232526;
}

.drawer-footer {
  background: rgba(35, 37, 38, 0.03);
}

/* ========== RESPONSIVE ADJUSTMENTS ========== */
@media (max-width: 960px) {
  .menu-left,
  .menu-right,
  .logo-wrapper {
    display: none;
  }
}

@media (min-width: 961px) {
  .logo-mobile,
  .hamburger-btn {
    display: none;
  }
}
</style>