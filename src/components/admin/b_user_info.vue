<template>
    <div class="b_user_info" >
        <div class="avatar" v-if="props.isAvatar">
            <img src="http://img1.gtimg.com/sports/pics/hv1/187/120/2314/150498637.png" alt="">
        </div>

        <div class="drop_menu">
            <a-dropdown>
                <a class="ant-dropdown-link" @click.prevent> 可以知道
                    <i class="fa fa-angle-down"></i>
                </a>
                <template #overlay>
                    <a-menu @click="menuClick">
                        <a-menu-item key="user_center">
                            <a href="javascript:;">个人中心</a>
                        </a-menu-item>
                        <a-menu-item key="my_message">
                            <a href="javascript:;">我的消息</a>
                        </a-menu-item>
                        <a-menu-item key="article_list">
                            <a href="javascript:;">文章列表</a>
                        </a-menu-item>
                        <a-menu-item key="logout">
                            <a href="javascript:;">其他</a>
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
        </div>
    </div>
</template>

<script setup>

import { useRouter } from 'vue-router';
const router = useRouter()


//控制头像是否显示
const props = defineProps({
    isAvatar:{
        type:Boolean,
        default:false,
    }
})



function menuClick({ key }) {
    console.log(key)
    if (key === "logout") {
        return
    }

    router.push({
        name: key
    })

}

</script>


<style lang="scss">
.b_user_info {
    display: flex;
    align-items: center;
}
</style>