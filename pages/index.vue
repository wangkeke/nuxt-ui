<template>
    <div>
        <Header nav="home"/>
        <div class="section">
            <div class="container">
                <div class="card">
                    <div class="card-content">
                        <div class="columns is-1">
                            <div class="column is-one-fifth">
                                <TagFilter />
                            </div>
                            <div class="column">
                                <div class="tabs is-boxed is-right is-small">
                                    <ul>
                                        <li class="is-active"><a>最新</a></li>
                                        <li><a>最热</a></li>
                                    </ul>
                                </div>
                                <ResourceList/>
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
import TagFilter from '@/components/TagFilter'
import ResourceList from '@/components/ResourceList'

export default {
  components: [Header, Footer, TagFilter, ResourceList],
}
</script>
