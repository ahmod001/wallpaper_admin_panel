import React, { useContext } from 'react';
import FormEditor from '../../FormEditor/FormEditor';
import { AdminContext } from '../../../App';
import { setLocalStorage } from '../../../assets/appStorage/appStorage';

const WallpaperAdd = () => {
    // Using Context API
    const { CurrentPage } = useContext(AdminContext)
    const [currentPage, setCurrentPage] = CurrentPage;
    setTimeout(() => {
        setCurrentPage('Add Wallpaper')
    }, 1);
    setLocalStorage('componentId', 1)

    // Add Wallpaper Handler Handler
    const addWallpaperHandler = (data) => {
        console.log(data);
    }

    return (
        <FormEditor add={true} targetName={'Wallpaper'} titleLabel={'Title'} imgLabel={'Wallpaper Image'} goBackLocation={'/wallpapers'} actionHandler={addWallpaperHandler} />
    );
};

export default WallpaperAdd;