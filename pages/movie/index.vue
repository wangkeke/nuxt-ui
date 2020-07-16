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
        <div class="container white-bg-block">
            <el-container>
                <el-header>
                    <el-row style="margin: 1rem;">
                        <el-divider content-position="left">
                            <el-breadcrumb separator="/">
                                <el-breadcrumb-item :to="{ path: '/' }"
                                    >首页</el-breadcrumb-item
                                >
                                <el-breadcrumb-item>电影</el-breadcrumb-item>
                            </el-breadcrumb>
                        </el-divider>
                    </el-row>
                </el-header>
                <!--              <el-main style="padding-top: 0;">-->
                <!--                    -->
                <!--                  </el-main>-->
                <el-main>
                    <el-row>
                        <div class="content">
                            <el-form
                                ref="form"
                                :model="form"
                                label-width="130px"
                            >
                                <el-form-item
                                    style="margin-bottom: 10px;"
                                    label="类型"
                                >
                                    <el-radio-group
                                        v-model="radio1"
                                        size="small"
                                    >
                                        <el-radio-button
                                            label="动作"
                                        ></el-radio-button>
                                        <el-radio-button
                                            label="喜剧"
                                        ></el-radio-button>
                                        <el-radio-button
                                            label="恐怖"
                                        ></el-radio-button>
                                        <el-radio-button
                                            label="犯罪"
                                        ></el-radio-button>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item
                                    style="margin-bottom: 10px;"
                                    label="地区"
                                >
                                    <el-radio-group
                                        v-model="radio2"
                                        size="small"
                                    >
                                        <el-radio-button
                                            label="大陆"
                                        ></el-radio-button>
                                        <el-radio-button
                                            label="香港"
                                        ></el-radio-button>
                                        <el-radio-button
                                            label="台湾"
                                        ></el-radio-button>
                                        <el-radio-button
                                            label="美国"
                                        ></el-radio-button>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item
                                    style="margin-bottom: 10px;"
                                    label="年代"
                                >
                                    <el-radio-group
                                        v-model="radio3"
                                        size="small"
                                    >
                                        <el-radio-button
                                            label="2020-2019"
                                        ></el-radio-button>
                                        <el-radio-button
                                            label="2018-2015"
                                        ></el-radio-button>
                                        <el-radio-button
                                            label="2015-2010"
                                        ></el-radio-button>
                                        <el-radio-button
                                            label="2010-2005"
                                        ></el-radio-button>
                                        <el-radio-button
                                            label="2005-2000"
                                        ></el-radio-button>
                                        <el-radio-button
                                            label="90年代"
                                        ></el-radio-button>
                                        <el-radio-button
                                            label="80年代"
                                        ></el-radio-button>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item
                                    style="margin-bottom: 10px;"
                                    label="排序"
                                >
                                    <el-radio-group
                                        v-model="radio4"
                                        size="small"
                                    >
                                        <el-radio-button
                                            label="最近热播"
                                        ></el-radio-button>
                                        <el-radio-button
                                            label="最新上架"
                                        ></el-radio-button>
                                        <el-radio-button
                                            label="高分好评"
                                        ></el-radio-button>
                                    </el-radio-group>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-row>
                    <el-row><el-divider></el-divider></el-row>
                    <el-row :gutter="12">
                        <el-col :span="4" style="margin-bottom: 1rem;">
                            <el-card shadow="hover">
                                鼠标悬浮时显示
                            </el-card>
                        </el-col>
                        <el-col :span="4" style="margin-bottom: 1rem;">
                            <el-card shadow="hover">
                                鼠标悬浮时显示
                            </el-card>
                        </el-col>
                        <el-col :span="4" style="margin-bottom: 1rem;">
                            <el-card shadow="hover">
                                鼠标悬浮时显示
                            </el-card>
                        </el-col>
                        <el-col :span="4" style="margin-bottom: 1rem;">
                            <el-card shadow="hover">
                                鼠标悬浮时显示
                            </el-card>
                        </el-col>
                        <el-col :span="4" style="margin-bottom: 1rem;">
                            <el-card shadow="hover">
                                鼠标悬浮时显示
                            </el-card>
                        </el-col>
                        <el-col :span="4" style="margin-bottom: 1rem;">
                            <el-card shadow="hover">
                                鼠标悬浮时显示
                            </el-card>
                        </el-col>
                        <el-col :span="4" style="margin-bottom: 1rem;">
                            <el-card shadow="hover">
                                鼠标悬浮时显示
                            </el-card>
                        </el-col>
                        <el-col :span="4" style="margin-bottom: 1rem;">
                            <el-card shadow="hover">
                                鼠标悬浮时显示
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-row
                        align="right"
                        style="margin-bottom: 1.5rem; text-align: right;"
                    >
                        <el-pagination
                            background
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage3"
                            :page-size="100"
                            layout="prev, pager, next, jumper"
                            :total="1000"
                        >
                        </el-pagination>
                    </el-row>
                </el-main>
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
import GlobalSearch from '@/components/GlobalSearch'

export default {
    asyncData({ $axios }) {
        $axios.$get(`/api/moviesource/_search`).then((res) => {
            return { restaurants: res.data.restaurants }
        })
    },
    components: [GlobalSearch],
    data() {
        return {
            radio1: '',
            radio2: '',
            radio3: '',
            radio4: '',
        }
    },
}
</script>
