<script setup>
import { reactive,ref,onMounted } from 'vue'
import IsLoading from '../../../components/IsLoading.vue'

const vehicles = ref({})
const typebreakdowns = ref({})

const props = defineProps({
    simplebreakdown: {
        type: Object,
        required: true
    }
})

const form = reactive({
    name_simplebreakdown: props.simplebreakdown.name_simplebreakdown,
    repair_amount_simplebreakdown: props.simplebreakdown.repair_amount_simplebreakdown,
    garage_name_simplebreakdown: props.simplebreakdown.garage_name_simplebreakdown,
    garage_phone_simplebreakdown: props.simplebreakdown.garage_phone_simplebreakdown,
    location_of_the_failure_simplebreakdown: props.simplebreakdown.location_of_the_failure_simplebreakdown,
    photo_faulty_device_trouble: props.simplebreakdown.photo_faulty_device_trouble,
    vehicle_id: props.simplebreakdown.vehicle_id,
    typebreakdown_id: props.simplebreakdown.typebreakdown_id,
})

const changePhoto = (e) => {
    // Récupération du premier fichier sélectionné
    const file = e.target.files[0];

    // Affichage du nom du fichier dans la console
    console.log('photo_faulty_device_trouble', file);

    // Mise à jour du state "form" en ajoutant la nouvelle photo
    props.simplebreakdown.photo_faulty_device_trouble = file;
}

const getVehicles = async () => {
    const response = await axios.get('/api/get_vehicles_in_company')
    vehicles.value = response.data
    console.log('vehicles',response.data)
}
const getTypebreakdowns = async () => {
    const response = await axios.get('/api/get_typebreakdowns_in_company')
    typebreakdowns.value = response.data
    console.log('typebreakdowns',response.data)
}

const isLoading = ref(false);

const editSimplebreakdown = async () => {
    isLoading.value = true; // Activation du chargement
    const formData = new FormData();
    formData.append("name_simplebreakdown", props.simplebreakdown.name_simplebreakdown);
    formData.append("repair_amount_simplebreakdown", props.simplebreakdown.repair_amount_simplebreakdown);
    formData.append("garage_name_simplebreakdown", props.simplebreakdown.garage_name_simplebreakdown);
    formData.append("garage_phone_simplebreakdown", props.simplebreakdown.garage_phone_simplebreakdown);
    formData.append("location_of_the_failure_simplebreakdown", props.simplebreakdown.location_of_the_failure_simplebreakdown);
    formData.append("typebreakdown_id", props.simplebreakdown.typebreakdown_id);
    formData.append("vehicle_id", props.simplebreakdown.vehicle_id);

    if (form.photo_faulty_device_trouble) {
        formData.append("photo_faulty_device_trouble", props.simplebreakdown.photo_faulty_device_trouble);
    }
    await axios.post("/api/update_simplebreakdown/" + props.simplebreakdown.id, formData).then((response) => {
        if (response.data.success) {
            isLoading.value = false; // Désactivation du chargement
            window.location.reload();
            toast.fire({
                icon: "success",
                title: "Panne simple modifier avec succès",
            });
          
        } else {
            isLoading.value = false; // Désactivation du chargement en cas d'erreur
            console.log('error',response.data.message);
            toast.fire({
                icon: "error",
                title: "Veuillez remplir tous les champs requis",
            });
        }
    }).catch((error) => {
        isLoading.value = false; // Désactivation du chargement en cas d'erreur
        console.error('Error saving course:', error);
        toast.fire({
            icon: "error",
            title: "Une erreur s'est produite lors de la sauvegarde du cours. Veuillez réessayer plus tard.",
        });
    });
}

onMounted (async() => {
  await  getVehicles()
  await  getTypebreakdowns()
})

</script>


