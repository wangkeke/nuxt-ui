<template>
  <div>
    <p class="subtitle is-5 mb-4">
      {{title}}
      <el-link class="is-pulled-right" :underline="false">更多<i class="ml-0 el-icon-d-arrow-right el-icon--right"></i></el-link>
    </p>
    <div v-bind:class="{'is-scroll': scroll}">
      <article
        v-for="i in total" v-bind:key="name+'-'+i"
        class="media"
      >
        <template v-if="resource.score">
          <figure class="media-left mr-3">
            <p
              class="image"
              style="max-width: 125px;max-height: 175px;"
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
              style="max-width: 141px;max-height: 80px;"
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
    </div>

  </div>
</template>

<script>
    export default {
      name: "RecommendList",
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
        horizontal: {
          type: Boolean,
          required: false,
          default: false,
        },
        vertical: {
          type: Boolean,
          required: false,
          default: true,
        },
        scroll: {
          type: Boolean,
          required: false,
          default: false,
        },
        resource: {
          type: Object,
          required: false,
          default() {
            return {score: 9.0}
          }
        },
      },
      data () {
        return {
        }
      },
    }
</script>

<style scoped>
.is-scroll{
  max-height:800px;
  overflow-y: scroll;
}
</style>
