import React, { useContext } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate, useLocation } from 'react-router-dom'

const SocialMedia = () => {
    const { googleLogIn, githubLogIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleLogIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleGithubLogin = () => {
        githubLogIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className='mt-4 text-white'>
            <div className='bg-blue-700 text-center py-2 font-semibold mb-1'>
                <button onClick={handleGoogleLogin} className='inline-flex items-center gap-4'><FaGoogle></FaGoogle> Sign in With Google</button>
            </div>
            <div className='bg-slate-700 text-center py-2 font-semibold mb-1'>
                <button onClick={handleGithubLogin} className='inline-flex items-center gap-4'><FaGithub></FaGithub> Sign in With Github</button>
            </div>
        </div>
    );
};

export default SocialMedia;