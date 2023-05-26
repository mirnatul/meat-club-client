import React from 'react';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import SocialMedia from './SocialMedia';
import { AuthContext } from './../../provider/AuthProvider';
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [url, setUrl] = useState('');

    const { createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        if (password.length < 6) {
            alert('Password must be 6 character long');
            return;
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                result.user.displayName = name;
                result.user.photoURL = url;
                form.reset();
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className='min-w-[300px] mx-auto'>
            <h2 className='text-center my-4 text-3xl font-bold text-[#D61C4E]'>Register</h2>
            <form onSubmit={handleRegister}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Enter your name</span>
                    </label>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Your name" className="input input-bordered w-full max-w-xs" required />
                </div>
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
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Enter your photo url</span>
                    </label>
                    <input onChange={(e) => setUrl(e.target.value)} type="text" placeholder="Your photo url" className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="w-full">
                    <button className='bg-[#D61C4E] w-full mt-4 py-3 text-white font-bold rounded'>Register</button>
                </div>
            </form>
            <div className='mt-0'>
                <p>Already have an account? <Link className='underline' to='/login'>Login</Link></p>
            </div>
            <p className='text-center text-lg my-2'>---------- or ----------</p>
            <div>
                <SocialMedia></SocialMedia>
            </div>
        </div>
    );
};

export default Register;