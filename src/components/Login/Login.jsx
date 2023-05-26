import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider';
import SocialMedia from './SocialMedia';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target
        signIn(email, password)
            .then(result => {
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError("Email and Password is not matched!")
            })
    }
    return (
        <div className='min-w-[300px] mx-auto'>
            <h2 className='text-center my-4 text-3xl font-bold text-[#D61C4E]'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Enter your email</span>
                    </label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email" className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Enter your password</span>
                    </label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Your password" className="input input-bordered w-full max-w-xs" required />
                </div>
                <p className='text-red-500'>{error}</p>
                <div className="w-full">
                    <button className='bg-[#D61C4E] w-full mt-4 py-3 text-white font-bold rounded'>Login</button>
                </div>
            </form>
            <div>
                <p>New to Meat Club? <Link className='underline' to='/register'>Register</Link></p>
            </div>
            <p className='text-center text-lg my-2'>---------- or ----------</p>
            <div>
                <SocialMedia></SocialMedia>
            </div>
        </div>
    );
};

export default Login;