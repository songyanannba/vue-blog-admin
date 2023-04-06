<template>
    <div class="b_aside">
        <div class="b_aside_header flex">

            <div class="b_aside_logo flex">
                <img src="https://gd-hbimg.huaban.com/e2f973632ff03139892c6c05afcfec264b279dc4135e9-jY97sg" alt="">
            </div>

            <div class="b_aside_title flex">
                后台系统gogogo
            </div>

            <div class="b_aside_body flex">


                <!-- 菜单栏 -->
                <BAsideMenu></BAsideMenu>

            </div>

        </div>

    </div>
</template>


<script setup>

import BAsideMenu from './b_aside_menu.vue'



</script>

<style lang="scss">
.b_aside {
    width: 240px;
    height: 100vh;
    background-color: var(--slide);
}

.b_aside_header {
    width: 100%;
    height: 130px;

    flex-direction: column;


}

.b_aside_logo {
    padding: 10px;

    img {
        margin-top: 200px;
        width: 80%;
    }


}

.b_aside_title {
    //margin-top: 20px;
    font-size: 20px;
    color: #e7e7e7;
}

.b_aside_body {
    margin-top: 10px;

}
</style>








