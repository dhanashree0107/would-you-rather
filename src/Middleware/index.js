import thunk from 'redux-thunk'
import middleware from './middleware'
import { applyMiddleware } from 'redux'


export default applyMiddleware(
    thunk,
    middleware
)