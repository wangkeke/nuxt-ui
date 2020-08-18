<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane name="first"
            ><span slot="label"
                ><i class="el-icon-date"></i> 关注动态</span
            ></el-tab-pane
        >
        <el-tab-pane name="second"
            ><span slot="label"
                ><i class="el-icon-camera"></i> 我的资源</span
            ></el-tab-pane
        >
        <el-tab-pane name="third"
            ><span slot="label"
                ><i class="el-icon-collection"></i> 我的收藏</span
            ></el-tab-pane
        >
    </el-tabs>
</template>

<script>
export default {
    name: 'UserIndex',
}
</script>

<style scoped></style>
