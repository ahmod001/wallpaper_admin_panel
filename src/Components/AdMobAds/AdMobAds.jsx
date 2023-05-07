import React, { useContext, useState } from 'react';
import { AdminContext } from '../../App';
import { setLocalStorage } from '../../assets/appStorage/appStorage';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import { useEffect } from 'react';
import { Fade, IconButton, Link, Tooltip } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const fakeAds = [
    {
        id: 0,
        title: '01 Minutes School',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse officiis pariatur repudiandae minus perspiciatis',
        img: 'https://cdn.10minuteschool.com/images/images/english-master-bundle-course-sqr-v2.jpg',
        affiliate_link: 'https://10ms.io/iyyeaN'
    },
    {
        id: 1,
        title: '01 Minutes School',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse officiis pariatur repudiandae minus perspiciatis',
        img: 'https://cdn.10minuteschool.com/images/images/english-master-bundle-course-sqr-v2.jpg',
        affiliate_link: 'https://10ms.io/iyyeaN'
    },
    {
        id: 2,
        title: '01 Minutes School',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse officiis pariatur repudiandae minus perspiciatis',
        img: 'https://cdn.10minuteschool.com/images/images/english-master-bundle-course-sqr-v2.jpg',
        affiliate_link: 'https://10ms.io/iyyeaN'
    },
    {
        id: 3,
        title: '01 Minutes School',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse officiis pariatur repudiandae minus perspiciatis',
        img: 'https://cdn.10minuteschool.com/images/images/english-master-bundle-course-sqr-v2.jpg',
        affiliate_link: 'https://10ms.io/iyyeaN'
    }
]

const AdMobAds = () => {

    // Using Context API
    const { CurrentPage } = useContext(AdminContext)
    const [currentPage, setCurrentPage] = CurrentPage;
    setTimeout(() => {
        setCurrentPage('AdMob Ads')
    }, 1);
    setLocalStorage('componentId', 5)
    const navigate = useNavigate()

    // All Ad goes here
    const [ads, setAds] = useState([])
    setLocalStorage('ads', ads)

    // Get Ads
    useEffect(() => setAds(fakeAds), [])

    // Delete Category Btn handler
    const deleteBtnHandler = (id) => {
        setAds(ads.filter(ads => ads.id !== id))
    }

    return (
        <section className=' container tw-min-h-screen tw-mt-4 tw-mb-5'>
            <div className='navyBlue container tw-rounded-lg tw-space-y-5 pb-3'>

                {/*Table Header */}
                <ComponentHeader placeholder='Search By Title...' button={true} btnNavigateTo='/ads/add' buttonName='AdMob Ads' />

                {/* Table */}
                <div className='tw-bg-gray-800/50 tw-rounded-md'>
                    <div className='sm:tw-w-full tw-w-96 tw-mx-auto tw-overflow-x-scroll navyBlue md:tw-overflow-x-auto pb-3 tw-whitespace-nowrap md:tw-whitespace-normal'>

                        <table className='tw-w-full tw-table-auto cursor-pointer'>
                            <thead>
                                <tr>
                                    {['Id', 'Banner', 'Title', 'Description', 'Link', 'Action'].map((th, i) => {
                                        return <th key={i} className='tw-px-4 tw-py-2'>{th}</th>
                                    })}
                                </tr>
                            </thead>

                            <tbody>
                                {ads.map(ads => {
                                    const { id, title, description, img, affiliate_link } = ads;

                                    return (
                                        <Fade in={true} onDurationChange={1500}>
                                            <tr key={id} className='hover:tw-bg-gray-700/10 first-letter'>

                                                {/* Id */}
                                                <td className='tw-px-4 tw-py-2'>{id}</td>

                                                {/* Banner */}
                                                <td className='tw-px-2 tw-py-2'>
                                                    <img className='tw-h-20 tw-rounded-sm' src={img} loading="lazy" alt={title} />
                                                </td>

                                                {/* Title */}
                                                <td className='tw-px-4 tw-py-2'>
                                                    {title}</td>

                                                {/* DESCRIPTION' */}
                                                <td className='tw-px-4 text-justify tw-py-2'>
                                                    {description}
                                                </td>

                                                {/* Affiliate Link*/}
                                                <td className='tw-px-4 tw-py-2'>
                                                    <Tooltip
                                                        placement='top'
                                                        title='Affiliate Link'>
                                                        <Link
                                                            target='blank'
                                                            href={affiliate_link} underline="hover" >
                                                            Visit
                                                        </Link>
                                                    </Tooltip>
                                                </td>

                                                {/* Action Buttons goes here */}
                                                <td className='tw-px-2'>
                                                    <div className='tw-grid tw-grid-cols-2 tw-gap-x-1'>

                                                        {/* Edit */}
                                                        <Tooltip arrow placement='top' title='Edit'>
                                                            <IconButton
                                                                onClick={() => {
                                                                    navigate(`/ads/edit/${id}`)
                                                                }}

                                                                className='col' aria-label="edit">
                                                                <Edit fontSize='inherit' />
                                                            </IconButton>
                                                        </Tooltip>

                                                        {/*Delete*/}
                                                        <Tooltip arrow placement='top' title='Delete'>
                                                            <IconButton
                                                                onClick={() => deleteBtnHandler(id)} color='error' className='col' aria-label="delete">
                                                                <Delete fontSize='inherit' />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </div>
                                                </td>
                                            </tr>
                                        </Fade>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default AdMobAds;