<script setup>
import Header from "./landingcomponents/header.vue"
import Banner from "./landingcomponents/banner.vue"
import Features from "./landingcomponents/features.vue"
import Process from "./landingcomponents/process.vue"
import About from "./landingcomponents/about.vue"
import whyChooseUs from "./landingcomponents/whyChooseUs.vue"
import Footer from "./landingcomponents/footer.vue"

</script>

<template>
    
    <div class="page-wrapper relative z-[1] bg-ColorAlmond">
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