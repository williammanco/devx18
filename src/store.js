import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import appReducers from './reducers'
import devMode from './utils/devmode'

const reducersList = combineReducers({
  ...appReducers,
})

let currentStore
const history = createBrowserHistory()

if (devMode) {
  currentStore = createStore(
    connectRouter(history)(reducersList),
    composeWithDevTools(applyMiddleware(routerMiddleware(history), promise(), thunk)),
  )
} else {
  currentStore = createStore(
    connectRouter(history)(reducersList),
    compose(applyMiddleware(routerMiddleware(history), promise(), thunk)),
  )
}

const store = currentStore

export default store
