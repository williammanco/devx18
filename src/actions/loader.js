import * as types from './types'
import store from '../store'

export function setLoader(state) {
  store.dispatch({
    type: types.SET_LOADER_STATE,
    state: state
  })
}

export function setReady(bool) {
  store.dispatch({
    type: types.SET_LOADER_READY,
    ready: bool
  })
}
