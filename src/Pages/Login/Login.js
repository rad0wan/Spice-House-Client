import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { FcGoogle } from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../hooks/Loading';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let location = useLocation();
    const navigate = useNavigate()
    const emailRef = useRef('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);

    let from = location.state?.from?.pathname || "/";

    if (user || userG) {
        navigate(from, { replace: true });
    }

    const handleLogIn = event => {
        event.preventDefault()

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password)

    }

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const handleReset = async (event) => {
        const email = emailRef.current.value;
        console.log(email);
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email')
        } else {
            toast('please give a email')
        }

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }

    if (loading || loadingG) {
        return <Loading></Loading>
    }

    return (
        <div className='w-50 mx-auto'>
            <h1>Please Login</h1>
            <Form onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{error?.message}</p>
                <Button variant="primary" type="login">
                    Login
                </Button>
            </Form>
            <p>New to Spice House?<Link to='/register' className='btn-link my-3'>Register Now</Link></p>
            <p>Forget password?<button onClick={handleReset} className='text-success btn btn-link'>Reset password</button></p>
            <p className='text-center'>Sign With <FcGoogle onClick={handleGoogleSignIn} style={{ cursor: 'pointer' }} size={40}></FcGoogle></p>
            <ToastContainer />
        </div>
    );
};

export default Login;