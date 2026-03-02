<template>
    <MenuD />
    <FirstD />
    <SecondD />
    <ThirdD />
    <HrD />
    <FourthD />
    <SixthD />
    <ContactD />
    <FifthD />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import MenuD from '../components/MenuD.vue';
import FirstD from '@/components/FirstD.vue';
import SecondD from '@/components/SecondD.vue';
import ThirdD from '@/components/ThirdD.vue';
import FourthD from '@/components/FourthD.vue';
import HrD from '@/components/HrD.vue';
import FifthD from '@/components/FifthD.vue';
import SixthD from '@/components/SixthD.vue';
import ContactD from '@/components/ContactD.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    MenuD,
    FirstD,
    SecondD,
    ThirdD,
    FourthD,
    HrD,
    FifthD,
    SixthD,
    ContactD
  },
});
</script>
