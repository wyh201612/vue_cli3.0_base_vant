import env from './env'

// 本地的ajax请求地址和线上的地址
const DEV_URL = 'http://localhost:8282'
const PRO_URL = 'http://www.zydocker.cn:8082/base-sys-admin/'

export default env === 'development' ? DEV_URL : PRO_URL
