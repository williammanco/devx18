import Immutable from 'immutable'
import * as types from '../actions/types'

const initialState = Immutable.fromJS({
  state: 0,
  ready: false,
})

const loader = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOADER_STATE:
      return state.set('state', action.state)
    case types.SET_LOADER_READY:
      return state.set('ready', action.ready)
    default:
      return state
  }
}


export default loader
