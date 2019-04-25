import Axios from 'axios'
import Qs from 'qs'
import BASE_URL from '_conf/url'
import { Toast } from 'vant';
class httpRequest {
  constructor () {
    this.options = {
      method: '',
      url: ''
    }
    // 存储请求队列
    this.queue = {}
  }
  // 销毁请求实例
  destroy (url) {
    delete this.queue[url]
    const queue = Object.keys(this.queue)
    return queue.length
  }
  // 请求拦截
  interceptors (instance, url) {
    // 添加请求拦截器
    instance.interceptors.request.use(config => {
    //   if (!config.url.includes('/users')) {
    //     config.headers['x-access-token'] = Cookies.get(TOKEN_KEY)
    //   }
      // Spin.show()
      // 在发送请求之前做些什么
      return config
    }, error => {
      // 对请求错误做些什么
      return Promise.reject(error)
    })

    // 添加响应拦截器
    instance.interceptors.response.use((res) => {
      let { data } = res
      const is = this.destroy(url)
      if (!is) {
        setTimeout(() => {
          // Spin.hide()
        }, 500)
      }
      if (data.code !== 200) {
        // 后端服务在个别情况下回报201，待确认
        if (data.code === 401) {
          window.location.href = '/#/login'
          Toast.fail('未登录，或登录失效，请登录')
        } else {
          if (data.msg) Toast.fail(data.msg)
        }
        Toast.fail(data.message);
        return false;
      }
      return data
    }, (error) => {
        Toast.fail('服务内部错误')
      // 对响应错误做点什么
      return Promise.reject(error)
    })
  }
  // 创建实例
  create (baseURL) {
    let conf = {
      baseURL: baseURL || BASE_URL,
      // timeout: 2000,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'X-URL-PATH': location.pathname
      }
    }
    return Axios.create(conf)
  }
  // 合并请求实例
  mergeReqest (instances = []) {
    //
  }
  // 请求实例
  request (options) {
    var instance = this.create(options.baseURL)
    this.interceptors(instance, options.url)
    options = Object.assign({}, options)
    options.data = Qs.stringify(options.data)
    this.queue[options.url] = instance
    return instance(options)
  }
}
export default httpRequest
