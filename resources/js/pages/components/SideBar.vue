<script setup>
import {ref,onMounted} from 'vue'
import router from "./../../router/index.js"


const user = ref({})

const getAuthUser = async () => {
    const response = await axios.get('/api/get_info_auth_user')
    user.value = response.data
    console.log('user',response.data)
}

const logout =  () => {
    sessionStorage.removeItem("token");
    // window.location.reload();
    router.push("/");
};

onMounted (async() => {
  await  getAuthUser()
})

</script>


<template>         
                 <div class="side-menu__content h-full box bg-white/[0.95] rounded-none xl:rounded-xl z-20 relative w-[275px] duration-300 transition-[width] group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:shadow-[6px_0_12px_-4px_#0000000f] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] overflow-hidden flex flex-col">
                    <div class="flex-none hidden xl:flex items-center z-10 px-5 h-[65px] w-[275px] overflow-hidden relative duration-300 group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px]">
                        <a class="flex items-center transition-[margin] duration-300 group-[.side-menu--collapsed.side-menu--on-hover]:xl:ml-0 group-[.side-menu--collapsed]:xl:ml-2" href="#">
                            <div class="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-gradient-to-b from-theme-1 to-theme-2/80 transition-transform ease-in-out group-[.side-menu--collapsed.side-menu--on-hover]:xl:-rotate-180">
                                <div class="relative h-[16px] w-[16px] -rotate-45 [&_div]:bg-white">
                                    <div class="absolute inset-y-0 left-0 my-auto h-[75%] w-[21%] rounded-full opacity-50">
                                    </div>
                                    <div class="absolute inset-0 m-auto h-[120%] w-[21%] rounded-full"></div>
                                    <div class="absolute inset-y-0 right-0 my-auto h-[75%] w-[21%] rounded-full opacity-50">
                                    </div>
                                </div>
                            </div>
                            <div class="ml-3.5 font-medium transition-opacity group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0">
                                TRACKING
                            </div>
                        </a>
                        <a class="toggle-compact-menu ml-auto hidden h-[20px] w-[20px] items-center justify-center rounded-full border border-slate-600/40 transition-[opacity,transform] hover:bg-slate-600/5 group-[.side-menu--collapsed]:xl:rotate-180 group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0 3xl:flex" href="#">
                            <i data-tw-merge="" data-lucide="arrow-left" class="h-3.5 w-3.5 stroke-[1.3]"></i>
                        </a>
                    </div>
                    <div class="scrollable-ref w-full h-full z-20 px-5 overflow-y-auto overflow-x-hidden pb-3 [-webkit-mask-image:-webkit-linear-gradient(top,rgba(0,0,0,0),black_30px)] [&:-webkit-scrollbar]:w-0 [&:-webkit-scrollbar]:bg-transparent [&_.simplebar-content]:p-0 [&_.simplebar-track.simplebar-vertical]:w-[10px] [&_.simplebar-track.simplebar-vertical]:mr-0.5 [&_.simplebar-track.simplebar-vertical_.simplebar-scrollbar]:before:bg-slate-400/30">
                        <ul class="scrollable">
                            <!-- BEGIN: First Child -->
                            <li class="side-menu__divider">
                                DASHBOARDS
                            </li>
                            <li>
                                <router-link to="/dashboad/statistic" class="side-menu__link side-menu__link--active ">
                                    <i data-tw-merge="" data-lucide="gauge-circle" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                    <div class="side-menu__link__title">Statistique</div>
                                </router-link>
                                <!-- BEGIN: Second Child -->
                                <!-- END: Second Child -->
                            </li>
                           
                            <li class="side-menu__divider" v-if="user.role == 'superadmin'">
                                STRUCTURES
                            </li>
                            <li  v-if="user.role == 'superadmin'">
                                <a href="/dashboad/IndexCompanies" class="side-menu__link ">
                                    <i data-tw-merge="" data-lucide="gantt-chart-square" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                    <div class="side-menu__link__title">Liste des structures</div>
                                    <!-- <div class="side-menu__link__badge">
                                        4
                                    </div> -->
                                </a>
                               
                            </li>
                            <li class="side-menu__divider">
                                CHAUFFEURS
                            </li>
                            <li>
                                <a href="/dashboad/IndexDriver" class="side-menu__link ">
                                    <i data-tw-merge="" data-lucide="gantt-chart-square" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                    <div class="side-menu__link__title">Liste des chauffeurs</div>
                                    <!-- <div class="side-menu__link__badge">
                                        4
                                    </div> -->
                                </a>
                               
                            </li>
                           
                            <li class="side-menu__divider">
                                ENGINS
                            </li>
                            <li>
                                <a href="/dashboad/IndexVehicle" class="side-menu__link ">
                                    <i data-tw-merge="" data-lucide="album" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                    <div class="side-menu__link__title">Les engins</div>
                                </a>
                              
                            </li>
                            <li class="side-menu__divider">
                                PRIORITES
                            </li>
                            <li>
                                <a href="/dashboad/IndexInsurance" class="side-menu__link ">
                                    <i data-tw-merge="" data-lucide="album" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                    <div class="side-menu__link__title">Assurances</div>
                                </a>
                              
                            </li> 
                            <li>
                                <a href="/dashboad/IndexTechnicalInspection" class="side-menu__link ">
                                    <i data-tw-merge="" data-lucide="album" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                    <div class="side-menu__link__title">Visite Technique</div>
                                </a>
                              
                            </li> 
                            <li>
                                <a href="/dashboad/IndexMotorVehicleTax" class="side-menu__link ">
                                    <i data-tw-merge="" data-lucide="album" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                    <div class="side-menu__link__title">Taxe sur les Véhicules à moteur (TVM)</div>
                                </a>
                              
                            </li> 
                       

                         <li class="side-menu__divider">
                                Approvisionnments
                            </li>
                            <li>
                                <a href="/dashboad/IndexProcurement" class="side-menu__link ">
                                    <i data-tw-merge="" data-lucide="album" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                    <div class="side-menu__link__title">Les approvisionnments</div>
                                </a>
                              
                            </li>
                         <li class="side-menu__divider">
                                Voyages
                            </li>
                            <li>
                                <a href="/dashboad/IndexTrip" class="side-menu__link ">
                                    <i data-tw-merge="" data-lucide="album" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                    <div class="side-menu__link__title">Les voyages</div>
                                </a>
                              
                            </li>
                         <li class="side-menu__divider">
                                Pannes
                            </li>
                            <li>
                                <a href="/dashboad/IndexTypeBreakdown" class="side-menu__link ">
                                    <i data-tw-merge="" data-lucide="album" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                    <div class="side-menu__link__title">Type de panne</div>
                                </a>
                              
                            </li>
                             <li>
                                <a href="/dashboad/IndexSimpleBreakdown" class="side-menu__link ">
                                    <i data-tw-merge="" data-lucide="album" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                    <div class="side-menu__link__title">Panne simple</div>
                                </a>
                              
                            </li> 
                             <li>
                                <a href="/dashboad/IndexPartReplacementBreakdown" class="side-menu__link ">
                                    <i data-tw-merge="" data-lucide="album" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                    <div class="side-menu__link__title"> Pannes  à  pièce de réparation</div>
                                </a>
                              
                            </li> 
                        
                       
                         <!-- <li class="side-menu__divider">
                                Voyages
                            </li>
                            <li>
                                <a href="/dashboad/IndexTrip" class="side-menu__link ">
                                    <i data-tw-merge="" data-lucide="album" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                    <div class="side-menu__link__title">Les voyages</div>
                                </a>
                              
                            </li> -->
                          
                        </ul>
                    </div>
                </div>
          
</template>