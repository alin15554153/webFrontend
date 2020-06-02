import request from '../utils/request'

/**
 * 组织森林接口
 */
export function tree() {
  return request({
    url: 'api/orgs/tree',
    method: 'get'
  })
}
/**
 * 组织森林接口
 */
export function sensors() {
  return request({
    url: '/api/safety/current/sensors',
    method: 'get'
  })
}


