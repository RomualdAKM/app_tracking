import { createRouter, createWebHistory } from 'vue-router'
import index from '../pages/index.vue'

import statistic from '../pages/views/index.vue'

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
    {   
        name: 'statistic',
        path: '/dashboad/statistic',
        component: statistic,
        
    },
    //driver
    {   
        name: 'IndexDriver',
        path: '/dashboad/IndexDriver',
        component: IndexDriver,
        
    },
    
    //IndexProcurement
    {   
        name: 'IndexProcurement',
        path: '/dashboad/IndexProcurement',
        component: IndexProcurement,
        
    },
    //IndexTrip
    {   
        name: 'IndexTrip',
        path: '/dashboad/IndexTrip',
        component: IndexTrip,
        
    },

    //priority
    
    //insurance
    {   
        name: 'IndexInsurance',
        path: '/dashboad/IndexInsurance',
        component: IndexInsurance,
        
    },
    //IndexTechnicalInspection
    {   
        name: 'IndexTechnicalInspection',
        path: '/dashboad/IndexTechnicalInspection',
        component: IndexTechnicalInspection,
        
    },
    //IndexMotorVehicleTax
    {   
        name: 'IndexMotorVehicleTax',
        path: '/dashboad/IndexMotorVehicleTax',
        component: IndexMotorVehicleTax,
        
    },

    //vehicle
    {   
        name: 'IndexVehicle',
        path: '/dashboad/IndexVehicle',
        component: IndexVehicle,
        
    },
    //panne
    {   
        name: 'IndexTypeBreakdown',
        path: '/dashboad/IndexTypeBreakdown',
        component: IndexTypeBreakdown,
        
    },
    {   
        name: 'IndexSimpleBreakdown',
        path: '/dashboad/IndexSimpleBreakdown',
        component: IndexSimpleBreakdown,
        
    },
    {   
        name: 'IndexPartReplacementBreakdown',
        path: '/dashboad/IndexPartReplacementBreakdown',
        component: IndexPartReplacementBreakdown,
        
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

export default router