<template>
    <!-- BEGIN: Modal Content -->
    <div data-tw-backdrop="" aria-hidden="true" tabindex="-1" id="edit-simple-modal-preview" class="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.4s]">
        <div data-tw-merge class="w-[90%] mx-auto bg-white relative rounded-md shadow-md transition-[margin-top,transform] duration-[0.4s,0.3s] -mt-16 group-[.show]:mt-16 group-[.modal-static]:scale-[1.05] dark:bg-darkmode-600 sm:w-[460px]">
            <div class="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                
                <h2 class="mr-auto text-base font-medium">
                   Editer
                </h2>
            
            </div>
            <div data-tw-merge class="p-5 grid grid-cols-12 gap-4 gap-y-3">
                <div class="col-span-12 sm:col-span-12">
                    <label data-tw-merge for="modal-form-4" class="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right">
                        Sélectionnez type de panne
                    </label>
                    <select data-tw-merge id="modal-form-6" v-model="props.simplebreakdown.typebreakdown_id" class="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1">
                        
                        <option v-for="typebreakdown in typebreakdowns" :key="typebreakdown.id" :value="typebreakdown.id">  {{ typebreakdown.name_type_breakdown }} </option>
                       
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-12">
                    <label data-tw-merge for="modal-form-4" class="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right">
                        Sélectionnez le véhicule
                    </label>
                    <select data-tw-merge id="modal-form-6" v-model="props.simplebreakdown.vehicle_id" class="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1">
                        
                        <option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.id"> N° {{ vehicle.registration_number_vehicle }} </option>
                       
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <label data-tw-merge for="modal-form-1" class="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right">
                        Nom de la panne
                    </label>
                    <input data-tw-merge id="modal-form-1" v-model="props.simplebreakdown.name_simplebreakdown" type="text" placeholder="Numéro de véhicule" class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10">
                </div>

                <div class="col-span-12 sm:col-span-6">
                    <label data-tw-merge for="modal-form-2" class="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right">
                       Montant de la reparation
                    </label>
                    <input data-tw-merge id="modal-form-2" v-model="props.simplebreakdown.repair_amount_simplebreakdown" type="number" min="1" placeholder="Montant de la reparation" class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10">
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <label data-tw-merge for="modal-form-2" class="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right">
                       Nom du garagiste
                    </label>
                    <input data-tw-merge id="modal-form-2" v-model="props.simplebreakdown.garage_name_simplebreakdown" type="text" placeholder="Nom du garagiste" class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10">
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <label data-tw-merge for="modal-form-2" class="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right">
                       Contact du garagiste
                    </label>
                    <input data-tw-merge id="modal-form-2" v-model="props.simplebreakdown.garage_phone_simplebreakdown" type="text" placeholder="Contact du garagiste" class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10">
                </div>
                <div class="col-span-12 sm:col-span-12">
                    <label data-tw-merge for="modal-form-2" class="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right">
                      Lieu de la panne
                    </label>
                    <input data-tw-merge id="modal-form-2" v-model="props.simplebreakdown.location_of_the_failure_simplebreakdown" type="text" placeholder="Lieu de la panne" class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10">
                </div>
            
               
                <div class="col-span-12 sm:col-span-12">
                    <label data-tw-merge for="modal-form-5" class="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right">
                    Photo de la partie en panne
                    </label>
                    <input data-tw-merge id="modal-form-5" @change="changePhoto" type="file" accept="image/*" class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10">
                </div>
            
            </div>
            <div class="px-5 py-3 text-right border-t border-slate-200/60 dark:border-darkmode-400">
                
                <IsLoading v-if="isLoading" />
                <div  v-else>

                    <button data-tw-merge data-tw-dismiss="modal" type="button" class="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 mr-1 w-20 mr-1 w-20">Fermer</button>
                    <button 
                     
                        @click="editSimplebreakdown()" 
                        type="button" 
                        class="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary w-20 w-20"
                    >Valider</button>

                </div>
            
            </div>
        </div>
    </div>
    <!-- END: Modal Content -->

</template>