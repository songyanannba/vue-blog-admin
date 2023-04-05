import {createRouter , createWebHistory} from 'vue-router'

import Login from "../views/loGin.vue"
import Admin from "../views/admin/adMin"

const router = createRouter({

    history : createWebHistory(import.meta.resolve) ,
    routes : [
        {
            path: "/login",
            name : "login",
            component: Login
        },
        {
            path: "/admin",
            name : "admin",
            component: Admin,
            children : []
        }
    ]
})

//console.log(router)

export default router