export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT'

export const setAuthedUser = (id) => {
    return {
        type: LOGIN,
        id
    }
}

export function LogOut(id) {
    return {
        type: LOGOUT,
        id
    }
}