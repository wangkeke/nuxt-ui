<template>
    <div>
      <el-backtop></el-backtop>
        <Header nav="movie" title="电影"/>
        <div class="section">
          <div class="container">
                <div class="card">
                  <div class="card-content py-0 px-0">
                        <el-container>
                            <el-main>
                                <el-row>
                                    <div class="content">
                                        <el-form ref="form">
                                            <el-form-item
                                                label="类型"
                                                class="mb-0"
                                            >
                                                <el-radio-group
                                                    v-model="condition.type"
                                                    size="small"
                                                    @change="typeChange"
                                                >
                                                  <el-radio-button
                                                    label=""
                                                  >全部</el-radio-button>
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
                                                label="地区"
                                                class="mb-0"
                                            >
                                                <el-radio-group
                                                    v-model="condition.country"
                                                    size="small"
                                                    @change="countryChange"
                                                >
                                                  <el-radio-button
                                                    label=""
                                                  >全部</el-radio-button>
                                                    <el-radio-button
                                                        label="大陆"
                                                    >大陆</el-radio-button>
                                                    <el-radio-button
                                                        label="香港"
                                                    >香港</el-radio-button>
                                                    <el-radio-button
                                                        label="台湾"
                                                    >台湾</el-radio-button>
                                                  <el-radio-button
                                                    label="日本"
                                                  >日本</el-radio-button>
                                                  <el-radio-button
                                                    label="韩国"
                                                  >韩国</el-radio-button>
                                                  <el-radio-button
                                                    label="泰国"
                                                  >泰国</el-radio-button>
                                                    <el-radio-button
                                                        label="美国"
                                                    >美国</el-radio-button>
                                                  <el-radio-button
                                                    label="其他"
                                                  >其他</el-radio-button>
                                                </el-radio-group>
                                            </el-form-item>
                                            <el-form-item
                                                label="年代"
                                                class="mb-0"
                                            >
                                                <el-radio-group
                                                    v-model="condition.years"
                                                    size="small"
                                                    @change="yearsChange"
                                                >
                                                  <el-radio-button
                                                    label=""
                                                  >全部</el-radio-button>
                                                    <el-radio-button
                                                        label="2020-2019"
                                                    >2020-2019</el-radio-button>
                                                    <el-radio-button
                                                        label="2018-2016"
                                                    >2018-2016</el-radio-button>
                                                    <el-radio-button
                                                        label="2015-2010"
                                                    >2015-2010</el-radio-button>
                                                    <el-radio-button
                                                        label="2010-2005"
                                                    >2010-2005</el-radio-button>
                                                    <el-radio-button
                                                        label="2005-2000"
                                                    >2005-2000</el-radio-button>
                                                    <el-radio-button
                                                        label="1990"
                                                    >90年代</el-radio-button>
                                                    <el-radio-button
                                                        label="1980"
                                                    >80年代</el-radio-button>
                                                </el-radio-group>
                                            </el-form-item>
                                            <el-form-item
                                                label="排序"
                                                class="mb-0"
                                            >
                                                <el-radio-group
                                                    v-model="condition.order"
                                                    size="small"
                                                    @change="orderChange"
                                                >
                                                    <el-radio-button
                                                        label="1"
                                                    >最近热播</el-radio-button>
                                                    <el-radio-button
                                                        label="2"
                                                    >最新上架</el-radio-button>
                                                    <el-radio-button
                                                        label="3"
                                                    >高分好评</el-radio-button>
                                                </el-radio-group>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-row>
                                <el-row><el-divider class="my-3"></el-divider></el-row>
                                <ResourceList v-on:page-change="pageChange" v-bind:resource="resource" v-bind:columns="6"/>
                            </el-main>
                        </el-container>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
  import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ResourceList from "@/components/ResourceList"

export default {
  async asyncData(context){
    const {data} = await context.$axios.get('/api/movie/query', { params:context.query })
    return {resource : data}
  },
  components: [Header, Footer, ResourceList],
    data() {
      return {
        condition: this.$route.query,
      }
    },
  methods: {
      typeChange(value){
        this.condition.type=value
      },
      countryChange(value){
        this.condition.country=value
      },
      yearsChange(value){
        this.condition.years=value
      },
      orderChange(value){
        this.condition.order=value
      },
      locationChange(params){
        const query = this.$router.history.current.query
        const path = this.$router.history.current.path
        const newQuery = JSON.parse(JSON.stringify(query))
        Object.keys(params).forEach(k => {
          newQuery[k] = params[k]
        })
        this.$router.push({ path, query: newQuery })
        return newQuery
      },
      async pageChange(param){
        const {data} = await this.$axios.get('/api/movie/query', { params: this.locationChange(param)})
        this.resource = data
      },
    },
}
</script>
