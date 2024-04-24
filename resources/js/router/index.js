import { createRouter, createWebHistory } from 'vue-router'
import index from '../pages/index.vue'
//auth
import Register from '../pages/views/auth/register.vue'
import Login from '../pages/views/auth/login.vue'
// import Login from '../pages/views/auth/login.vue'

import statistic from '../pages/views/index.vue'

//companies
import IndexCompanies from '../pages/views/admin/companies/IndexCompanies.vue'

//driver
import IndexDriver from '../pages/views/driver/IndexDriver.vue'

//vehicle
import IndexVehicle from '../pages/views/vehicle/IndexVehicle.vue'

//procurement
import IndexProcurement from '../pages/views/procurement/IndexProcurement.vue'

//trip
import IndexTrip from '../pages/views/trip/IndexTrip.vue'

//priority
//insurance
import IndexInsurance from '../pages/views/priority/insurance/IndexInsurance.vue'

//technical Inspection
import IndexTechnicalInspection from '../pages/views/priority/TechnicalInspection/IndexTechnicalInspection.vue'

//technical Inspection
import IndexMotorVehicleTax from '../pages/views/priority/MotorVehicleTax/IndexMotorVehicleTax.vue'

//pannes
import IndexTypeBreakdown from '../pages/views/breakdown/typebreakdown/IndexTypeBreakdown.vue'
import IndexSimpleBreakdown from '../pages/views/breakdown/simplebreakdown/IndexSimpleBreakdown.vue'
import IndexPartReplacementBreakdown from '../pages/views/breakdown/partreplacementbreakdown/IndexPartReplacementBreakdown.vue'


import notFound from '../pages/notFound.vue'

const routes = [
    {   
        name: 'index',
        path: '/',
        component: index,
        
    },
    //auth
    {   
        name: 'Register',
        path: '/dashboad/Register',
        component: Register,
        
    },
    {   
        name: 'Login',
        path: '/dashboad/Login',
        component: Login,
        
    },
    {   
        name: 'statistic',
        path: '/dashboad/statistic',
        component: statistic,
          meta: {
            requiresAuth: true
        }
        
    },
    //driver
    {   
        name: 'IndexDriver',
        path: '/dashboad/IndexDriver',
        component: IndexDriver,
          meta: {
            requiresAuth: true
        }
        
    },
    
    //IndexProcurement
    {   
        name: 'IndexProcurement',
        path: '/dashboad/IndexProcurement',
        component: IndexProcurement,
          meta: {
            requiresAuth: true
        }
        
    },
    //IndexTrip
    {   
        name: 'IndexTrip',
        path: '/dashboad/IndexTrip',
        component: IndexTrip,
          meta: {
            requiresAuth: true
        }
        
        
        
    },

    //priority
    
    //insurance
    {   
        name: 'IndexInsurance',
        path: '/dashboad/IndexInsurance',
        component: IndexInsurance,
          meta: {
            requiresAuth: true
        }
        
        
        
    },
    //IndexTechnicalInspection
    {   
        name: 'IndexTechnicalInspection',
        path: '/dashboad/IndexTechnicalInspection',
        component: IndexTechnicalInspection,
          meta: {
            requiresAuth: true
        }
        
        
        
    },
    //IndexMotorVehicleTax
    {   
        name: 'IndexMotorVehicleTax',
        path: '/dashboad/IndexMotorVehicleTax',
        component: IndexMotorVehicleTax,
         meta: {
            requiresAuth: true
        }
        
    },

    //vehicle
    {   
        name: 'IndexVehicle',
        path: '/dashboad/IndexVehicle',
        component: IndexVehicle,
         meta: {
            requiresAuth: true
        }
        
    },
    //panne
    {   
        name: 'IndexTypeBreakdown',
        path: '/dashboad/IndexTypeBreakdown',
        component: IndexTypeBreakdown,
         meta: {
            requiresAuth: true
        }
        
    },
    {   
        name: 'IndexSimpleBreakdown',
        path: '/dashboad/IndexSimpleBreakdown',
        component: IndexSimpleBreakdown,
         meta: {
            requiresAuth: true
        }
        
    },
    {   
        name: 'IndexPartReplacementBreakdown',
        path: '/dashboad/IndexPartReplacementBreakdown',
        component: IndexPartReplacementBreakdown,
        meta: {
            requiresAuth: true
        }
        
    },
    {   
        name: 'IndexCompanies',
        path: '/dashboad/IndexCompanies',
        component: IndexCompanies,
        meta: {
            requiresAuth: true
        }
        
    },

    {
        path: '/:pathMatch(.*)*',
        component: notFound,
        
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,

})

router.beforeEach((to,from) =>{
    if(to.meta.requiresAuth && !sessionStorage.getItem('token')){
        return { name: 'Login' }
    }

    // if(to.meta.requiresAuth == false && localStorage.getItem('token')){
    //     return { name: 'index' }
    // }
})

export default router
