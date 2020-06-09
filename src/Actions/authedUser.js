export const LOGIN = 'LOG_IN';
export const LOGOUT = 'LOG_OUT'

export function LogIn(id) {
    return {
        type: LOGIN,
        id
    }
}

export function LogOut() {
    return {
        type: LOGOUT
    }
}