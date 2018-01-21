import * as types from '../actions/types'

const initialState = {
  status: false,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOADING_SET_STATUS:
      state = {
        ...state,
        status: action.setStatus,
      }
      break
    default:
      return { ...state }
  }
  return { ...state }
}

export default reducer
