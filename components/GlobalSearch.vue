<template>
    <div class="grid-content bg-purple">
        <el-autocomplete
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入搜索内容"
            @select="handleSelect"
            class="input-with-select"
            size="small"
        >
            <el-button slot="append" type="primary" icon="el-icon-search"
                >搜索</el-button
            >
        </el-autocomplete>
    </div>
</template>

<script>
export default {
    props: {
        restaurants: Array,
        options: Array,
    },
    data() {
        return {
            state: '',
            selected: '',
        }
    },
    //   return [
    //     { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
    // ]
    methods: {
        querySearchAsync(queryString, cb) {
            this.$axios.$get(`/api/moviesource/_search`).then((res) => {
                return cb(res.data)
            })
        },
        handleSelect(item) {
            this.state = item.value
        },
    },
}
</script>
