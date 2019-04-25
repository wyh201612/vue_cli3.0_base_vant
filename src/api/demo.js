import axios from '@/libs/api.request'
import baseURL from '_conf/url'

export const tbAction = (params, url) => {
  return axios.request({
    url,
    baseURL,
    params,
    method: 'post'
  })
}
