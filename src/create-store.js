import {createStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {routerReducer, routerMiddleware} from 'react-router-redux'

import reducers from './reducers'

export default (history) => {
  const middleware = [thunk, routerMiddleware(history)]

  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
    middleware.push(logger)
  }

  const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    applyMiddleware(...middleware)
  )

  return store
}