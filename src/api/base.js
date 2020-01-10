import request from '@/utils/request'

// 调用接口
export function getComeCounts () {
  return request({
    url: `${process.env.VUE_APP_BASE_URL}/visit/toVisit`,
    method: 'get'
  })
}