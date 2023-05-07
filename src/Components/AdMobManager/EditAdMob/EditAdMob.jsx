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

    // Edit Button Handler
    const editingAdsHandler = (data) => {
console.log(data);
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
            editingComponentObject={editingAds} />
    );
};

export default EditAdMob;