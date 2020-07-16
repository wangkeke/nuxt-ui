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
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item :to="{ path: '/' }"
                                >首页</el-breadcrumb-item
                            >
                            <el-breadcrumb-item :to="{ path: '/movie' }"
                                >电影</el-breadcrumb-item
                            >
                            <el-breadcrumb-item>第九区</el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-row>
                </el-header>
                <el-main>
                    <el-row>
                        <article
                            v-for="o in 1"
                            v-bind:key="o + 'box'"
                            class="media"
                        >
                            <figure class="media-left">
                                <p class="image">
                                    <img
                                        src="http://tu.sixco.shop/upload/vod/20191029-2/84608aa269058ca7aa632441b4ef84a8.jpg"
                                    />
                                </p>
                            </figure>
                            <div class="media-content">
                                <div class="content">
                                    <p style="font-size: 0.9rem;">
                                        <strong class="subtitle">第九区</strong>
                                        <small>@johnsmith</small>
                                        <br />
                                        评分：<strong class="has-text-danger"
                                            >10.0</strong
                                        >
                                        <br />
                                        年份：2018
                                        <br />
                                        类型：恐怖
                                        <br />
                                        地区：美国
                                        <br />
                                        演员：沙尔托·科普雷,詹森·库伯,娜塔莉·博尔特,茜尔雯·斯特赖克,约翰·萨莫尔,威廉·艾伦·扬,尼克·布
                                        <br />
                                        导演：尼尔·布洛姆坎普
                                        <br />
                                        概要：
                                        第九区：1990年，一艘巨大的飞船出现在地球上空，人们惶恐不安，却又分外好奇。经过一段时间紧张的等待，外星飞船始终没有动静。人类终于小心翼翼靠近它，强行走进舱内，结果发现了不计其数的外星人。他们形容丑陋，宛如虾子，而且健康状况极差，虚弱无力。原来这是一群来自外星的难民，他们最终被地球人接纳，并隔离在南非约翰内斯堡的一片区域内生活，此地名为“第九区”。经过长达20年的繁衍，外星难民的数量扩张至180万之多，且和周边人类的矛盾冲突不断，越来越多的人类呼吁将“大虾”赶出地球。
                                        MNU（列国同盟组织）经过磋商，决定将外星难民迁移到更为偏远的区域。MNU外星事务部门的特工威库斯（Sharlto
                                        Copley
                                        饰）专门负责搬迁工作。威库斯在动员过程中傲慢随意，与当地居民冲突频频。最终，他为自己的行为付出代价，外星人的神秘流体将其感染，威库斯慢慢变成了外星人的模样……
                                    </p>
                                </div>
                            </div>
                        </article>
                    </el-row>
                    <el-row><el-divider></el-divider></el-row>
                    <el-row :gutter="10">
                        <el-col :span="18">
                            <el-row>
                                <video-player
                                    class="video-player-box"
                                    :options="videoOptions"
                                />
                            </el-row>
                            <el-row>
                                <div>
                                    <article class="media">
                                        <figure class="media-left">
                                            <p class="image is-64x64">
                                                <img
                                                    src="https://bulma.io/images/placeholders/128x128.png"
                                                />
                                            </p>
                                        </figure>
                                        <div class="media-content">
                                            <div class="field">
                                                <p class="control">
                                                    <textarea
                                                        class="textarea"
                                                        placeholder="Add a comment..."
                                                    ></textarea>
                                                </p>
                                            </div>
                                            <nav class="level">
                                                <div class="level-left">
                                                    <div class="level-item">
                                                        <a
                                                            class="button is-info"
                                                            >匿名提交</a
                                                        >
                                                    </div>
                                                </div>
                                                <div class="level-right">
                                                    <div class="level-item">
                                                        <el-rate
                                                            v-model="score"
                                                            :colors="
                                                                scoreColors
                                                            "
                                                        >
                                                        </el-rate>
                                                    </div>
                                                </div>
                                            </nav>
                                        </div>
                                    </article>
                                </div>
                                <nav class="level" style="margin-top: 3rem;">
                                    <div class="level-left">
                                        <div class="level-item">
                                            <span>全部评论</span>
                                        </div>
                                    </div>
                                    <div class="level-right">
                                        <div class="level-item">
                                            <el-link :underline="false"
                                                >最新</el-link
                                            >
                                            <el-divider
                                                direction="vertical"
                                            ></el-divider>
                                            <el-link :underline="false"
                                                >最热</el-link
                                            >
                                        </div>
                                    </div>
                                </nav>
                                <div class="box is-shadowless">
                                    <article
                                        v-for="k in 10"
                                        v-bind:key="k + 'cbox'"
                                        class="media"
                                    >
                                        <figure class="media-left">
                                            <p class="image is-64x64">
                                                <img
                                                    src="https://bulma.io/images/placeholders/128x128.png"
                                                />
                                            </p>
                                        </figure>
                                        <div class="media-content">
                                            <div class="content">
                                                <p>
                                                    <strong>John Smith</strong>
                                                    <small>@johnsmith</small>
                                                    <small>31m</small>
                                                    <br />
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Proin ornare magna eros, eu
                                                    pellentesque tortor
                                                    vestibulum ut. Maecenas non
                                                    massa sem. Etiam finibus
                                                    odio quis feugiat facilisis.
                                                </p>
                                            </div>
                                            <nav class="level is-mobile">
                                                <div class="level-left">
                                                    <a class="level-item">
                                                        <span
                                                            class="icon is-small"
                                                            ><i
                                                                class="fas fa-reply"
                                                            ></i
                                                        ></span>
                                                    </a>
                                                    <a class="level-item">
                                                        <span
                                                            class="icon is-small"
                                                            ><i
                                                                class="fas fa-retweet"
                                                            ></i
                                                        ></span>
                                                    </a>
                                                    <a class="level-item">
                                                        <span
                                                            class="icon is-small"
                                                            ><i
                                                                class="fas fa-heart"
                                                            ></i
                                                        ></span>
                                                    </a>
                                                </div>
                                            </nav>
                                        </div>
                                        <div class="media-right">
                                            <el-link
                                                :underline="false"
                                                icon="el-icon-caret-top"
                                                >赞同 3</el-link
                                            >
                                            <el-divider
                                                direction="vertical"
                                            ></el-divider>
                                            <el-link
                                                :underline="false"
                                                icon="el-icon-chat-line-square"
                                                >评论</el-link
                                            >
                                        </div>
                                    </article>
                                </div>
                            </el-row>
                        </el-col>
                        <el-col :span="6">
                            <el-row>
                                <div class="box is-shadowless">
                                    <article
                                        v-for="o in 5"
                                        v-bind:key="o + 'box'"
                                        class="media"
                                    >
                                        <figure class="media-left">
                                            <p
                                                class="image"
                                                style="
                                                    max-width: 128px;
                                                    max-height: 64px;
                                                "
                                            >
                                                <img
                                                    src="https://ib11.go2yd.com/corpimage.php?url=V_08hqVrDZwg&type=webp_324x211&source=mibrowser&net=wifi&docid=V_08hqVrBN"
                                                />
                                            </p>
                                        </figure>
                                        <div class="media-content">
                                            <div class="content">
                                                <p style="font-size: 0.8rem;">
                                                    <strong>John Smith</strong>
                                                    <small>@johnsmith</small>
                                                    <small>31m</small>
                                                    <br />
                                                    电影解说
                                                    恐怖","title":"胆小者看的恐怖电影解说：6分钟看懂印度恐怖起尸鬼1【非恐怖版】
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </el-row>
                        </el-col>
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
import VideoPlayer from '@/components/VideoPlayer'

export default {
    asyncData({ $axios }) {
        $axios.$get(`/api/moviesource/_search`).then((res) => {
            return { restaurants: res.data.restaurants }
        })
    },
    components: [GlobalSearch, VideoPlayer],
    data() {
        return {
            score: null,
            scoreColors: ['#99A9BF', '#F7BA2A', '#FF9900'],
            videoOptions: {
                preload: 'none',
                controls: true,
                muted: false,
                language: 'zh-cn',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [
                    {
                        type: 'application/x-mpegURL',
                        src:
                            'https://bili.meijuzuida.com/20191009/21612_642307d7/index.m3u8',
                    },
                ],
                poster:
                    'https://ib11.go2yd.com/corpimage.php?url=V_09AaXpu7FS&type=webp_324x211&source=mibrowser&net=wifi&docid=V_09AaXpxJ',
                fluid: true,
                hls: true,
            },
        }
    },
}
</script>
<style lang="scss" scoped>
.video-player-box {
    min-height: 600px;
    width: 100%;
}
</style>
