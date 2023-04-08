import {createRouter , createWebHistory} from 'vue-router'

import Login from "../views/loGin.vue"
import Admin from "../views/admin/adMin"
import Home from "../views/admin/home/home.vue"
import UserList from "../views/admin/user_mgr/user_list.vue"
import UserDetail from "../views/admin/user_mgr/user_detail.vue"
import SystemList from "../views/admin/system_mgr/system_list.vue"
import SystemDetail from "../views/admin/system_mgr/system_detail.vue"

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
            children : [
                { 
                    path: "",
                    name : "admin_index",
                    redirect :"/admin/home"
                },
                {
                    path: "home",
                    name : "home ",
                    component: Home,
                },
                {
                    path: "user_list",
                    name : "user_list",
                    component: UserList,
                },
                {
                    path: "user_detail",
                    name : "user_detail",
                    component: UserDetail,
                },
                {
                    path: "system_list",
                    name : "system_list",
                    component: SystemList,
                },{
                    path: "system_detail",
                    name : "system_detail",
                    component: SystemDetail,
                }
            ]
        }
    ]
})

//console.log(router)

export default router