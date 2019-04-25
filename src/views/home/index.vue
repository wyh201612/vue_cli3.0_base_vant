<template>
    <div>
        <Button type="primary" v-wave>home</Button>
    </div>
</template>

<script>
    import {
        tbAction
    } from '@/api/demo'
    import wave from '@/directive/waves'
    import { Button } from 'vant';
    export default {
        components:{
            Button
        },
        directives:{
            wave
        },
        mounted() {
            let params = {};
            let url = "/front/list"
            tbAction(params, url).then(res => {
                console.log(res);
            })
        }
    }
</script>

<style scoped>

</style>
