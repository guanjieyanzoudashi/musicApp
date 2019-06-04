import * as types from './mutation-types'
function storeLocalStore (state) {
  window.localStorage.setItem('singer' ,JSON.stringify(state))
}

const mutations = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
    storeLocalStore(state)
  },
  [types.SET_SHEET] (state, id) {
    state.id = id
    localStorage.setItem('id', id)
  },
  [types.SET_MV] (state, id) {
    state.id = id
    localStorage.setItem('mvID', id)
  }
}
export default mutations
