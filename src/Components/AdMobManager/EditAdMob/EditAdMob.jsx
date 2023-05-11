import React, { useContext, useMemo, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../../../assets/appStorage/appStorage';
import { AdminContext } from '../../../App';
import { useParams } from 'react-router-dom';
import FormEditor from '../../FormEditor/FormEditor';

const EditAdMob = () => {
    // Using Context API
    const { CurrentPage } = useContext(AdminContext)
    const [currentPage, setCurrentPage] = CurrentPage;
    setTimeout(() => {
        setCurrentPage('Edit AdMob Ads')
    }, 1);
    setLocalStorage('componentId', 5)

    const [editingAds, setEditingAds] = useState({})
    const { adsId } = useParams();
    const ads = getLocalStorage('ads')

    useMemo(() => {
        setEditingAds(ads.find(ads => ads.id === Number.parseInt(adsId)))
    }, [])

     // These states will control pop_Up snackBar
     const [isEditFormSubmitted, setIsEditFormSubmitted] = useState(false);
     const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

    // Edit Button Handler
    const editingAdsHandler = (data) => {
        console.log(data)
        setIsEditFormSubmitted(!isEditFormSubmitted);
        setIsSubmissionSuccessful(true)
    }


    return (
        <FormEditor
            edit={true}
            targetName={'Ads'}
            editingComponent={'AdMob Ads'}
            titleLabel={'Title'}
            imgLabel={'Banner'}
            goBackLocation={'/ads'}
            actionHandler={editingAdsHandler}
            editingComponentObject={editingAds} 
            isEditFormSubmitted={isEditFormSubmitted}
            setIsEditFormSubmitted={setIsEditFormSubmitted}
            isSubmissionSuccessful={isSubmissionSuccessful}/>
    );
};

export default EditAdMob;