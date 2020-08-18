<template>
    <nav
        class="navbar is-dark is-spaced is-fixed-top is-fullhd"
        role="navigation"
        aria-label="main navigation"
    >
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img
                    src="https://bulma.io/images/made-with-bulma--semiwhite.png"
                    alt="Made with Bulma"
                    width="128"
                />
            </a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-start">
                <nuxt-link class="navbar-item" v-bind:class="{'is-active':nav=='home'}" :to="{path:'/'}">首页</nuxt-link>
                <nuxt-link class="navbar-item" v-bind:class="{'is-active':nav=='movie'}" :to="{path:'/movie',query:{order:1}}">电影</nuxt-link>
                <nuxt-link class="navbar-item" v-bind:class="{'is-active':nav=='video'}" :to="{path:'/video',query:{order:1}}">视频</nuxt-link>
                <nuxt-link class="navbar-item" v-bind:class="{'is-active':nav=='live'}" :to="{path:'/live',query:{order:1}}">直播</nuxt-link>
                <div class="navbar-item">
                    <div class="field">
                        <p class="control has-icons-right">
                            <input
                                class="input is-expanded"
                                type="text"
                                placeholder="search"
                            />
                            <span class="icon is-right">
                                <i class="el-icon-search"></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <button class="button is-primary is-outlined">
                        登 录
                    </button>
                </div>
                <div class="navbar-item">
                    <button class="button is-primary">
                        注 册
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'Header',
  props: {
    nav: String,
    title: String,
    description: String
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: this.nav,
          name: this.title,
          content: this.description
        }
      ]
    }
  },
}
</script>

<style scoped></style>
