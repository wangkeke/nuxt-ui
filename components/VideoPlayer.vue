<template>
    <div class="vjs-custom-skin">
        <video ref="videoPlayer" class="video-js"></video>
    </div>
</template>

<script>
import 'videojs-contrib-hls'
import videojs from 'video.js'
import '@/assets/css/custom-video-theme.css'

export default {
    name: 'VideoPlayer',
    props: {
        options: {
            type: Object,
            default() {
                return {}
            },
        },
    },
    data() {
        return {
            player: null,
        }
    },
    mounted() {
        this.player = videojs(
            this.$refs.videoPlayer,
            this.options,
            function onPlayerReady() {
                console.log('onPlayerReady', this)
            }
        )
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    },
}
</script>
