import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getSingerList (page) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  let data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: page,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })

  return jsonp(url, data, options)
}
