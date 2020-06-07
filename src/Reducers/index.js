import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import users from './users'
import authedUser from './authedUser'
export default combineReducers({
    users,
    authedUser,
    loadingBar: loadingBarReducer
})