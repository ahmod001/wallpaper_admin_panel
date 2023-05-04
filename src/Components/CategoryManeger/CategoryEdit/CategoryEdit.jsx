import React, { useContext, useMemo, useState } from 'react';
import { AdminContext } from '../../../App';
import FormEditor from '../../FormEditor/FormEditor';
import { useParams } from 'react-router-dom';
import { getLocalStorage } from '../../../assets/appStorage/appStorage';

const CategoryEdit = () => {
    // Using Context API
    const { CurrentPage } = useContext(AdminContext)
    const [currentPage, setCurrentPage] = CurrentPage;
    setTimeout(() => {
        setCurrentPage('Edit Category')
    }, 1);

    const [editingCategory, setEditingCategory] = useState({})
    const { categoryId } = useParams();
    const categories = getLocalStorage('categories')

    useMemo(() => {
        setEditingCategory(categories.find(category => category.id === Number.parseInt(categoryId)))
    }, [])

    // Edit Category Btn Handler
    const editCategoryHandler = (data) => {
        console.log(data);
    }

    return (
        <FormEditor edit={true} targetName={'Category'} editingComponent={'Categories'} titleLabel={'Name'} imgLabel={'Category Image'} goBackLocation={'/categories'} actionHandler={editCategoryHandler} editingComponentObject={editingCategory} />
    );
};

export default CategoryEdit;