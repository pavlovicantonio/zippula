<template>
  <v-sheet class="firstD">
    <div class="hero-wrapper">

      <!-- LIJEVO -->
      <div class="hero-left">
        <div class="hero-left-content">
          <h1 class="hero-title">ZIPPULA</h1>
          <p class="hero-slogan">Bringing your Zippo back to life</p>
          <p class="hero-slogan">
            Artisan Zippo lighter restoration from Pula
          </p>
        </div>
      </div>

      <!-- DESNO -->
      <div class="hero-right">
        <v-img
          src="@/assets/zippo.png"
          alt="Zippo lighter"
          class="zippo-image"
        />
      </div>

    </div>
  </v-sheet>
</template>

<style scoped>
/* GLAVNI HERO SECTION */
.firstD {
  width: 100vw;
  height: 90vh;
  color: #ffffff;
  background: #232526;
  background: -webkit-linear-gradient(to right, #414345, #232526);
  background: linear-gradient(to right, #414345, #232526);
  overflow: hidden;
}

.hero-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
}

/* LIJEVA STRANA */
.hero-left {
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  z-index: 2;
  animation: fadeInLeft 0.8s ease-out;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-left-content {
  max-width: 600px;
  text-align: left;
}

/* DESNA STRANA */
.hero-right {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  position: relative;
  animation: fadeInRight 0.8s ease-out;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.zippo-image {
  width: auto;
  max-width: 100%;
  height: 90%;
  object-fit: contain;
  margin-left: -25%;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
}

/* TIPOGRAFIJA */
.hero-title {
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: #ffffff;
  font-family: 'Fredoka', sans-serif;
  letter-spacing: -1px;
  animation: fadeInUp 0.6s ease-out 0.2s backwards;
}

.hero-slogan {
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  margin-bottom: 1rem;
  opacity: 0.9;
  color: #ffffff;
  font-family: 'Fredoka', sans-serif;
  animation: fadeInUp 0.6s ease-out 0.4s backwards;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.3rem);
  opacity: 0.85;
  margin-bottom: 2.5rem;
  color: #ffffff;
  font-family: 'Fredoka', sans-serif;
  animation: fadeInUp 0.6s ease-out 0.6s backwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* CTA BUTTON */
.cta-button {
  background: #ffffff !important;
  color: #232526 !important;
  font-weight: 600 !important;
  font-size: 1.1rem !important;
  padding: 24px 40px !important;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  text-transform: none !important;
  font-family: 'Fredoka', sans-serif !important;
  animation: fadeInUp 0.6s ease-out 0.8s backwards;
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 40px rgba(255, 255, 255, 0.3) !important;
}

/* RESPONSIVE */
@media (max-width: 960px) {
  .hero-wrapper {
    flex-direction: column;
  }

  .hero-left, .hero-right {
    width: 100%;
    height: 50%;
  }

  .hero-left {
    justify-content: center;
    padding: 20px;
  }

  .hero-left-content {
    max-width: 90%;
    text-align: center;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle, .hero-slogan {
    font-size: 1.2rem;
  }

  .hero-right {
    height: 50%;
    justify-content: center;
    padding: 0;
  }

  .zippo-image {
    margin-left: 0;
    max-height: 80%;
  }

  .cta-button {
    width: 100%;
    max-width: 280px;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-slogan {
    font-size: 1rem;
  }

  .hero-subtitle {
    font-size: 0.9rem;
  }
}
</style>

<!-- GOOGLE FONT -->
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;800&display=swap" rel="stylesheet" />