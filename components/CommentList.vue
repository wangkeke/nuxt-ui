<template>
  <div style="overflow: auto" class="infinite-list-wrapper" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
    <article class="media mb-3">
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
                                                  rows="2"
                                                ></textarea>
          </p>
        </div>
        <nav class="level is-pulled-right">
          <div class="level-right">
            <div class="level-item">
              <a class="button is-small is-primary"
              >发布影评</a
              >
            </div>
          </div>
        </nav>
      </div>
    </article>
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
                                              <span class="subtitle is-5"
                                              >全部评论</span
                                              >
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
    <article v-for="i in count" v-bind:key="name+'-'+i" class="media mb-0">
            <figure class="media-left">
              <p class="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>John Smith</strong>
                  <small class="has-text-grey"
                  >@johnsmith</small
                  >
                  <small class="has-text-grey"
                  >31m</small
                  >
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
            </div>
            <div class="media-right">
              <small class="has-text-grey"
              ><el-link
                :underline="false"
                icon="el-icon-star-off"
              >123</el-link
              ></small>
            </div>
          </article>
    <p v-if="loading" class="has-text-centered mt-3">加载中...</p>
    <p v-if="noMore" class="has-text-centered mt-3">没有更多了</p>
  </div>
</template>

<script>
    export default {
        name: "CommentList",
        data () {
          return {
            count: 10,
            loading: false
          }
        },
        computed: {
          noMore () {
            return this.count >= 20
          },
          disabled () {
            return this.loading || this.noMore
          }
        },
        methods: {
          load () {
            this.loading = true
            setTimeout(() => {
              this.count += 2
              this.loading = false
            }, 2000)
          }
        }
    }
</script>

<style scoped>

</style>
