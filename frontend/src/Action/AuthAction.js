export const loginAction = () => {
    return {
        type: 'LOGIN'
    }
}

export const logoutAction = () => {
    return {
        type: 'LOGOUT'
    }
}

export const setRoleAction = (role) => {
    return {
        type: 'SETROLE',
        payload: role
    }
}

export const setIdAction = (id) => {
    return {
        type: 'SETID',
        payload: id
    }
}