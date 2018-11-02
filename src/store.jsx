import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import global from './reducers/global.jsx'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = applyMiddleware(thunk)

const rootReducer = combineReducers({
    global
})

export default createStore(rootReducer, composeEnhancers(middleware))
