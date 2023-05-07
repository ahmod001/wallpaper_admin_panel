import { Button, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../../App';
import { getLocalStorage } from '../../assets/appStorage/appStorage';
import { Menu } from '@mui/icons-material';
import { useTheme } from '@emotion/react';

const Header = ({ CollapseHandler }) => {
    const { CurrentPage } = useContext(AdminContext)
    const [currentPage, setCurrentPage] = CurrentPage;
    const navigate = useNavigate()
    const profilePicture = getLocalStorage('profilePicture')
    const theme = useTheme()

    return (
        <header className="navyBlue tw-border-b-2 tw-border-gray-700/80 tw-sticky tw-top-0 sm:tw-h-20 tw-h-16 px-3 tw-flex tw-justify-between tw-z-40">
            <div className='my-auto'>
                <h4 className='tw-font-semibold tw-cursor-none
                 sm:tw-text-xl tw-text-lg'>

                    {/* SideBar expand btn */}
                    <span onClick={CollapseHandler} className='lg:tw-hidden tw-mr-2 tw-cursor-pointer hover:tw-text-gray-100/90'>
                        <i className='bi bi-list' />
                    </span>

                    {/* Component title */}
                    {currentPage.toLocaleUpperCase()}</h4>
            </div>

            <Tooltip title="Settings" placement="left">
                <Button onClick={() => navigate('/settings')}
                    variant='text' className='tw-h-16 my-auto'>
                    <img src={profilePicture ? profilePicture : '/admin.jpg'} loading='lazy' alt="profile_picture" className="tw-rounded-full m-auto tw-w-9 tw-object-cover tw-h-9" />
                </Button>
            </Tooltip>
        </header>
    );
};

export default Header;