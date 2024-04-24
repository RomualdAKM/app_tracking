<script setup>
import Header from "./landingcomponents/header.vue"
import Banner from "./landingcomponents/banner.vue"
import Features from "./landingcomponents/features.vue"
import Process from "./landingcomponents/process.vue"
import About from "./landingcomponents/about.vue"
import whyChooseUs from "./landingcomponents/whyChooseUs.vue"
import Footer from "./landingcomponents/footer.vue"
import { onMounted, ref, onBeforeMount } from 'vue'

const loading = ref(true)

onBeforeMount(() => {
  setTimeout(() => {
    loading.value = false
  }, 3000)

  const pageReloaded = sessionStorage.getItem('page033Reloaded');
  if (!pageReloaded) {
    // Marquer que la page a été rechargée pour cette visite
    sessionStorage.setItem('page033Reloaded', 'true');
    // Recharger la page une seule fois
    window.location.reload();
  } else {
    // Réinitialiser le marquage pour la prochaine visite
    sessionStorage.removeItem('page033Reloaded');
    loading.value = false;
  }
})
</script>

<template>
  <div v-if="loading" class="loading-page flex items-center justify-center h-screen w-screen bg-ColorAlmond text-white">
    <div class="flex flex-col items-center justify-center gap-3">
      <div class="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-white"></div>
      <span class="font-bold text-lg">Loading...</span>
    </div>
  </div>
  <div v-else class="page-wrapper relative z-[1] bg-ColorAlmond">
    <Header />

    <main class="main-wrapper relative overflow-hidden">
      <Banner />

      <Features />

      <Process />
      <About />
      <whyChooseUs />
      <Footer />

    </main>
  </div>
</template>
