import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import store from './store'
import App from './app'

const history = createBrowserHistory()


const wrapApp = (AppComponent, reduxStore) => (
  <Provider store={reduxStore}>
    <ConnectedRouter history={history}>
      <AppContainer>
        <AppComponent history={history} />
      </AppContainer>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(wrapApp(App, store), document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./app', () => {
    const newApp = require('./app').default
    ReactDOM.render(wrapApp(newApp, store), document.getElementById('root'))
  })
}
