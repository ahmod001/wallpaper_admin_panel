import React, { useContext } from 'react';
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

    // Add Category Handler
    const addCategoryHandler = (data) => {
        console.log(data);
    }
    return (
        <FormEditor add={true} targetName={'Category'} titleLabel={'Name'} imgLabel={'Category Image'} goBackLocation={'/categories'} actionHandler={addCategoryHandler} />
    );
};

export default CategoryAdd;