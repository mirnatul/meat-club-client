import React from 'react';
import Footer from '../components/Shared/Footer';
import Navbar from '../components/Shared/Navbar';
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <div className='min-h-[100vh] flex flex-col bg-slate-100'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;