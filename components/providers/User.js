import * as React from 'react'

const UserContext = React.createContext()

const UserProvider = (props) => {

    const [accessToken, setAccessToken] = React.useState('')
    const [isRegistering, setIsRegistering] = React.useState('no')
    
    return (
        <UserContext.Provider
            value={{
                accessToken,
                setAccessToken,
                isRegistering,
                setIsRegistering
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext}