import React, { useReducer, createContext } from 'react'

const initialState = {
    user: null
}

const AuthContext = createContext({
    user: null,
    login: (userData) => {},
    logout: () => {}
})

function authReducer(state, action){
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return{
                ...state,
                user: null
            }
        default: 
            return state
    }
}

function AuthProvider(props){
    // takes state and dispatch
    // initital state user: null
    const [state, dispatch] = useReducer(authReducer, initialState)

    const login = (userData) => {
        localStorage.setItem("jwtToken", userData.token)
        dispatch({
            type: 'LOGIN',
            payload: userData
        })
    }

    const logout = () => {
        localStorage.removeItem("jwtToken")
        dispatch({ type: 'LOGOUT'})
    }

    return (
        <AuthContext.Provider
            value={{ user: state.user, login, logout}}
            {...props}
            />
    )
}

export { AuthContext, AuthProvider }