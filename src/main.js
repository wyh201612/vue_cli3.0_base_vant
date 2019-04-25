import Vue from 'vue'
import App from './App'
import store from './store';
import router from './router';
import { Lazyload, Toast } from 'vant';
// 图片预加载的配置
let options = {
    loading:"",//加载时的图片
    error:""//加载错误的图片
}
Vue.use(Lazyload, options);
Vue.use(Toast);

/*引入移动端手势库*/
import directives from './directive/touch'
directives(Vue);

Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
})
