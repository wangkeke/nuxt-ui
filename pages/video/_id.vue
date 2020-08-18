<template>
  <div>
    <Header />
    <div class="section">
      <div class="container">
        <div class="card">
          <div class="card-content ">
            <div class="columns">
              <div class="column is-full">
                <VideoView title="相关推荐" v-bind:resource="data"/>
              </div>
            </div>
            <div class="columns mt-5">
                  <div class="column pl-0 pt-0">
                    <CommentList/>
                  </div>
                  <div class="column is-one-quarter pr-0 pt-0">
                    <RecommendList :resource="data" v-bind:total="8" title="今日热播榜"/>
                  </div>
            </div>
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
  import CommentList from "@/components/CommentList"
  import RecommendList from "@/components/RecommendList"
  import VideoView from "@/components/VideoView"

  export default {
    components: [Header, Footer,CommentList,RecommendList,VideoView],
    data(){
      return {
        data: {
          source: [
            '/video/159500196474477108a004d305f7466f3822cebf1bd51.mp4_bd.mp4',
            'https://video.yidianzixun.com/video/get-url?key=user_upload%2F159500196474477108a004d305f7466f3822cebf1bd51.mp4&need_https=1',
            'https://bili.meijuzuida.com/20191009/21612_642307d7/index.m3u8'
          ],
          poster: 'https://ib11.go2yd.com/corpimage.php?url=V_09KjUlreAt&type=webp_324x211&source=mibrowser&net=wifi&docid=V_09KjUl3x'
        }
      }
    }
  }
</script>
