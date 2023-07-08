import React, { createContext, useState } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import { Fade } from '@mui/material';

const MainLayout = () => {
    // State for Sidebar
    const [collapseSideBar, setCollapseSideBar] = useState(false)

    // CollapseBtn Handler
    const CollapseHandler = () => {
        setCollapseSideBar(!collapseSideBar)
    }
    const navigate = useNavigate();
    const location = useLocation();
    const isUserLoggedIn = sessionStorage.getItem('user_info')

    return (
        Boolean(isUserLoggedIn) ?
            <Fade in={true}
                onDurationChange={() => 1500}>
                <section className='tw-flex md:tw-space-x-1'>
                    <Sidebar
                        collapseSideBar={collapseSideBar}
                        CollapseHandler={CollapseHandler} />
                    <div className='2xl:tw-w-11/12 lg:tw-w-10/12 tw-w-full' >
                        <Header CollapseHandler={CollapseHandler} />
                        <Outlet />
                        <Footer />
                    </div>
                </section>
            </Fade>
            : <Navigate to={'/sign-in'} state={{ from: location.pathname }} />
    );
};

export default MainLayout;