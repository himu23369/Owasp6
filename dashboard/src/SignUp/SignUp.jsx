import React, { useContext, useState } from 'react';
import './SignUp.css';
import { signIn } from '../Firebase/userAuth';
import userContext from '../context/users/userContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigate();
    const { setUserState } = useContext(userContext);
    const [role, setRole] = useState('patient'); 
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(email, password)
            .then((userCredentials) => {
                setUserState(userCredentials);
                if (userCredentials.role === 'patient') {
                    navigation('/guardian');
                } else if (userCredentials.role === 'careTaker') {
                    navigation('/caretaker');
                } else {
                    navigation('/admin');
                }
            })
            .catch(error => {
                console.log(error);
                // Handle error here (e.g., display error message to the user)
            });
    };

    return (
        <>
            <Navbar />
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="patient">Patient</option>
                            <option value="caretaker">Caretaker</option>
                            <option value="guardian">Guardian</option>
                            <option value="admin">Admin</option>
                        </select>

                        <button type='submit'>Create My Account</button>
                        <p className="message">Already registered? <Link to="/signIn">Login</Link></p>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}


