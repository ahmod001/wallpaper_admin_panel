import React from 'react';

const Footer = () => {
    return (
        <div className=''>
            <hr />
            <h2 className='tw-text-gray-400 tw-text-sm tw-font-base tw-text-center my-2'>
                {2 % 2 === 0 ?
                    'Developed by Hasan'
                    : 'Copyright © 2023 Admin. All Rights Reserved.'}</h2>
        </div>
    );
};

export default Footer;