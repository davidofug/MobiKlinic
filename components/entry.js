import * as React from 'react';
import AuthReducer from './reducers/AuthReducer'
import {UserProvider} from './providers/User'

const Entry = () => {
    return (
        <UserProvider>
            <AuthReducer />
        </UserProvider>
    )
}

export default Entry