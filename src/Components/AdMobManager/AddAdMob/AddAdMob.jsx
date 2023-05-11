import React, { useContext, useState } from 'react';
import { AdminContext } from '../../../App';
import { setLocalStorage } from '../../../assets/appStorage/appStorage';
import FormEditor from '../../FormEditor/FormEditor';

const AddAdMob = () => {
    // Using Context API
    const { CurrentPage } = useContext(AdminContext)
    const [currentPage, setCurrentPage] = CurrentPage;
    setTimeout(() => {
        setCurrentPage('Add AdMob Ads')
    }, 1);
    setLocalStorage('componentId', 5)

    // These state will control form Submission Pop_up
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false)

    // Add AdMob Handler
    const addAdMobAdsHandler = (data) => {
        console.log(data);
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
            targetName={'Ads'}
            titleLabel={'Title'}
            imgLabel={'Banner'}
            actionHandler={addAdMobAdsHandler}
            goBackLocation={'/ads'}
            isFormSubmitted={isFormSubmitted}
            isSubmissionSuccessful={isSubmissionSuccessful}
            handleClose={handleClose} />
    );
};

export default AddAdMob;