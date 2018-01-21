import * as types from './types'

export function setStatus(bool) {
  return {
    type: types.LOADING_SET_STATUS,
    setStatus: bool,
  }
}
