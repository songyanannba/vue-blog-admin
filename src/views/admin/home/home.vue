<template>
    <div class="b_data_preview">
        <div class="preview_item" v-for="(item, index) in data.sum_data_list" :key="index">
            <div class="icon">
                <i :class="'fa ' + iconList[index]"></i>
                <!-- <i class="iconfont icon-message"></i>  -->
            </div>
            <div class="text">
                <div class="data_title">
                    {{ item.label }}
                </div>
                <div class="data_num">
                    {{ item.value }}
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

import { reactive } from "vue"


//fa字体
const iconList = [
    "fa-cog",
    "fa-flag",
    "fa-commenting",
    "fa-flag-o",
    "fa-bell-slash",
]

// const iconList = [
//     "fa-cog",
//     "fa-flag",
//     "fa-commenting",
//     "fa-flag-o",
//     "icon-message",
// ]

const data = reactive({
    sum_data_list: [
        {
            label: "用户总数",
            value: 21

        },
        {
            label: "文章总数",
            value: 213

        },
        {
            label: "消息总数",
            value: 123

        },
        {
            label: "今日总数",
            value: 564

        },
        {
            label: "今日总数",
            value: 23

        },
    ]

})

</script>  


<style lang="scss">
.b_data_preview {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 20px;
    background-color: var(--card_bg);
}
 
.preview_item {
    display: flex;
    background-color: var(--card_bg);
    border-radius: 5px;
    border: 1px solid  var(--card_boder);
    padding: 20px;


    .icon {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        i {
            font-size: 40px;
            color: var(--active);
        }
    }

    .text {
        width: 40%;
        font-size: 16px;

        display: flex;
        flex-direction: column;
        justify-content: center;

        .data_title {
            font-size: 18px;
            color: var(--text);
        }

        .data_num {
            color: var(--text);

        }
    }

}
</style>