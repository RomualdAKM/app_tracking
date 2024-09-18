<template>
    <div v-if="loading" class="loading-page flex items-center justify-center h-screen w-screen bg-ColorAlmond text-white">
     <div class="flex flex-col items-center justify-center gap-3">
       <div class="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-white"></div>
       <span class="font-bold text-lg">Loading...</span>
     </div>
   </div>
   <div v-else
     class="echo group bg-gradient-to-b from-slate-200/70 to-slate-50 background relative min-h-screen before:content-[''] before:h-[370px] before:w-screen before:bg-gradient-to-t before:from-theme-1/80 before:to-theme-2 [&.background--hidden]:before:opacity-0 before:transition-[opacity,height] before:ease-in-out before:duration-300 before:top-0 before:fixed after:content-[''] after:h-[370px] after:w-screen [&.background--hidden]:after:opacity-0 after:transition-[opacity,height] after:ease-in-out after:duration-300 after:top-0 after:fixed after:bg-texture-white after:bg-contain after:bg-fixed after:bg-[center_-13rem] after:bg-no-repeat">
     <div
       class="[&.loading-page--before-hide]:h-screen [&.loading-page--before-hide]:relative loading-page loading-page--before-hide [&.loading-page--before-hide]:before:block [&.loading-page--hide]:before:opacity-0 before:content-[''] before:transition-opacity before:duration-300 before:hidden before:inset-0 before:h-screen before:w-screen before:fixed before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:z-[60] [&.loading-page--before-hide]:after:block [&.loading-page--hide]:after:opacity-0 after:content-[''] after:transition-opacity after:duration-300 after:hidden after:h-16 after:w-16 after:animate-pulse after:fixed after:opacity-50 after:inset-0 after:m-auto after:bg-loading-puff after:bg-cover after:z-[61]">
 
       <SideMenu />
 
       <div
         class="content transition-[margin,width] duration-100 xl:pl-3.5 pt-[54px] pb-16 relative z-10 group mode content--compact xl:ml-[275px] mode--light [&.content--compact]:xl:ml-[91px]">
         <div class="mt-16 px-5">
           <div class="container">
             <div class="grid grid-cols-12 gap-x-6 gap-y-10">
               <div class="col-span-12">
                 <div class="flex flex-col gap-y-3 md:h-10 md:flex-row md:items-center">
                   <div class="text-base font-medium group-[.mode--light]:text-white">
                     General Report
                   </div>
                   <div class="flex flex-col gap-x-3 gap-y-2 sm:flex-row md:ml-auto">
                     <label style="color: aliceblue;">
                     Sélectionnez le véhicule
                   </label>
                     <div class="relative">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         data-lucide="calendar-check2"
                         class="lucide lucide-calendar-check2 absolute inset-y-0 left-0 z-10 my-auto ml-3 h-4 w-4 stroke-[1.3] group-[.mode--light]:!text-slate-200">
                         <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path>
                         <line x1="16" x2="16" y1="2" y2="6"></line>
                         <line x1="8" x2="8" y1="2" y2="6"></line>
                         <line x1="3" x2="21" y1="10" y2="10"></line>
                         <path d="m16 20 2 2 4-4"></path>
                       </svg>
                       
                       <select  v-model="vehicleId" @change="getChartData()"
                         class="   duration-200 ease-in-out w-full 
                         text-sm border-slate-200 shadow-sm py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary 
                         focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 
                         group-[.form-inline]:flex-1 rounded-[0.5rem] pl-9 group-[.mode--light]:!border-transparent group-[.mode--light]:!bg-white/[0.12] 
                         group-[.mode--light]:bg-chevron-white  sm:w-44">
                         <option value="0">Tout</option>
                         <option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.id"> {{ vehicle.registration_number_vehicle }}</option>
                        
                       </select>
                     </div>
                    
                   </div>
                 </div>
               </div>
             </div>
             <section  style="background-color: white;" class="text-gray-700 body-font mt-16">
               <div class="container px-5 py-24 mx-auto">
               <div class="flex flex-wrap -m-4 text-center">
                 <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                   <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                     <!-- <svg xmlns="http://www.w3.org/2000/svg" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                     <path d="M8.5 19.5l1.5-1.5 2 2 4-4-1.5-1.5-2.5 2.5-1-1-3.5 3.5z" />
                     <path d="M15 13.5V9c0-2.21-1.79-4-4-4s-4 1.79-4 4v4.5" />
                   </svg> -->
 
                     <h2 class="title-font font-medium text-3xl text-gray-900">{{ sumSimpleBreakdown }}</h2>
                     <p class="leading-relaxed">Panne simple</p>
                   </div>
 
                 </div>
                 <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                   <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                     <!-- <svg xmlns="http://www.w3.org/2000/svg" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                       <path d="M12 20h-8v-2l-2-2v-8l2-2h3.172a4 4 0 0 1 2.828 1.172l1.828 1.828a4 4 0 0 0 2.828 1.172h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-8v-4h-2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h3.172a4 4 0 0 1 2.828 1.172l1.828 1.828a4 4 0 0 0 2.828 1.172h2v2h-2v2h2v2h-2v2h2v2h-8v-4m0 0h2" />
                     </svg> -->
                     <h2 class="title-font font-medium text-3xl text-gray-900">{{ sumPartreplacement }}</h2>
                     <p class="leading-relaxed">Pannes à pièce de réparation</p>
                   </div>
                 </div>
                 <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                   <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                     <!-- <svg xmlns="http://www.w3.org/2000/svg" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                       <path d="M12 20h-8v-2l-2-2v-8l2-2h3.172a4 4 0 0 1 2.828 1.172l1.828 1.828a4 4 0 0 0 2.828 1.172h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-8v-4h-2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h3.172a4 4 0 0 1 2.828 1.172l1.828 1.828a4 4 0 0 0 2.828 1.172h2v2h-2v2h2v2h-2v2h2v2h-8v-4m0 0h2" />
                     </svg> -->
                     <h2 class="title-font font-medium text-3xl text-gray-900">{{ sumTrip }}</h2>
                     <p class="leading-relaxed">Voyage</p>
                   </div>
                 </div>
                 <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                   <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                     <!-- <svg xmlns="http://www.w3.org/2000/svg" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                       <path d="M8.5 19.5l1.5-1.5 2 2 4-4-1.5-1.5-2.5 2.5-1-1-3.5 3.5z" />
                       <path d="M15 13.5V9c0-2.21-1.79-4-4-4s-4 1.79-4 4v4.5" />
                     </svg> -->
                     <h2 class="title-font font-medium text-3xl text-gray-900">{{ sumProcurement }}</h2>
                     <p class="leading-relaxed">Approvisionnement</p>
                   </div>
                 </div>
               </div>
             </div>
 
             </section>
           </div>
         </div>
         <div class="container mx-auto mt-16">
           <div class="flex flex-col">
          
             <div class="p-8 box box--stacked">
               <Bar v-if="loaded" :data="chartData" :options="chartOptions" />
             </div>
             
           </div>
         </div>
       </div>
 
     </div>
   </div>
 </template>
 
 <script setup>
 import SideMenu from './../components/SideMenu.vue'
 import { ref, onMounted,onBeforeMount } from 'vue'
 import { Bar } from 'vue-chartjs'
 import axios from 'axios'
 import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
 
 ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
 
 const chartData = ref(null)
 const vehicles = ref({})
 let vehicleId = ref(0)
 let sumProcurement = ref(0)
 let sumTrip = ref(0)
 let sumPartreplacement = ref(0)
 let sumSimpleBreakdown = ref(0)
 
 const chartOptions = ref({
   responsive: true,
   plugins: {
     legend: {
       display: true,
     },
     tooltip: {
       enabled: true,
     },
   },
   scales: {
     y: {
       beginAtZero: true,
     },
   },
 })
 
 const countSimpleBreakdownByMonth = ref([])
 const countPartreplacementBreakdownByMonth = ref([])
 const countTripByMonth = ref([])
 const countProcurementByMonth = ref([ ])
 
 
 
 const getChartData = async () => {
   try {
     const response1 = await axios.get('/api/get_count_simple_breakdown_by_month/' + vehicleId.value)
     countSimpleBreakdownByMonth.value = response1.data.Simplebreakdowns
     console.log('Données de l\'API:', countSimpleBreakdownByMonth.value)
     sumSimpleBreakdown.value = countSimpleBreakdownByMonth.value.reduce((acc, curr) => acc + curr, 0)
 
 
     const response2 = await axios.get('/api/get_count_partre_placement_breakdown_by_month/' + vehicleId.value)
     countPartreplacementBreakdownByMonth.value = response2.data.countPartreplacementBreakdownByMonth
     console.log('Données de l\'API:', countPartreplacementBreakdownByMonth.value)
     sumPartreplacement.value = countPartreplacementBreakdownByMonth.value.reduce((acc, curr) => acc + curr, 0)
 
     const response3 = await axios.get('/api/get_count_trip_by_month/' + vehicleId.value)
     countTripByMonth.value = response3.data.countTripByMonth
     console.log('Données de l\'API:', countTripByMonth.value)
     sumTrip.value = countTripByMonth.value.reduce((acc, curr) => acc + curr, 0)
 
 
     const response4 = await axios.get('/api/get_count_procurement_by_month/' + vehicleId.value)
     countProcurementByMonth.value = response4.data.countProcurementByMonth
     console.log('Données de l\'API:', countProcurementByMonth.value)
     sumProcurement.value = countProcurementByMonth.value.reduce((acc, curr) => acc + curr, 0)
 
 
 
     // Mettre à jour chartData avec les données récupérées
     chartData.value = {
       labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
       datasets: [
         {
           label: 'Panne simple',
           backgroundColor: 'rgba(255, 99, 132, 0.6)',
           data: countSimpleBreakdownByMonth.value,
         },
         {
           label: 'Pannes à pièce de réparation',
           backgroundColor: 'rgba(54, 162, 235, 0.6)',
           data: countPartreplacementBreakdownByMonth.value,
         },
         {
           label: 'Voyage',
           backgroundColor: 'rgba(75, 192, 192, 0.6)',
           data: countTripByMonth.value,
         },
         {
           label: 'Approvisionnement',
           backgroundColor: 'rgba(175, 92, 192, 0.6)',
           data: countProcurementByMonth.value,
         },
        
       ],
     }
   } catch (error) {
     console.error('Erreur lors de la récupération des données:', error)
   }
 }
 
 const getVehicles = async () => {
     const response = await axios.get('/api/get_vehicles_in_company')
     vehicles.value = response.data
     console.log('vehicles',response.data)
 }
 
 const loading = ref(true)
 const loaded = ref(false)
 
 onMounted(async () => {
   await getChartData()
   await getVehicles()
   loading.value = false
   // Définir loaded sur true une fois que les données sont récupérées
   loaded.value = true
 })
 
 
 onBeforeMount(() => {
   setTimeout(() => {
     loading.value = false
   }, 3000)
 
   const pageReloaded = sessionStorage.getItem('page033Reloaded');
   if (!pageReloaded) {
    
     sessionStorage.setItem('page033Reloaded', 'true');
   
     window.location.reload();
   } else {
    
     sessionStorage.removeItem('page033Reloaded');
     loading.value = false;
   }
 })
 </script>
 
 <style scoped>
 .container {
   padding: 26px;
 }
 </style>