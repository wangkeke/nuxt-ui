<template>
    <div>
        <Header />
        <div class="section">
            <div class="container">
                <ResourceView :resource="data"/>

                <div class="card">
                    <div class="card-content">
                        <div class="columns is-1">
                            <div class="column pl-0">
                              <MovieInfo v-bind:resource="data"/>
                              <CommentList/>
                            </div>
                            <div class="column is-one-quarter pr-0">
                              <RecommendList v-bind:horizontal="true" title="相关推荐"/>
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
import ResourceView from "@/components/ResourceView"
import MovieInfo from "@/components/movie/MovieInfo"
import CommentList from "@/components/CommentList"
import RecommendList from "@/components/RecommendList"

export default {
    components: [Header, Footer,ResourceView,MovieInfo,CommentList,RecommendList],
    data(){
      return {
        data: {
          score: 9.0,
          source: [
            // '/video/159500196474477108a004d305f7466f3822cebf1bd51.mp4_bd.mp4',
            'https://bili.meijuzuida.com/20191009/21612_642307d7/index.m3u8'
          ],
          poster: 'https://ib11.go2yd.com/corpimage.php?url=V_09AaXpu7FS&type=webp_324x211&source=mibrowser&net=wifi&docid=V_09AaXpxJ'
        }
      }
    }
}
</script>
