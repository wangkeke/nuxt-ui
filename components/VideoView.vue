<template>
    <div class="columns is-0">
      <div class="column pl-0 pt-0">
        <template v-if="!resource.score">
          <h3 class="card-header subtitle mb-3 is-shadowless">
            胆小者看的恐怖电影解说：6分钟看懂印度恐怖起尸鬼1【非恐怖版】
          </h3>
        </template>
        <div class="card is-shadowless">
          <div class="card-image">
            <video-player :options="videoOptions" />
          </div>
            <div class="card-content px-3 is-clearfix py-3 has-background-white-ter">
              <!-- Main container -->
              <nav class="level">
                <!-- Left side -->
                <div class="level-left is-clearfix">
                    <p class="level-item">
                      <span><i class="el-icon-video-camera is-size-6"></i> 2.4万次播放</span>
                      <el-divider
                        direction="vertical"
                      ></el-divider>
                      <span>65人在线观看，160034条弹幕</span>
                    </p>
                  <p class="level-item">
                    <el-link class="is-size-6" icon="el-icon-share" :underline="false"> 3.4万</el-link>
                  </p>
                  <p class="level-item">
                    <el-link class="is-size-6" icon="el-icon-star-off" :underline="false"> 6.8万</el-link>
                  </p>
                </div>

                <!-- Right side -->
                <div class="level-right">
                  <p class="level-item">
                    <el-switch v-model="danmaku" active-text="弹幕"> </el-switch>
                  </p>
                  <div class="level-item">
                    <div class="field has-addons">
                      <p class="control">
                        <input
                          class="input is-rounded is-small"
                          type="text"
                          placeholder="发送弹幕"
                        />
                      </p>
                      <p class="control">
                        <button
                          class="button is-rounded is-small"
                        >
                          发送
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <template v-if="resource.score">
            <div class="card-content px-3 is-clearfix py-3 has-background-white-bis">
              <!-- Main container -->
              <nav class="level ">
                <!-- Left side -->
                <div class="level-left is-clearfix">
                  <div class="level-item">
                    <p>
                      <strong class="subtitle is-5">第九区</strong>
                    </p>
                  </div>
                  <p class="level-item">
                    <strong class="has-text-danger"
                    >9.8分</strong
                    >
                    <el-divider
                      direction="vertical"
                    ></el-divider>
                    <span>10.5万人评分</span>
                  </p>
                </div>
                <div class="level-right">
                  <p class="level-item">
                    <span>
                                        <el-rate
                                          allow-half
                                          v-model="score"
                                          :colors="colors"
                                          show-text
                                        >
                                        </el-rate>
                                    </span>
                  </p>
                </div>
              </nav>
            </div>
          </template>
        </div>

      </div>
      <div class="column is-one-quarter pr-0 pt-0">
        <p class="subtitle is-5 mb-3 pt-0">
          {{title}}
          <el-link class="is-pulled-right" :underline="false">更多<i class="ml-0 el-icon-d-arrow-right el-icon--right"></i></el-link>
        </p>
        <div class="is-scroll infinite-list-wrapper" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
          <article
            v-for="i in total" v-bind:key="name+'-'+i"
            class="media"
          >
            <template v-if="resource.score">
              <figure class="media-left mr-3">
                <p
                  class="image"
                  style="
                                                    max-width: 125px;
                                                    max-height: 175px;
                                                "
                >
                  <a>
                    <img
                      src="http://tu.sixco.shop/upload/vod/20191029-2/84608aa269058ca7aa632441b4ef84a8.jpg"
                    />
                  </a>
                </p>
              </figure>
            </template>
            <template v-else>
              <figure class="media-left mr-3">
                <p
                  class="image"
                  style="
                                                    max-width: 141px;
                                                    max-height: 80px;
                                                "
                >
                  <a>
                    <img
                      src="https://ib11.go2yd.com/corpimage.php?url=V_08hqVrDZwg&type=webp_324x211&source=mibrowser&net=wifi&docid=V_08hqVrBN"
                    />
                  </a>
                </p>
              </figure>
            </template>
            <div class="media-content">
              <template v-if="resource.score">
                <p style="font-size: 0.9rem;">
                  <a class="subtitle is-6"
                  >第九区</a
                  >
                  <small>@johnsmith</small>
                  <br />
                  评分：<strong
                  class="has-text-danger"
                >9.0</strong
                >
                  <br />
                  年份：2018
                  <br />
                  类型：恐怖
                  <br />
                  地区：美国
                  <br />
                  演员：沙尔托·科普雷,詹森·库伯...
                </p>
              </template>
              <template v-else>
                <p class="mb-2 is-size-7">
                  <a class="content has-text-grey-dark">胆小者看的恐怖电影解说：6分钟看懂印度恐怖起尸鬼1【非恐怖版】</a>
                </p>
              </template>
              <div class="level mt-2">
                <div class="level-left has-text-grey is-size-7">
                  <span ><i class="el-icon-video-camera is-size-6"></i> 12.3万播放</span>
                  <el-divider direction="vertical"></el-divider>
                  <span >12.3万弹幕</span>
                </div>
              </div>
            </div>
          </article>
          <p v-if="loading" class="has-text-centered mt-3">加载中...</p>
          <p v-if="noMore" class="has-text-centered mt-3">没有更多了</p>
        </div>
      </div>
    </div>
</template>

<script>
  import VideoPlayer from "./VideoPlayer"

    export default {
      name: "VideoView",
      props: {
        title: {
          type: String,
          required:false,
          default: '热播推荐'
        },
        total: {
          type: Number,
          required: false,
          default: 16
        },
        resource: {
          type: Object,
          required: false,
          default() {
            return {}
          }
        },
      },
      components: [VideoPlayer],
      data() {
        const sss = []
        if(this.resource.source){
          this.resource.source.forEach((s,i) => {
            const ss = {
              type: 'video/mp4',
              src: s,
            }
            if(s.endsWith(".m3u8")){
              ss.type = 'application/x-mpegURL'
            }else if(s.endsWith(".mp4")){
              ss.type = 'video/mp4'
            }else {
              this.isIframe = true
            }
            sss.push(ss)
          })
        }
        return {
          score: 4.0,
          danmaku: false,
          colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
          videoOptions: {
            preload: 'none',
            controls: true,
            muted: false,
            language: 'zh-cn',
            playbackRates: [0.7, 1.0, 1.5, 2.0],
            sources: sss,
            poster: this.resource.poster,
            fluid: true,
          },
          loading: false,
        }
      },
      computed: {
        noMore () {
          return this.total >= 20
        },
        disabled () {
          return this.loading || this.noMore
        }
      },
      methods: {
        load () {
          this.loading = true
          setTimeout(() => {
            this.total += 2
            this.loading = false
          }, 2000)
        }
      }
    }
</script>

<style scoped>
  .is-scroll{
    max-height: 653px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
