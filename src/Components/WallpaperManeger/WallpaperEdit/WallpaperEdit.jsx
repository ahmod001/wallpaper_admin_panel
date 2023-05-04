import React, { useContext, useMemo, useState } from 'react';
import FormEditor from '../../FormEditor/FormEditor';
import { useParams } from 'react-router-dom';
import { getLocalStorage } from '../../../assets/appStorage/appStorage';
import { AdminContext } from '../../../App';

const WallpaperEdit = () => {
    // Using Context API
    const { CurrentPage } = useContext(AdminContext)
    const [currentPage, setCurrentPage] = CurrentPage;
    setTimeout(() => {
        setCurrentPage('Edit Wallpaper')
    }, 1);

    const [editingWallpaper, setEditingWallpaper] = useState({})
    const { wallpaperId } = useParams();
    const wallpapers = getLocalStorage('wallpapers')

    useMemo(() => {
        setEditingWallpaper(wallpapers.find(wallpaper => wallpaper.id === Number.parseInt(wallpaperId)))
    }, [])


    // Edit Wallpaper Handler Handler
    const editWallpaperHandler = (data) => {
        console.log(data);
    }

    return (
        <FormEditor edit={true} targetName={'Wallpaper'} editingComponent={'Wallpapers'} titleLabel={'Title'} imgLabel={'Wallpaper Image'} goBackLocation={'/wallpapers'} actionHandler={editWallpaperHandler} editingComponentObject={editingWallpaper} />
    );
};

export default WallpaperEdit;