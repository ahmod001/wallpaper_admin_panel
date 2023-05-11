import React, { useContext, useState } from 'react';
import { AdminContext } from '../../../App';
import { setLocalStorage } from '../../../assets/appStorage/appStorage';
import FormEditor from '../../FormEditor/FormEditor';

const CategoryAdd = () => {
    // Using Context API
    const { CurrentPage } = useContext(AdminContext)
    const [currentPage, setCurrentPage] = CurrentPage;

    setTimeout(() => {
        setCurrentPage('Add Category')
    }, 1);
    setLocalStorage('componentId', 2)

    // These state will control form Submission Pop_up
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false)
    
    // Add Category Handler
    const addCategoryHandler = (data) => {
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
            targetName={'Category'}
            titleLabel={'Name'}
            imgLabel={'Category Image'}
            goBackLocation={'/categories'}
            actionHandler={addCategoryHandler}
            isFormSubmitted={isFormSubmitted}
            isSubmissionSuccessful={isSubmissionSuccessful}
            handleClose={handleClose} />
    );
};

export default CategoryAdd;