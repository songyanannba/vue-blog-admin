<template>
    <!-- openKeys="openKeys"  -->
    <a-menu v-model:selectedKeys="selectedKeys" mode="inline" theme="dark" style="width: 230px" :inline-collapsed="false" @click="goto" >

        <template v-for="menu in data.menuList" :key="menu.name">
            <!-- 一级菜单 -->
            <a-menu-item :key="menu.name" v-if="menu.children.lenght === 0">
                <template #icon>
                    <i :class="'fa ' + menu.icon"></i>
                </template>
                <span>{{ menu.title }}</span>
            </a-menu-item>

            <!-- 二级菜单 -->
            <a-sub-menu  v-else>
                <template #icon>
                    <i :class="'fa ' + menu.icon"></i>
                </template>

                <template #title>{{ menu.title }}</template>

                <a-menu-item :key="sub_menu.name" v-for="sub_menu in menu.children">
                    <template #icon>
                        <i :class="'fa ' + sub_menu.icon"></i>
                    </template>
                    <span>{{ sub_menu.title }}</span>
                </a-menu-item>

            </a-sub-menu>

        </template>



        <!-- <a-sub-menu key="sub2">
                        <template #icon>
                            <AppstoreOutlined />
                        </template>
                        <template #title>Navigation Two</template>
                        <a-menu-item key="9">Option 9</a-menu-item>
                        <a-menu-item key="10">Option 10</a-menu-item>
                        <a-sub-menu key="sub3" title="Submenu">
                            <a-menu-item key="11">Option 11</a-menu-item>
                            <a-menu-item key="12">Option 12</a-menu-item>
                        </a-sub-menu>
                    </a-sub-menu> -->
    </a-menu>
</template>


<script setup>

import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const selectedKeys = ref(["1"])

//路由跳转
var router = useRouter()
function goto(event) {
    console.log(event)

    router.push({
        name : event.key
    })
}

const data = reactive({
    menuList: [
        {
            id: 1,
            icon: "fa-user-circle",
            title: "首页",
            name: "home",
            children: []
        },
        {
            id: 2,
            icon: "fa-user-circle-o",
            title: "用户管理",
            name: "u",
            children: [
                {
                    id: 3,
                    icon: "fa-user-plus",
                    title: "用户列表",
                    name: "user_list",
                },
                {
                    id: 4,
                    icon: "fa-user-plus",
                    title: "用户详情",
                    name: "user_detail",
                }
            ]
        },
        {
            id: 5,
            icon: "fa-cog",
            title: "系统管理",
            name: "u",
            children: [
            {
                    id: 6,
                    icon: "fa-folder-open-o",
                    title: "配置列表",
                    name: "system_list",
                },
                {
                    id: 7,
                    icon: "fa-server",
                    title: "系统配置",
                    name: "system_detail",
                },
            
            ]
        }

    ]
})



</script>