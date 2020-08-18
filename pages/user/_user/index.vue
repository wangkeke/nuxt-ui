<template>
    <div>
        <Header />
        <div class="section">
            <div class="container is-fullscreen">
                <div class="card">
                    <div class="card-content">
                        <div class="columns">
                            <div class="column is-one-fifth">
                                <UserProfile />
                            </div>
                            <div class="column">
                                <UserActivity />
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
import UserActivity from '@/components/user/UserActivity'
import UserProfile from '@/components/user/UserProfile'

export default {
    components: [Header, Footer, UserActivity, UserProfile],
}
</script>

<style scoped></style>
