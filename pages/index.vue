<template>
    <div>
        <nav
            class="navbar is-dark is-fixed-top is-widescreen"
            style="padding: 0 12rem;"
            role="navigation"
            aria-label="main navigation"
        >
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img
                        src="https://bulma.io/images/bulma-logo-white.png"
                        width="112"
                        height="28"
                    />
                </a>
                <div class="navbar-item">
                    <GlobalSearch
                        v-bind:restaurants="restaurants"
                        v-bind:options="cates"
                    ></GlobalSearch>
                </div>
            </div>

            <div class="navbar-menu">
                <div class="navbar-start"></div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <el-button size="medium" type="primary"
                            >上传<i class="el-icon-upload el-icon--right"></i
                        ></el-button>
                    </div>
                    <div class="navbar-item">
                        <el-button size="medium" type="primary"
                            >创建账户</el-button
                        >
                        <el-button size="medium">登 录</el-button>
                    </div>
                </div>
            </div>
        </nav>
        <!-- main container -->
        <div class="container" style="margin-top: 40px;">
            <el-container>
                <el-aside width="240px" style="border-radius: 4px;">
                    <el-row>
                        <el-alert
                            style="
                                background-color: #297488;
                                color: #eeeeee;
                                font-weight: 500;
                                border-radius: 0px;
                            "
                            title="请登录来分享你的视频资源！"
                            type="info"
                            :closable="false"
                            show-icon
                        >
                        </el-alert>
                    </el-row>
                    <el-row
                        style="
                            background-color: #297488;
                            padding: 5px 20px;
                            text-align: center;
                        "
                    >
                        <el-button size="mini" style="width: 100%;"
                            >登 录</el-button
                        >
                    </el-row>
                    <el-row
                        style="
                            background-color: #297488;
                            padding: 10px 20px;
                            text-align: center;
                        "
                    >
                        <el-button
                            type="primary"
                            size="mini"
                            style="width: 100%;"
                            >创建账户</el-button
                        >
                    </el-row>
                    <el-row>
                        <el-menu
                            default-active="1"
                            background-color="#2f495e"
                            text-color="#aaaaaa"
                            active-text-color="#ffffff"
                            style="border: 0px;"
                        >
                            <el-menu-item index="1">
                                <i class="el-icon-s-unfold"></i>
                                <span slot="title">来自站点</span>
                            </el-menu-item>
                            <el-menu-item index="2">
                                <i class="el-icon-star-on"></i>
                                <span slot="title">本周热播</span>
                            </el-menu-item>
                            <el-menu-item index="3">
                                <i class="el-icon-s-data"></i>
                                <span slot="title">排行榜</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <i class="el-icon-film"></i>
                                <span slot="title">电影</span>
                            </el-menu-item>
                            <el-menu-item index="5">
                                <i class="el-icon-eleme"></i>
                                <span slot="title">娱乐</span>
                            </el-menu-item>
                            <el-menu-item index="6">
                                <i class="el-icon-coordinate"></i>
                                <span slot="title">游戏</span>
                            </el-menu-item>
                            <el-menu-item index="7">
                                <i class="el-icon-reading"></i>
                                <span slot="title">文章/博客</span>
                            </el-menu-item>
                            <el-menu-item index="8">
                                <i class="el-icon-video-camera"></i>
                                <span slot="title">精彩剪辑</span>
                            </el-menu-item>
                        </el-menu>
                    </el-row>
                </el-aside>

                <el-container>
                    <el-main style="padding-top: 0;">
                        <el-row :gutter="20">
                            <el-col :span="17">
                                <div class="grid-content">
                                    <article class="panel is-dark">
                                        <p class="panel-heading">
                                            [来自站点]
                                        </p>
                                        <div
                                            class="panel-block"
                                            style="background-color: #ffffff;"
                                        >
                                            <span class="panel-icon">
                                                <i
                                                    class="fas fa-book"
                                                    aria-hidden="true"
                                                ></i>
                                            </span>
                                            minireset.css
                                        </div>

                                        <div
                                            v-for="i in 30"
                                            v-bind:key="i"
                                            class="panel-block"
                                            style="background-color: #ffffff;"
                                        >
                                            <span class="panel-icon">
                                                <i
                                                    class="fas fa-book"
                                                    aria-hidden="true"
                                                ></i>
                                            </span>
                                            jgthms.github.io + {{ i }}
                                        </div>
                                    </article>
                                </div>
                            </el-col>
                            <el-col :span="7">
                                <div class="content">
                                    <span class="title">今日聚焦</span>
                                </div>
                                <div class="content">
                                    <span class="title">为您推荐</span>
                                </div>
                            </el-col>
                        </el-row>
                    </el-main>
                </el-container>
            </el-container>
        </div>
        <div class="container">
            <footer class="footer" style="background-color: inherit;">
                <div class="content has-text-centered">
                    <p>
                        <strong>Bulma</strong> by
                        <a href="https://jgthms.com">Jeremy Thomas</a>. The
                        source code is licensed
                        <a href="http://opensource.org/licenses/mit-license.php"
                            >MIT</a
                        >. The website content is licensed
                        <a
                            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                            >CC BY NC SA 4.0</a
                        >.
                    </p>
                </div>
            </footer>
        </div>
    </div>
</template>
<script>
import GlobalSearch from '../components/GlobalSearch'

export default {
    asyncData({ $axios }) {
        $axios.$get(`/api/moviesource/_search`).then((res) => {
            return { restaurants: res.data.restaurants }
        })
    },
    components: [GlobalSearch],
}
</script>
