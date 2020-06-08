export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT'

export const setAuthedUser = (id) => ({
    type: LOGIN,
    id
})

export const LogOut = (id) => ({
    type: LOGOUT,
    id
})