export default function ({ store, error }) {
    if (!store.state.user) {
        error({
            message: '请先登录',
            statusCode: 401,
        })
    }
}
