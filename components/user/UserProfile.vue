<template>
    <div class="content">
        <figure class="image is-rounded is-480x480">
            <img
                class="is-rounded"
                src="https://avatars0.githubusercontent.com/u/8379742?s=460&v=4"
            />
        </figure>
        <p class="has-text-centered">
            <strong class="subtitle">Wangkeke</strong>
            <small class="el-icon-male"></small>
        </p>
        <p class="has-text-grey" style="font-size: 0.85rem;">
            <span class="is-inline-block"
                >自动化系统，技术分析师，EA专家编程达人</span
            >
            <br />
            <span class="is-inline-block"
                ><i class="el-icon-location-information"></i>
                北京市-海淀区</span
            >
            <br />
            <span class="is-inline-block"
                ><i class="el-icon-date"></i> 2019-10-10</span
            >
        </p>
        <div class="columns is-1">
            <div class="column">
                <button class="button is-small is-fullwidth">关 注</button>
            </div>
            <div class="column is-one-fifth">
                <el-dropdown trigger="click">
                    <el-button type="text" size="mini" icon="el-icon-more">
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-warning-outline"
                            >举报</el-dropdown-item
                        >
                        <el-dropdown-item icon="el-icon-circle-close"
                            >屏蔽</el-dropdown-item
                        >
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <p class="has-text-grey">
            <el-divider content-position="left"
                ><i class="el-icon-user"></i> 被关注（3）</el-divider
            >
            dsadsadsad
        </p>
        <p class="has-text-grey">
            <el-divider content-position="left"
                ><i class="el-icon-view"></i> 已关注（3）</el-divider
            >
            dsadsadsad
        </p>
        <p class="has-text-grey">
            <el-divider content-position="left"
                ><i class="el-icon-circle-close"></i> 已屏蔽（3）</el-divider
            >
            dsadsadsad
        </p>
    </div>
</template>

<script>
export default {
    name: 'UserProfile',
}
</script>

<style scoped></style>
