import React, { useContext, useState } from 'react'
import './loginPage.css'
import { signIn } from '../Firebase/userAuth'
import userContext from '../context/users/userContext';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('patient');
    const navigation = useNavigate();

    const { setUserState } = useContext(userContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(email, password, role)
            .then((userCredentials) => {
                console.log(userCredentials);
                setUserState(userCredentials);
                if (userCredentials['role'] === 'patient') {
                    navigation('/guardian');
                }
                else if (userCredentials['role'] === 'careTaker') {
                    navigation('/caretaker');
                }
                else {
                    navigation('/admin');
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <>

            <Navbar />

            <div className="login-page">
                <div className="form">
                    {/* <form className="register-form">
                    <input type="text" placeholder="name" />
                    <input type="password" placeholder="password" />
                    <input type="text" placeholder="email address" />
                    <button>create</button>
                    <p className="message">Already registered? <a href="#">Sign In</a></p>
                </form> */}
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input type="text"
                            placeholder="username"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                        <input type="password"
                            placeholder="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="patient">Patient</option>
                            <option value="careTaker">Caretaker</option>
                            <option value="guardian">Guardian</option>
                            <option value="admin">Admin</option>
                        </select>

                        <button type='submit'>login</button>
                        <p className="message">Not registered? <Link to="/signUp">Create an account</Link></p>
                    </form>
                </div>
            </div>

            <Footer />

        </>
    )
}
