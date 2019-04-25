<template>
    <div class="container">
        <img src="@/assets/404.png" alt="">
        <p>页面跑到外太空去了~</p>
        <p @click="goIndex">返回首页</p>
    </div>
</template>

<script>
import {Toast} from 'vant';
    export default {
        methods: {
            goIndex() {
                this.$router.push({path:'/'})
            }
        },
        mounted(){
            Toast.clear();
        }
    }
</script>

<style scoped lang="less">
    .container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: #fff !important;
        img{
            width: 100%;
        }
        p{
            color: #8492a6;
            &:last-of-type{
                width: 120px;
                height: 40px;
                line-height: 40px;
                color: #20a0ff;
                border-radius: 5px;
                text-align: center;
                border: 1px solid #20a0ff;
                box-shadow: -1px 2px 10px rgba(32, 160, 255, .5);
            }
        }
    }
</style>
