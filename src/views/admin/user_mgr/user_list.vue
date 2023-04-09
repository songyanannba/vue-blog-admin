<template>
    <!-- 用户列表  -->
    <div class="b_container">

        <div class="b_search">
            <a-input-search v-model:value="value" placeholder="input search text" style="width: 200px" />

        </div>

        <div class="b_actions">
            <a-button type="primary">Primary Button</a-button>
            <a-button>Default Button</a-button>

        </div>

        <div class="b_tables">

            <a-table :columns="data.columns" :data-source="data.list" :pagination="false">


            </a-table>

        </div>

        <div class="b_pages">

            <a-pagination v-model:current="page.page" v-model:page-size="page.limit" :total="85" :showSizeChanger="false"
                :show-total="total => `共 ${total} 条`" />


        </div>
    </div>
</template>


<script setup>
import { reactive } from 'vue';



const data = reactive({
    columns: [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: 'action',
        }
    ],
    list: [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ]
})


const page = reactive({
    page: 1,
    limit: 10
})

</script>


<style lang="scss">
.b_container {
    background-color: white;

    .b_search {
        padding: 10px;
        border-bottom: 1px solid var(--bg);
    }

    .b_actions {
        padding: 10px;

        .ant-btn {
            margin-right: 10px;
        }
    }

    .b_pages {
        display: flex;
        justify-content: center;
        padding: 20px;
        margin-bottom: 20px;
    }

}
</style>





