<script setup>
import { reactive, ref, onMounted } from "vue";
import router from "./../../../router/index.js"
import IsLoading from '../../components/IsLoading.vue'
import ForgetPassword from './ForgetPassword.vue'


let form = reactive({
    email: "",
    password: "",
});


// Définition des données réactives
const showPassword = ref(false);

// Méthode pour basculer la visibilité du mot de passe
const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
    console.log('showPassword', showPassword.value);
};



const isLoading = ref(false);

const login = async () => {
    isLoading.value = true; // Activation du chargement

    await axios.post("/api/login", form).then((response) => {
        if (response.data.success) {
            isLoading.value = false; // Désactivation du chargement

            sessionStorage.setItem("token", response.data.data.token);
            router.push("/dashboad/statistic");

            toast.fire({
                icon: "success",
                title: "Connexion réussie",
            });

        } else {
            isLoading.value = false;
            toast.fire({
                icon: "error",
                title: response.data.message,
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
};

</script>

<template>
    <div class="container grid grid-cols-12 px-5 py-10 sm:px-10 sm:py-14 md:px-36 lg:h-screen lg:max-w-[1550px] lg:py-0 lg:pl-14 lg:pr-12 xl:px-24 2xl:max-w-[1750px]">
    <div class="relative z-50 h-full col-span-12 p-7 sm:p-14 bg-white rounded-2xl lg:bg-transparent lg:pr-10 lg:col-span-5 xl:pr-24 2xl:col-span-4 lg:p-0 before:content-[''] before:absolute before:inset-0 before:-mb-3.5 before:bg-white/40 before:rounded-2xl before:mx-5">
        <div class="relative z-10 flex flex-col justify-center w-full h-full py-2 lg:py-32">
            <div class="flex h-[55px] w-[55px] items-center justify-center rounded-[0.8rem] border border-primary/30">
                <div class="relative flex h-[50px] w-[50px] items-center justify-center rounded-[0.6rem] bg-white bg-gradient-to-b from-theme-1/90 to-theme-2/90">
                    <div class="relative h-[26px] w-[26px] -rotate-45 [&_div]:bg-white">
                        <div class="absolute inset-y-0 left-0 my-auto h-[75%] w-[20%] rounded-full opacity-50"></div>
                        <div class="absolute inset-0 m-auto h-[120%] w-[20%] rounded-full"></div>
                        <div class="absolute inset-y-0 right-0 my-auto h-[75%] w-[20%] rounded-full opacity-50"></div>
                    </div>
                </div>
            </div>
            <div class="mt-10">
                <div class="text-2xl font-medium">Connexion</div>
                <div class="mt-2.5 text-slate-600">
                    Vous n'avez pas de compte ?
                    <a class="font-medium text-primary" href="/dashboad/Register">
                        S'inscrire
                    </a>
                </div>
                <ForgetPassword />
                <!-- <div role="alert" class="alert relative border rounded-md px-5 py-4 border-primary text-primary dark:border-primary my-7 flex items-center rounded-[0.6rem] border-primary/20 bg-primary/5 px-4 py-3 leading-[1.7]">
                    <div class="">
                        <i data-tw-merge="" data-lucide="lightbulb" class="mr-2 h-7 w-7 fill-primary/10 stroke-[0.8]"></i>
                    </div>
                    <div class="ml-1 mr-8">
                        Welcome to <span class="font-medium">Tailwise</span>
                        demo! Simply click
                        <span class="font-medium">Sign In</span> to explore
                        and access our documentation.
                    </div>
                    <button data-tw-merge="" data-tw-dismiss="alert" type="button" aria-label="Close" class="py-2 px-3 absolute right-0 my-auto mr-2 btn-close text-primary"><i data-tw-merge="" data-lucide="x" class="stroke-[1] w-5 h-5"></i></button>
                </div> -->
                <div class="mt-6">
                    <label data-tw-merge="" class="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right">
                        Email*
                    </label>
                    <input data-tw-merge="" v-model="form.email" type="text" placeholder="meryl.streep@left4code.com" class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 block rounded-[0.6rem] border-slate-300/80 px-4 py-3.5">
                    <label data-tw-merge="" class="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right mt-4">
                        Password*
                    </label>
                    
                    <input 
                        data-tw-merge="" 
                        v-model="form.password" 
                        :type="showPassword ? 'text' : 'password'" 
                        placeholder="************" 
                        class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 block rounded-[0.6rem] border-slate-300/80 px-4 py-3.5"
                    >
                
                    <div class="password-toggle" @click="togglePasswordVisibility">
                        <span v-show="showPassword" >
                            
                            <i data-tw-merge data-lucide="eye-off" class="stroke-[1] w-5 h-5 mx-auto block mx-auto block"></i>
                        </span>
                        <span v-show="!showPassword">
                            <i data-tw-merge data-lucide="eye" class="stroke-[1] w-5 h-5 mx-auto block mx-auto block"></i>


                        </span>
                    </div>
     
                    <div class="flex mt-4 text-xs text-slate-500 sm:text-sm">
                        <div class="flex items-center mr-auto">
                            <input data-tw-merge="" type="checkbox" class="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 mr-2.5 border" id="remember-me">
                            <label class="cursor-pointer select-none" for="remember-me">
                                Se souvenir de moi
                            </label>
                        </div>
                        <a href="#" data-tw-merge data-tw-toggle="modal" data-tw-target="#forget-password-modal-preview">Mot de passe oublié?</a>
                    </div>
                    
                    <div class="mt-5 text-center xl:mt-8 xl:text-left">
                       <IsLoading v-if="isLoading" />

                        <button v-else data-tw-merge="" type="button" @click="login()" class="transition duration-200 border shadow-sm inline-flex items-center justify-center px-3 font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary rounded-full w-full bg-gradient-to-r from-theme-1/70 to-theme-2/70 py-3.5 xl:mr-3">Connexion</button>
                        <!-- <button data-tw-merge="" class="transition duration-200 border shadow-sm inline-flex items-center justify-center px-3 font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 rounded-full mt-3 w-full bg-white/70 py-3.5">Sign Up</button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container fixed inset-0 grid h-screen w-screen grid-cols-12 pl-14 pr-12 lg:max-w-[1550px] xl:px-24 2xl:max-w-[1750px]">
    <div class="relative h-screen col-span-12 lg:col-span-5 2xl:col-span-4 z-20 after:bg-white after:hidden after:lg:block after:content-[''] after:absolute after:right-0 after:inset-y-0 after:bg-gradient-to-b after:from-white after:to-slate-100/80 after:w-[800%] after:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0] before:content-[''] before:hidden before:lg:block before:absolute before:right-0 before:inset-y-0 before:my-6 before:bg-gradient-to-b before:from-white/10 before:to-slate-50/10 before:bg-white/50 before:w-[800%] before:-mr-4 before:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0]"></div>
    <div class="h-full col-span-7 2xl:col-span-8 lg:relative before:content-[''] before:absolute before:lg:-ml-10 before:left-0 before:inset-y-0 before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:w-screen before:lg:w-[800%] after:content-[''] after:absolute after:inset-y-0 after:left-0 after:w-screen after:lg:w-[800%] after:bg-texture-white after:bg-fixed after:bg-center after:lg:bg-[25rem_-25rem] after:bg-no-repeat">
        <div class="sticky top-0 z-10 flex-col justify-center hidden h-screen ml-16 lg:flex xl:ml-28 2xl:ml-36">
            <div class="text-[2.6rem] font-medium leading-[1.4] text-white xl:text-5xl xl:leading-[1.2]">
               Gérez Votre Flotte de  <br>VTC Avec Facilité 
            </div>
            <div class="mt-5 text-base leading-relaxed text-white/70 xl:text-lg">
                Notre application web de gestion de VTC vous offre une solution complète pour gérer efficacement votre flotte de véhicules avec chauffeur. Simplifiez la gestion de vos chauffeurs, véhicules, priorités, approvisionnements et voyages, le tout dans une plateforme conviviale et sécurisée 
            </div>
   
        </div>
    </div>
</div>
</template>

<style scoped>
    .password-toggle {
        position: absolute;
        top: 61%;
        right: 10px; /* ajustez ceci selon vos besoins */
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        margin: 0;
    }

    /* Ajustez la position du champ de mot de passe pour laisser de l'espace pour l'icône */
    .form-input input {
        padding-right: 30px; /* Ajoutez de l'espace à droite pour l'icône */
    }
</style>