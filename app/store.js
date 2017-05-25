import {createStore, applyMiddleware} from 'redux'
import {main} from './reducers'
import logger from 'redux-logger'

export const store = createStore(main)
