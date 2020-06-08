//import { addUser } from "../Utils/api"
export const GET_USERS = "GET_USERS"


export function getUsers(users) {
    return {
        type: GET_USERS,
        users
    }
}

/*export function handleAddUser(username, name, avatarURL) {
    return (dispatch) => {
        return addUser({
                username,
                name,
                avatarURL
            })
            .then((users) => {
                dispatch(getUsers(users))
            })
    }
}
*/