import { LOGIN, LOGOUT } from '../Actions/authedUser'


const authedUser = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return action.id
        case LOGOUT:
            return {}
        default:
            return state
    }
}

export default authedUser