<script setup>
import { reactive,ref,onMounted } from 'vue'
import IsLoading from '../../../components/IsLoading.vue'

const vehicles = ref({})
const typebreakdowns = ref({})

const props = defineProps({
    partreplacementbreakdown: {
        type: Object,
        required: true
    }
})

const form = reactive({
    name_partreplacementbreakdown: props.partreplacementbreakdown.name_partreplacementbreakdown,
    repair_amount_partreplacementbreakdown: props.partreplacementbreakdown.repair_amount_partreplacementbreakdown,
    garage_name_partreplacementbreakdown: props.partreplacementbreakdown.garage_name_partreplacementbreakdown,
    garage_phone_partreplacementbreakdown: props.partreplacementbreakdown.garage_phone_partreplacementbreakdown,
    location_of_the_failure_partreplacementbreakdown: props.partreplacementbreakdown.location_of_the_failure_partreplacementbreakdown,
    photo_faulty_device_trouble: props.partreplacementbreakdown.photo_faulty_device_trouble,
    old_photo_part_partreplacementbreakdowns: props.partreplacementbreakdown.old_photo_part_partreplacementbreakdown,
    new_photo_part_partreplacementbreakdowns: props.partreplacementbreakdown.new_photo_part_partreplacementbreakdown,
    vehicle_id: props.partreplacementbreakdown.vehicle_id,
    typebreakdown_id: props.partreplacementbreakdown.typebreakdown_id,
})

