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

                    <BUserInfo :is-avatar=true></BUserInfo>
                </div>

            </header>

            <div class="tabs">
            </div>
            <main>
                <div class="b_view">

                    <!-- 首页 -->
                    <RouterView></RouterView>
                </div>

            </main>
        </div>

    </div>
</template>

<script setup>


import BTheme from '../../components/admin/b_theme.vue'
import BAside from '../../components/admin/b_aside.vue'
import BFullScreen from '../../components/admin/b_full_screen.vue'
import BUserInfo from '../../components/admin/b_user_info.vue'


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
        border: 1px;
        border-color: var(--order);
        border-style: solid;


        border-width: 1px 0 1px 0;

    }

    main {
        padding: 20px;
        background-color: var(-bg);
        height: calc(100vh - 90px);

        .b_view {
            background-color: white;
        }
    }
}
</style>