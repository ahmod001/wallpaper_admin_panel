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

    // These states will control pop_Up snackBar
    const [isEditFormSubmitted, setIsEditFormSubmitted] = useState(false);
    const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

    // Edit Wallpaper Handler Handler
    const editWallpaperHandler = (data) => {
        console.log(data);
        setIsEditFormSubmitted(!isEditFormSubmitted);
        setIsSubmissionSuccessful(true)

    }

    return (
        <FormEditor 
        edit={true} 
        targetName={'Wallpaper'} 
        editingComponent={'Wallpapers'} 
        titleLabel={'Title'} 
        imgLabel={'Wallpaper Image'} 
        goBackLocation={'/wallpapers'} 
        actionHandler={editWallpaperHandler} 
        editingComponentObject={editingWallpaper}     
        isEditFormSubmitted={isEditFormSubmitted}
        setIsEditFormSubmitted={setIsEditFormSubmitted}
        isSubmissionSuccessful={isSubmissionSuccessful} />
    );
};

export default WallpaperEdit;