const changePhoto1 = (e) => {
    // Récupération du premier fichier sélectionné
    const file = e.target.files[0];

    // Affichage du nom du fichier dans la console
    console.log('photo_faulty_device_trouble', file);

    // Mise à jour du state "form" en ajoutant la nouvelle photo
    props.partreplacementbreakdown.photo_faulty_device_trouble = file;
}
const changePhoto2 = (e) => {
    // Récupération du premier fichier sélectionné
    const file = e.target.files[0];

    // Affichage du nom du fichier dans la console
    console.log('old_photo_part_partreplacementbreakdown', file);

    // Mise à jour du state "form" en ajoutant la nouvelle photo
    props.partreplacementbreakdown.old_photo_part_partreplacementbreakdown = file;
}
const changePhoto3 = (e) => {
    // Récupération du premier fichier sélectionné
    const file = e.target.files[0];

    // Affichage du nom du fichier dans la console
    console.log('new_photo_part_partreplacementbreakdown', file);

    // Mise à jour du state "form" en ajoutant la nouvelle photo
    props.partreplacementbreakdown.new_photo_part_partreplacementbreakdown = file;
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

const editPartreplacementbreakdown = async () => {
    isLoading.value = true; // Activation du chargement
    const formData = new FormData();
    formData.append("name_partreplacementbreakdown", props.partreplacementbreakdown.name_partreplacementbreakdown);
    formData.append("repair_amount_partreplacementbreakdown", props.partreplacementbreakdown.repair_amount_partreplacementbreakdown);
    formData.append("garage_name_partreplacementbreakdown", props.partreplacementbreakdown.garage_name_partreplacementbreakdown);
    formData.append("garage_phone_partreplacementbreakdown", props.partreplacementbreakdown.garage_phone_partreplacementbreakdown);
    formData.append("location_of_the_failure_partreplacementbreakdown", props.partreplacementbreakdown.location_of_the_failure_partreplacementbreakdown);
    formData.append("typebreakdown_id", props.partreplacementbreakdown.typebreakdown_id);
    formData.append("vehicle_id", props.partreplacementbreakdown.vehicle_id);

    if (form.photo_faulty_device_trouble) {
        formData.append("photo_faulty_device_trouble", props.partreplacementbreakdown.photo_faulty_device_trouble);
    }
    if (form.old_photo_part_partreplacementbreakdowns) {
        formData.append("old_photo_part_partreplacementbreakdown", props.partreplacementbreakdown.old_photo_part_partreplacementbreakdown);
    }
    if (form.new_photo_part_partreplacementbreakdowns) {
        formData.append("new_photo_part_partreplacementbreakdown", props.partreplacementbreakdown.new_photo_part_partreplacementbreakdown);
    }
    
    await axios.post("/api/update_partreplacementbreakdown/" + props.partreplacementbreakdown.id, formData).then((response) => {
        if (response.data.success) {
            isLoading.value = false; // Désactivation du chargement
            window.location.reload();
            toast.fire({
                icon: "success",
                title: "modifier avec succès",
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
    <div data-tw-backdrop="" aria-hidden="true" tabindex="-1" id="edit-partreplacementbreakdown-modal-preview" class="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.4s]">
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
                    <select data-tw-merge id="modal-form-6" v-model="props.partreplacementbreakdown.typebreakdown_id" class="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1">
                        
                        <option v-for="typebreakdown in typebreakdowns" :key="typebreakdown.id" :value="typebreakdown.id">  {{ typebreakdown.name_type_breakdown }} </option>
                       
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-12">
                    <label data-tw-merge for="modal-form-4" class="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right">
                        Sélectionnez le véhicule
                    </label>
                    <select data-tw-merge id="modal-form-6" v-model="props.partreplacementbreakdown.vehicle_id" class="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1">
                        
                        <option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.id"> N° {{ vehicle.registration_number_vehicle }} </option>
                       
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <label data-tw-merge for="modal-form-1" class="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right">
                        Nom de la panne
                    </label>
                    <input data-tw-merge id="modal-form-1" v-model="props.partreplacementbreakdown.name_partreplacementbreakdown" type="text" placeholder="Numéro de véhicule" class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10">
                </div>

                <div class="col-span-12 sm:col-span-6">
                    <label data-tw-merge for="modal-form-2" class="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right">
                       Montant de la reparation
                    </label>
                    <input data-tw-merge id="modal-form-2" v-model="props.partreplacementbreakdown.repair_amount_partreplacementbreakdown" type="number" min="1" placeholder="Montant de la reparation" class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10">
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <label data-tw-merge for="modal-form-2" class="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right">
                       Nom du garagiste
                    </label>
                    <input data-tw-merge id="modal-form-2" v-model="props.partreplacementbreakdown.garage_name_partreplacementbreakdown" type="text" placeholder="Nom du garagiste" class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10">
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <label data-tw-merge for="modal-form-2" class="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right">
                       Contact du garagiste
                    </label>
                    <input data-tw-merge id="modal-form-2" v-model="props.partreplacementbreakdown.garage_phone_partreplacementbreakdown" type="text" placeholder="Contact du garagiste" class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10">
                </div>
                <div class="col-span-12 sm:col-span-12">
                    <label data-tw-merge for="modal-form-2" class="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right">
                      Lieu de la panne
                    </label>
                    <input data-tw-merge id="modal-form-2" v-model="props.partreplacementbreakdown.location_of_the_failure_partreplacementbreakdown" type="text" placeholder="Lieu de la panne" class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10">
                </div>
            
               
                <div class="col-span-12 sm:col-span-12">
                    <label data-tw-merge for="modal-form-5" class="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right">
                    Photo de la partie en panne
                    </label>
                    <input data-tw-merge id="modal-form-5" @change="changePhoto1" type="file" accept="image/*" class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10">
                </div>
                <div class="col-span-12 sm:col-span-12">
                    <label data-tw-merge for="modal-form-5" class="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right">
                        Photo de l'ancienne pièce
                    </label>
                    <input data-tw-merge id="modal-form-5" @change="changePhoto2" type="file" accept="image/*" class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10">
                </div>
                <div class="col-span-12 sm:col-span-12">
                    <label data-tw-merge for="modal-form-5" class="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right">
                    Photo de la nouvelle pièce
                    </label>
                    <input data-tw-merge id="modal-form-5" @change="changePhoto3" type="file" accept="image/*" class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10">
                </div>
            
            </div>
            <div class="px-5 py-3 text-right border-t border-slate-200/60 dark:border-darkmode-400">
                
                <IsLoading v-if="isLoading" />
                <div  v-else>

                    <button data-tw-merge data-tw-dismiss="modal" type="button" class="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 mr-1 w-20 mr-1 w-20">Fermer</button>
                    <button 
                     
                        @click="editPartreplacementbreakdown()" 
                        type="button" 
                        class="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary w-20 w-20"
                    >Valider</button>

                </div>
            
            </div>
        </div>
    </div>
    <!-- END: Modal Content -->

</template>