import request from '@/utils/request'

// 获取访问次数
export function getComeCounts () {
  return request({
    url: `${process.env.VUE_APP_BASE_URL}/visit/toVisit`,
    method: 'get'
  })
}