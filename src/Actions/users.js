import { hideLoading, showLoading } from 'react-redux-loading'
import { addUser } from "../Utils/api"
export const GET_USERS = "GET_USERS"


export function receiveUsers(users) {
    return {
        type: GET_USERS,
        users
    }
}

export function handleAddUser(username, name, avatarURL) {
    return (dispatch) => {
        dispatch(showLoading())
        return addUser({
                username,
                name,
                avatarURL
            })
            .then((users) => {
                dispatch(receiveUsers(users))
                dispatch(hideLoading())
            })
    }
}