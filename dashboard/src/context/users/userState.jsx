import React, { useState } from 'react'
import { signIn, signUp } from '../../Firebase/userAuth';
import userContext from './userContext.jsx';

export default function UserState(props) {
    const tempUser = {
        'name': 'Mukul',
        'role': 'patient',
        'email': 'mjindal_be21@thapar.edu',
        'password': 'mukul1234',
        'id': 102116063,
    }
    const [user, setUserState] = useState(tempUser);

    const login = (credentials) => {
        const { email, password, role} = credentials;
        console.log(email, password, role)
        signIn(email, password, role)
            // .then((userDetials) => setUserState(userDetials))
            .then((userDetails) => setUserState(userDetails))
            .catch((error) => console.log(error));
    }

    const signup = (credentials) => {
        signUp(credentials)
            .then((userDetails) => setUserState(userDetails))
            .catch((error) => console.log(error))
    }
    return (
        <userContext.Provider value={{ user, login, signUp, setUserState }}>
            {props.children}
        </userContext.Provider>
    )
}
