<template>
    <div class="blog_adMin">

        <BAside></BAside>

        <div class="main">
            <header>
                <div class="left">
                    <a-breadcrumb>
                        <a-breadcrumb-item>首页</a-breadcrumb-item>
                        <a-breadcrumb-item><a href="">个人中心</a></a-breadcrumb-item>
                        <a-breadcrumb-item><a href="">用户列表</a></a-breadcrumb-item>
                    </a-breadcrumb>
                </div>

                <div class="right">

                    <div class="icon_actions">
                        <i class="fa fa-home"></i>
                        <BTheme></BTheme>

                        <BFullScreen></BFullScreen>
                    </div>


                    <div class="avatar">
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

            </header>

            <div class="tabs">
            </div>
            <main> </main>
        </div>

    </div>
</template>

<script setup>

import { useRouter } from 'vue-router';
import BTheme from '../../components/admin/b_theme.vue'
import BAside from '../../components/admin/b_aside.vue'
import BFullScreen from '../../components/admin/b_full_screen.vue'

const router = useRouter()

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
.blog_adMin {
    width: 100%;
    display: flex;

    //左边 菜单栏
    aside {
        width: 240px;
        height: 100vh;
        background-color: var(--slide);
    }

    .main {
        width: calc(100% - 240px);

        header {
            height: 60px;
            //background-color: white;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .right {
                display: flex;
                align-items: center;
            }

            .icon_actions {
                margin-right: 20px;

                i {
                    margin-left: 10px;
                    cursor: pointer;
                    font-size: 16px;
                    clear: var(--text);
                }

                i:hover {
                    color: var(--active);
                }

            }

            .avatar {
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
            }

            .drop_menu {
                margin-left: 10px;
            }

        }
    }

    .tabs {
        height: 30px;
        //border: 1px solid #f0eeee;
        border: 1px solid var(--order);
    }

    main {
        //background-color: var(--ant-info-color-deprecated-bg) ;
        background-color: var(-bg);
        height: calc(100vh - 90px);
    }
}
</style>