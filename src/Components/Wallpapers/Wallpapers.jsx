import React, { useContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../../assets/appStorage/appStorage';
import Wallpaper from '../Wallpaper/Wallpaper';
import ComponentHeader from "../ComponentHeader/ComponentHeader";
import WallpapersSkeleton from './WallpapersSkeleton/WallpapersSkeleton';
import { AdminContext } from '../../App';
import PopUpDialog from '../PopUpDialog/PopUpDialog';
import SnackBar from '../SnackBar/SnackBar';
import Pagination from '../Pagination/Pagination';

const FakeWallpapers = [
    {
        id: 0,
        img: 'https://c4.wallpaperflare.com/wallpaper/765/999/824/portrait-display-vertical-artwork-digital-art-warrior-hd-wallpaper-preview.jpg',
        title: 'Samurai Sakura',
        Wallpaper: 'fight',
        color: 'red',
        ratings: '4.7',
        rated_by_users: 11,
        downloaded: 100,
        active: true
    },
    {
        id: 1,
        img: 'https://c4.wallpaperflare.com/wallpaper/765/999/824/portrait-display-vertical-artwork-digital-art-warrior-hd-wallpaper-preview.jpg',
        title: 'Samurai Sakura',
        Wallpaper: 'fight',
        color: 'red',
        ratings: '4.7',
        rated_by_users: 11,
        downloaded: 100,
        active: false
    },
    {
        id: 2,
        img: 'https://c4.wallpaperflare.com/wallpaper/765/999/824/portrait-display-vertical-artwork-digital-art-warrior-hd-wallpaper-preview.jpg',
        title: 'Samurai Sakura',
        Wallpaper: 'fight',
        color: 'red',
        ratings: '4.7',
        rated_by_users: 11,
        downloaded: 100,
        active: true
    },
    {
        id: 3,
        img: 'https://c4.wallpaperflare.com/wallpaper/765/999/824/portrait-display-vertical-artwork-digital-art-warrior-hd-wallpaper-preview.jpg',
        title: 'Samurai Sakura',
        Wallpaper: 'fight',
        color: 'red',
        ratings: '4.7',
        rated_by_users: 11,
        downloaded: 100,
        active: true
    },
    {
        id: 4,
        img: 'https://c4.wallpaperflare.com/wallpaper/765/999/824/portrait-display-vertical-artwork-digital-art-warrior-hd-wallpaper-preview.jpg',
        title: 'Samurai Sakura',
        Wallpaper: 'fight',
        color: 'red',
        ratings: '4.7',
        rated_by_users: 11,
        downloaded: 100,
        active: false
    },
    {
        id: 5,
        img: 'https://c4.wallpaperflare.com/wallpaper/765/999/824/portrait-display-vertical-artwork-digital-art-warrior-hd-wallpaper-preview.jpg',
        title: 'Samurai Sakura',
        Wallpaper: 'fight',
        color: 'red',
        ratings: '4.7',
        rated_by_users: 11,
        downloaded: 100,
        active: true
    },
    {
        id: 6,
        img: 'https://c4.wallpaperflare.com/wallpaper/765/999/824/portrait-display-vertical-artwork-digital-art-warrior-hd-wallpaper-preview.jpg',
        title: 'Samurai Sakura',
        Wallpaper: 'fight',
        color: 'red',
        ratings: '4.7',
        rated_by_users: 11,
        downloaded: 100,
        active: false
    },
    {
        id: 7,
        img: 'https://c4.wallpaperflare.com/wallpaper/765/999/824/portrait-display-vertical-artwork-digital-art-warrior-hd-wallpaper-preview.jpg',
        title: 'Samurai Sakura',
        Wallpaper: 'fight',
        color: 'red',
        ratings: '4.7',
        rated_by_users: 11,
        downloaded: 100,
        active: true
    },
    {
        id: 8,
        img: 'https://c4.wallpaperflare.com/wallpaper/765/999/824/portrait-display-vertical-artwork-digital-art-warrior-hd-wallpaper-preview.jpg',
        title: 'Samurai Sakura',
        Wallpaper: 'fight',
        color: 'red',
        ratings: '4.7',
        rated_by_users: 11,
        downloaded: 100,
        active: false
    }
]

const Wallpapers = () => {

    // Using Context API
    const { CurrentPage } = useContext(AdminContext)
    const [currentPage, setCurrentPage] = CurrentPage;

    setTimeout(() => {
        setCurrentPage('Wallpapers')
    }, 1);
    setLocalStorage('componentId', 1)

    // All Wallpaper goes
    const [wallpapers, setWallpapers] = useState([])
    setLocalStorage('wallpapers', wallpapers)

    // This States for Pagination
    const defaultPage = getLocalStorage('defaultWallpaperPage');
    const [currentPageNum, setCurrentPageNum] = useState(defaultPage || 1);
    const [totalPageCount, setTotalPageCount] = useState(5);

    // Pagination Handler
    const handlePagination = (event, value) => {
        setLocalStorage('defaultWallpaperPage', value)
        setCurrentPageNum(value)
    }

    // Get Data
    useEffect(() => {
        setWallpapers(FakeWallpapers)
    }, []);

    // Delete Wallpaper //
    const [isDeleteBtnClicked, setIsDeleteBtnClicked] = useState(false);
    const [targetedWallpaperId, setTargetedWallpaperId] = useState(null);
    const [isDeletedSuccessfully, setIsDeletedSuccessfully] = useState(false);

    // Delete Btn Handler
    const deleteBtnHandler = (id) => {
        setTargetedWallpaperId(id)
        setIsDeleteBtnClicked(!isDeleteBtnClicked)
    }


    // Confirm Delete Button Handler
    const confirmDelete = () => {
        setIsDeleteBtnClicked(!isDeleteBtnClicked)
        setIsDeletedSuccessfully(!isDeletedSuccessfully)
        setWallpapers(wallpapers.filter(wallpaper => wallpaper.id !== targetedWallpaperId))
    }

    // status Wallpaper Btn handler 
    const statusBtnHandler = (id) => {
        const updatedWallpapers = wallpapers.map(wallpaper => {
            if (wallpaper.id === id) {
                return {
                    ...wallpaper,
                    active: !wallpaper.active
                };
            } else {
                return wallpaper;
            }
        });
        setWallpapers(updatedWallpapers);
    }

    return (
        <section className='container tw-min-h-screen tw-mt-4 tw-mb-7'>

            {/*  Dialog for delete confirmation */}
            <PopUpDialog
                isActionBtnClicked={isDeleteBtnClicked}
                setIsActionBtnClicked={setIsDeleteBtnClicked}
                confirmAction={confirmDelete} />

            {/* Successfully Deleted Pop_up */}
            <SnackBar
                message={'Deleted Successfully'}
                isActionSuccessful={isDeletedSuccessfully}
                setIsActionSuccessful={setIsDeletedSuccessfully} />

            {/* Main Content */}
            <div className='container navyBlue tw-rounded-lg tw-pb-5 tw-space-y-5'>
                {/* Component-Header */}
                <ComponentHeader
                    button={true}
                    buttonName={'Wallpaper'}
                    btnNavigateTo={'/wallpapers/add'}
                    placeholder='Search By Title...' />

                {/* Wallpapers */}
                {wallpapers ? <div className='tw-grid xl:tw-grid-cols-4 md:tw-grid-cols-3 sm:tw-grid-cols-2 tw-grid-cols-1 tw-gap-5'>
                    {wallpapers.map(wallpaper => {

                        return <Wallpaper
                            key={wallpaper.id}
                            statusBtnHandler={statusBtnHandler}
                            deleteBtnHandler={deleteBtnHandler}
                            wallpaper={wallpaper} />
                    })}

                </div>
                    : <WallpapersSkeleton />}


                {/* Pagination */}
                <Pagination
                    count={totalPageCount}
                    currentPageNum={currentPageNum}
                    handlePagination={handlePagination} />

            </div>
        </section>
    );
};

export default Wallpapers;