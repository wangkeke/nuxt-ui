<template>
  <div class="card is-shadowless">
    <div class="card-image">
      <video-player :options="videoOptions" />
    </div>
    <div class="card-content py-3 px-3 has-background-white-ter">
      <!-- Main container -->
      <nav class="level">
        <!-- Left side -->
        <div class="level-left">
          <div class="level-item">
            <p>
              <strong class="subtitle is-5">第九区</strong>
              <small v-if="resource.creator" ><a href="#" class="has-text-grey">@johnsmith</a></small>
            </p>
          </div>
          <template v-if="resource.score">
            <p class="level-item">
              <strong class="has-text-danger"
              >9.8分</strong
              >
            </p>
            <p class="level-item">
              <span>65人在线观看，160034条弹幕</span>

              <el-divider
                direction="vertical"
              ></el-divider>
              <span>10.5万人评分</span>
              <el-divider
                direction="vertical"
              ></el-divider>
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
          </template>
          <template v-else>
            <p class="level-item">
              <span>12.4万次播放，160034条弹幕</span>
            </p>
          </template>
        </div>

        <!-- Right side -->
        <div class="level-right">
          <p class="level-item">
            <el-link class="is-size-6" icon="el-icon-share" :underline="false"> 3.4万</el-link>
          </p>
          <p class="level-item">
            <el-link class="is-size-6" icon="el-icon-star-off" :underline="false"> 6.8万</el-link>
          </p>
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
  </div>

</template>

<script>
  import VideoPlayer from "./VideoPlayer"
    export default {
        name: "ResourceView",
        props: {
          resource: {
            type: Object,
            required: true,
            default(){
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
        }
      },
    }
</script>

<style scoped>

</style>
