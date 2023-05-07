import React, { useContext } from 'react';
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

    // Add AdMob Handler
    const addAdMobAdsHandler = (data) => {
        console.log(data);
    }

    return (
        <FormEditor add={true} targetName={'Ad'} titleLabel={'Title'} imgLabel={'Banner'} actionHandler={addAdMobAdsHandler} goBackLocation={'/ads'} />
    );
};

export default AddAdMob;