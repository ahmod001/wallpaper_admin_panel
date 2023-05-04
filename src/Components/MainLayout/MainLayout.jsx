import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const MainLayout = () => {
    // State for Sidebar
    const [collapseSideBar, setCollapseSideBar] = useState(false)

    // CollapseBtn Handler
    const CollapseHandler = () => {
        setCollapseSideBar(!collapseSideBar)
    }
    
    return (
        <section className='tw-flex md:tw-space-x-1'>
            <Sidebar collapseSideBar={collapseSideBar} CollapseHandler={CollapseHandler} />
            <div className='2xl:tw-w-11/12 lg:tw-w-10/12 tw-w-full' >
                <Header CollapseHandler={CollapseHandler} />
                <Outlet />
                <Footer />
            </div>
        </section>
    );
};

export default MainLayout;