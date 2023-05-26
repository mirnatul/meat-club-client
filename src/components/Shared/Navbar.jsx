import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './../../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }
    return (
        <div className='bg-[#D61C4E]'>
            <div className="navbar flex justify-between text-white max-w-[1200px] mx-auto py-4">
                <div className="">
                    <a className="text-2xl font-bold">Meat Club</a>
                </div>
                <div className='flex lg:gap-6 gap-2'>
                    <div>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-lg text-black font-bold underline' : 'text-base'}>Home</NavLink>
                    </div>
                    <div>
                        <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-lg text-black font-bold underline' : 'text-base'}>Blog</NavLink>
                    </div>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        {!user ? <Link to='/login'><button className='text-white bg-red-900 px-4 py-2 rounded-lg'>Login</button></Link>
                            : <div className='inline-flex gap-2'>
                                <label className="btn btn-ghost btn-circle avatar">
                                    <div title={user.displayName ? user.displayName : ''} className="w-10 rounded-full">
                                        <img src={user.photoURL ? user.photoURL : ''} />
                                    </div>
                                </label>
                                <button onClick={handleLogOut} className='text-white bg-red-900 px-2 rounded-lg'>Logout</button>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;