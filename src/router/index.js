import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js'
import routes from './routers';

Vue.use(Router)
// 路由配置
const RouterConfig = {
    mode: 'history',
    routes,
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    },
};
const router = new Router(RouterConfig);
const history = window.sessionStorage;
let historyCount = history.getItem('count') * 1;

router.beforeEach((to, from, next) => {
    // 根据路由的meta中name属性动态的激活底部tabbar
    if (to.meta.name) {
        store.dispatch('ToggleNum', {
            activeNum: to.meta.name
        })
    } else {
        store.dispatch('ToggleNum', {
            activeNum: 0
        })
    }

    const toIndex = history.getItem(to.path);
    const fromIndex = history.getItem(from.path);

    if (toIndex) {
        if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
            store.commit('UPDATE_DIRECTION', {
                direction: 'forward'
            })
        } else {
            store.commit('UPDATE_DIRECTION', {
                direction: 'reverse'
            })
        }
    } else {
        ++historyCount;
        history.setItem('count', historyCount);
        to.path !== '/' && history.setItem(to.path, historyCount);
        store.commit('UPDATE_DIRECTION', {
            direction: 'forward'
        })
    }
    if (/\/http/.test(to.path)) {
        let url = to.path.split('http')[1];
        window.location.href = `http${url}`
    } else {
        next()
    }
})

router.afterEach((to, from, next) => {
    // 在路由的meta中定义hideArr 判断是否需要显示返回按钮
    if (to.meta.hideArr) {
        store.dispatch('ToggleLArrow', {
            showLArrow: false
        })
    }else{
        store.dispatch('ToggleLArrow', {
            showLArrow: true
        })
    }
    if(to.meta.hideTools) {
        store.dispatch('ToggleTools', {
            needTools: false
        })
    }else{
        store.dispatch('ToggleTools', {
            needTools: true
        })
    }
    // 根据路由的name动态显示顶部标题
    store.dispatch('ToggleTitle', {
        title: to.name
    });
    window.scrollTo(0, 0)
})



export default router
