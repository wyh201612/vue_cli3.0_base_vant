export default [
    {
        path: '/',
        name: '首页',
        meta: {
            name: 0,
            hideArr: true
        },
        component: () =>
            import ('@/views/home')
    },{
        path: '/mood',
        name: '测试一',
        meta: {
            name: 1,
            hideArr: true
        },
        component: () =>
            import ('@/views/demo')
    },{
        path: '/about',
        name: '测试二',
        meta: {
            name: 2,
            hideArr: true
        },
        component: () =>
            import ('@/views/demo/mood.vue')
    },{
        path: '*',
        name: 'error_404',
        meta: {
            name: 2,
            hideArr: true,
            hideTools: true
        },
        component: () =>
            import ('@/views/common/notFound')
    }
]
