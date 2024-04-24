<script setup>
import SideMenu from "./../components/SideMenu.vue"

import { onMounted,ref,onBeforeMount } from 'vue'


const loading = ref(true)


onBeforeMount( () => {

loading.value = true;

if (!sessionStorage.getItem('page033Reloaded')) {
    // Marquer que la page a été rechargée pour cette visite
    sessionStorage.setItem('page033Reloaded', true);
    
    // Recharger la page une seule fois
    window.location.reload();
   
} else {
    // Réinitialiser le marquage pour la prochaine visite
    sessionStorage.removeItem('page033Reloaded');
    loading.value = false;
   
}

console.log('loading', loading.value)

})
</script>

<template>
     <div class="echo group bg-gradient-to-b from-slate-200/70 to-slate-50 background relative min-h-screen before:content-[''] before:h-[370px] before:w-screen before:bg-gradient-to-t before:from-theme-1/80 before:to-theme-2 [&.background--hidden]:before:opacity-0 before:transition-[opacity,height] before:ease-in-out before:duration-300 before:top-0 before:fixed after:content-[''] after:h-[370px] after:w-screen [&.background--hidden]:after:opacity-0 after:transition-[opacity,height] after:ease-in-out after:duration-300 after:top-0 after:fixed after:bg-texture-white after:bg-contain after:bg-fixed after:bg-[center_-13rem] after:bg-no-repeat">
        <div class="[&.loading-page--before-hide]:h-screen [&.loading-page--before-hide]:relative loading-page loading-page--before-hide [&.loading-page--before-hide]:before:block [&.loading-page--hide]:before:opacity-0 before:content-[''] before:transition-opacity before:duration-300 before:hidden before:inset-0 before:h-screen before:w-screen before:fixed before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:z-[60] [&.loading-page--before-hide]:after:block [&.loading-page--hide]:after:opacity-0 after:content-[''] after:transition-opacity after:duration-300 after:hidden after:h-16 after:w-16 after:animate-pulse after:fixed after:opacity-50 after:inset-0 after:m-auto after:bg-loading-puff after:bg-cover after:z-[61]">
         
            <SideMenu />

            <div class="content transition-[margin,width] duration-100 xl:pl-3.5 pt-[54px] pb-16 relative z-10 group mode content--compact xl:ml-[275px] mode--light [&.content--compact]:xl:ml-[91px]">
                
                <div class="mt-16 px-5">
                            <div class="container" >
                                <h1 style="color:white;"> En cours ...</h1>
                               


                            </div>
                </div>
        </div>
        </div>
    </div>
</template>
<style>

</style>