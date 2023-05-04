import { useNavigate } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "../../assets/appStorage/appStorage";
import { List, ListItem } from "@mui/material";

const Sidebar = ({ collapseSideBar, CollapseHandler }) => {
    const navigate = useNavigate()

    // Nav-Item handler//
    const itemHandler = (itemId, href) => {
        // Redirect to linkedPage
        navigate(href)
        setLocalStorage('componentId', itemId)
    }
    // Navbar Items
    const navItems = [
        {
            id: 0,
            itemName: 'Dashboard',
            icon: 'bi-speedometer2',
            href: '/dashboard'
        },
        {
            id: 1,
            itemName: 'Wallpapers',
            icon: 'bi-images',
            href: '/wallpapers'
        },
        {
            id: 2,
            itemName: 'Categories',
            icon: 'bi-ui-radios-grid',
            href: '/categories'
        },
        {
            id: 3,
            itemName: 'Users',
            icon: 'bi-people',
            href: '/users'
        },
        {
            id: 4,
            itemName: 'Reports',
            icon: 'bi-exclamation-triangle',
            href: '/reports'
        },
        {
            id: 5,
            itemName: 'AdMob Ads',
            icon: 'bi-megaphone',
            href: '/ads'
        },
        {
            id: 6,
            itemName: 'Push Notification',
            icon: 'bi-bell',
            href: '/push_notification'
        },
        {
            id: 7,
            itemName: 'Settings',
            icon: 'bi-gear',
            href: '/settings'
        }
    ]

    return (
        <div className={`sm:tw-w-60 tw-w-52 navyBlue ${collapseSideBar ? `tw-block tw-border-r-2 tw-border-gray-700/60` : 'tw-hidden'} tw-h-screen tw-fixed tw-z-50  lg:tw-sticky tw-top-0 sm:tw-space-y-5 lg:tw-block tw-space-y-4`}>

            <div onClick={() => navigate('/')}
                className='sm:tw-h-20 tw-h-16 tw-flex tw-justify-center tw-space-x-2'>
                <img src="/logo.png" className='my-auto xl:tw-h-11 lg:tw-h-10 tw-h-9 tw-rounded-full tw-object-cover' alt="logo" />
                <h3 className='my-auto sm:tw-text-xl tw-text-base tw-font-semibold'>HD Wallpaper

                    {/* Collapse-button */}
                    {collapseSideBar && <span onClick={CollapseHandler} className='tw-ml-4 tw-cursor-pointer hover:tw-text-gray-100/80'><i className='bi bi-x-lg' /></span>}
                </h3>
            </div>

            {/* Nav_links */}
            <List className='tw-space-y-2'>
                {navItems.map(nav => {

                    return (
                        <ListItem button
                            sx={{
                                backgroundColor: `${getLocalStorage('componentId') === nav.id ? '#DC2626'
                                    : 'transparent'}`,
                                ":hover": {
                                    backgroundColor: `${getLocalStorage('componentId') === nav.id ? '#DC2626'
                                        : ''}`
                                }
                            }}

                            onClick={() => itemHandler(nav.id, nav.href)}
                            key={nav.id}>
                            <span className='my-auto tw-ml-4'>
                                <span><i className={`bi ${nav.icon} tw-mr-2`}></i></span>{nav.itemName}</span>
                        </ListItem>
                    )
                })}

                {/* SignOut */}
                <ListItem button><a className='my-auto tw-ml-4'>
                    <span><i className="bi bi-box-arrow-right tw-mr-2"></i></span>Sign Out</a>
                </ListItem>

            </List>
        </div >
    );
};

export default Sidebar;