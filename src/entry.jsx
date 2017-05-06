import './assets/app.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'
import createStore from './create-store'

import App from './app'

const history = createHistory()
const store = createStore(history)

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app.jsx', () => {
    render(require('./app').default)
  })
}