<template>
    <div id="app" class="app">
        <div class="need-container" v-if="needTools">
            <NavBar :title="title" @click-left="back" @click-right="onClickRight" :left-text="showLArrow?'返回':null" :right-text="rightText" :left-arrow="showLArrow" />
            <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
                <router-view class="router-view" />
            </transition>
            <Tabbar :value="activeNum">
                <TabbarItem :to="item.path" :icon="item.icon" :key="index" v-for="(item, index) in tabbarList">{{item.name}}</TabbarItem>
            </Tabbar>
        </div>
        <div class="not-need-container" v-else>
            <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
                <router-view class="router-not-need" />
            </transition>
        </div>
    </div>
</template>

<script>
import { NavBar, Tabbar, TabbarItem, Loading } from "vant";
import { mapState, mapActions } from "vuex";

export default {
    components: {
        NavBar,
        Tabbar,
        TabbarItem,
        Loading
    },
    computed: {
        ...mapState({
            title: state => state.app.title,
            showLArrow: state => state.app.showLArrow, // 判断是否显示左侧返回按钮
            rightText: state => state.app.rightText, // 头部导航栏右侧文字
            needTools: state => state.app.needTools, // 判断是否需要头部和底部的导航栏
            activeNum: state => state.app.activeNum, // 动态激活底部tabbar
            direction: state => state.app.direction // 路由容器的动画方向
        })
    },
    data() {
        return {
            transitionName: "slide-left",
            tabbarList: [
                {
                    name: "首页",
                    icon: "shop",
                    path: "/"
                },
                {
                    name: "心情",
                    icon: "point-gift",
                    path: "/mood"
                },
                {
                    name: "关于我",
                    icon: "records",
                    path: "/about"
                }
            ]
        };
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        // 如果存在右侧菜单，此处可添加菜单的点击事件
        onClickRight() {}
    },
    mounted() {}
};
</script>

<style lang="less">
    @import './app.less';
</style>
