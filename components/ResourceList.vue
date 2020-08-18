<template>
    <div>
        <div class="content" >
            <el-row v-for="r in rows" :key="r + '-row-rsr'" :gutter="16">
                <el-col
                    v-for="i in columns"
                    :key="r + '-' + i + '-col-rsl'"
                    :span="24/columns"
                    style="margin-bottom: 1.5rem;"
                >
                    <el-card v-if="(r-1)*columns+i-1<resource.numberOfElements" shadow="hover" :body-style="{ padding: '0px' }">
                      <a>
                        <img
                          style="width: 100%;max-height: 264px;"
                          v-bind:src="resource.content[(r-1)*columns+i-1].img"
                          class="image"
                        />
                      </a>
                      <div style="padding: 8px;" class="is-size-7 ">
                        <template v-if="!resource.content[(r-1)*columns+i-1].movieId">
                          <strong v-if="resource.content[(r-1)*columns+i-1].metric" style="margin-top: -2.75rem;background-color: rgba(66,66,66,0);" class="tag is-dark is-light is-rounded is-relative is-pulled-left" ><i class="el-icon-video-camera is-size-6"></i> {{resource.content[(r-1)*columns+i-1].metric.plays}}</strong>
                          <strong v-if="resource.content[(r-1)*columns+i-1].metric" style="margin-top: -2.75rem;background-color: rgba(66,66,66,0);" class="tag is-dark is-light is-rounded is-relative is-pulled-right" >{{resource.content[(r-1)*columns+i-1].duration}}</strong>
                          <div v-if="resource.content[(r-1)*columns+i-1].tags" class="level mb-1">
                            <div class="level-left">
                              <div v-for="t in resource.content[(r-1)*columns+i-1].tags.split(',')" v-bind:key="t+'-video-tag'" class="level-item">
                                <span class="tag is-light is-rounded">{{t}}</span>
                              </div>
                            </div>
                          </div>
                          <p class="mb-1">
                            <a class="has-text-grey-dark">
                              {{resource.content[(r-1)*columns+i-1].title}}
                            </a>
                          </p>
                          <div v-if="resource.content[(r-1)*columns+i-1].metric" class="level-left has-text-grey is-size-7">
                            <span ><i class="el-icon-video-camera is-size-6"></i> {{resource.content[(r-1)*columns+i-1].metric.plays}}播放</span>
                            <el-divider direction="vertical"></el-divider>
                            <span >{{resource.content[(r-1)*columns+i-1].metric.danmakus}}弹幕</span>
                          </div>
                        </template>
                        <template v-else>
                          <a class="level mb-1">
                            <div class="level-left">
                              <strong class="subtitle is-6 has-text-grey-dark">{{resource.content[(r-1)*columns+i-1].name}}</strong>
                            </div>
                            <div class="level-right">
                              <strong class="has-text-danger is-size-6"
                              >{{Number(resource.content[(r-1)*columns+i-1].score).toFixed(1)}}</strong
                              >
                            </div>
                          </a>
                          <div class="level mb-1">
                            <div class="level-left">
                              <div class="level-item" v-if="resource.content[(r-1)*columns+i-1].time">
                                <span class="tag is-light is-rounded">{{resource.content[(r-1)*columns+i-1].time}}</span>
                              </div>
                              <div class="level-item" v-if="resource.content[(r-1)*columns+i-1].type">
                                <span class="tag is-light is-rounded">{{resource.content[(r-1)*columns+i-1].type}}</span>
                              </div>
                              <div class="level-item" v-if="resource.content[(r-1)*columns+i-1].area">
                                <span class="tag is-light is-rounded">{{resource.content[(r-1)*columns+i-1].area}}</span>
                              </div>
                            </div>
                          </div>
                          <div class="content has-text-grey-dark">
                            <strong>简介:</strong>{{resource.content[(r-1)*columns+i-1].desc.length>27?resource.content[(r-1)*columns+i-1].desc.substr(0,27):resource.content[(r-1)*columns+i-1].desc}}
                          </div>
                        </template>
                      </div>
                    </el-card>

                </el-col>
            </el-row>
            <template v-if="number > 0"> </template>
            <el-row v-else class="mt-5" style="text-align: right;">
              <el-pagination
                background
                @current-change="handleCurrentChange"
                @size-change="handleSizeChange"
                :current-page="resource.number+1"
                :page-size="resource.size"
                layout="prev, pager, next, sizes, jumper, ->, total"
                :page-count="resource.totalPages"
                :total="resource.totalElements"
                :page-sizes="[24, 48, 72 , 100,200]"
              >
              </el-pagination>
            </el-row>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ResourceList',
    props: {
        columns: {
            type: Number,
            required: false,
            default: 4
        },
        resource: {
            type: Object,
            required: false,
            default() {
              return {}
            },
        },
        paging: {
            type: Boolean,
            required: false,
            default: true,
        },
        number: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    data() {
        return {
        }
    },
    computed: {
      content(){
        return this.resource.content
      },
      rows () {
        return Math.round((this.content.length+this.columns-1)/this.columns)
      },
    },
    methods: {
      handleCurrentChange(v){
        this.$emit('page-change',{page: v})
      },
      handleSizeChange(v){
        this.$emit('page-change',{size: v,page: 1})
      }
    },
}
</script>

<style scoped></style>
