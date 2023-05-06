import React from 'react';
import FormEditor from '../FormEditor/FormEditor';

const AdMobAds = () => {

    const addAdMobAdsHandler = (data) => {
        console.log(data);
    }

    return (
        <FormEditor add={true} targetName={'Ad'} titleLabel={'Title'} imgLabel={'Banner'} actionHandler={addAdMobAdsHandler} goBackLocation={'/ads'} />
    );
};

export default AdMobAds;