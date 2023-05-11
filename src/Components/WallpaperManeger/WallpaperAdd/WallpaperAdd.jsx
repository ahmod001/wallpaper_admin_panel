import React, { useContext, useState } from 'react';
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

    // These state will control form Submission Pop_up
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false)

    // Add Wallpaper Handler Handler
    const addWallpaperHandler = (data) => {
        console.log(data)
        setIsFormSubmitted(!isFormSubmitted)
        setIsSubmissionSuccessful(true)
    }

    //This Handler for Confirmation Pop_up component
    const handleClose = () => {
        setIsFormSubmitted(!isFormSubmitted)
    }

    return (
        <FormEditor
            add={true}
            targetName={'Wallpaper'}
            titleLabel={'Title'}
            imgLabel={'Wallpaper Image'}
            goBackLocation={'/wallpapers'}
            actionHandler={addWallpaperHandler}
            isFormSubmitted={isFormSubmitted}
            isSubmissionSuccessful={isSubmissionSuccessful}
            handleClose={handleClose} />
    );
};

export default WallpaperAdd;