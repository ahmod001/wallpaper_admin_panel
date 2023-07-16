import React, { useContext, useState } from 'react';
import { AdminContext } from '../../App';
import { setLocalStorage } from '../../assets/appStorage/appStorage';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import { useEffect } from 'react';
import { Fade, IconButton, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import PopUpDialog from '../PopUpDialog/PopUpDialog';
import SnackBar from '../SnackBar/SnackBar';
import  admobBanner  from "../../assets/admob.webp";

const fakeAds = [
    {
        id: 0,
        title: 'AdMob',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse officiis pariatur repudiandae minus perspiciatis',
        img: 'https://cdn.10minuteschool.com/images/images/english-master-bundle-course-sqr-v2.jpg',
        affiliate_link: '#'
    },
    {
        id: 1,
        title: 'AdMob',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse officiis pariatur repudiandae minus perspiciatis',
        img: 'https://cdn.10minuteschool.com/images/images/english-master-bundle-course-sqr-v2.jpg',
        affiliate_link: '#'
    },
    {
        id: 2,
        title: 'AdMob',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse officiis pariatur repudiandae minus perspiciatis',
        img: 'https://cdn.10minuteschool.com/images/images/english-master-bundle-course-sqr-v2.jpg',
        affiliate_link: '#'
    },
    {
        id: 3,
        title: 'AdMob',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse officiis pariatur repudiandae minus perspiciatis',
        img: 'https://cdn.10minuteschool.com/images/images/english-master-bundle-course-sqr-v2.jpg',
        affiliate_link: '#'
    }
]

const AdMobAds = () => {

    // Using Context API
    const { CurrentPage } = useContext(AdminContext)
    const [currentPage, setCurrentPage] = CurrentPage;
    setTimeout(() => {
        setCurrentPage('AdMobs')
    }, 1);
    setLocalStorage('componentId', 5)
    const navigate = useNavigate()

    // All Ad goes here
    const [allAds, setAllAds] = useState([]);
    setLocalStorage('ads', allAds)

    // Get Ads
    useEffect(() => setAllAds(fakeAds), [])

    // Delete Ads //
    const [isDeleteBtnClicked, setIsDeleteBtnClicked] = useState(false);
    const [targetedAdsId, setTargetedAdsId] = useState(null);
    const [isDeletedSuccessfully, setIsDeletedSuccessfully] = useState(false);

    // Delete Btn Handler
    const deleteBtnHandler = (id) => {
        setTargetedAdsId(id)
        setIsDeleteBtnClicked(!isDeleteBtnClicked)
    }

    // Confirm Delete Button Handler
    const confirmDelete = () => {
        setIsDeleteBtnClicked(!isDeleteBtnClicked)
        setIsDeletedSuccessfully(!isDeletedSuccessfully)
        setAllAds(allAds.filter(Ads => Ads.id !== targetedAdsId))
    }
    return (
        <section className=' container tw-min-h-screen tw-mt-4 tw-mb-5'>

            <>
                {/*  Dialog for delete confirmation */}
                <PopUpDialog
                    isActionBtnClicked={isDeleteBtnClicked}
                    setIsActionBtnClicked={setIsDeleteBtnClicked}
                    confirmAction={confirmDelete} />

                {/* Successfully Deleted Pop_up */}
                <SnackBar
                    message={'Deleted Successfully'}
                    isActionSuccessful={isDeletedSuccessfully}
                    setIsActionSuccessful={setIsDeletedSuccessfully} /></>

            {/* Main Content */}
            <div className='navyBlue container tw-rounded-lg tw-space-y-5 pb-3'>

                {/*Table Header */}
                <ComponentHeader
                    placeholder='Search By Title...'
                    button={true}
                    btnNavigateTo='/ads/add'
                    buttonName='AdMobs' />

                {/* Table */}
                <TableContainer
                    sx={{
                        borderRadius: 0,
                        borderColor: 'rgba(169, 169, 169, 0.2)'
                    }}
                    component={Paper}>
                    <Fade
                    onDurationChange={()=> 1500}
                        in={true}>
                        <Table
                            sx={{
                                minWidth: 650,
                                backgroundColor: '#1a2234'
                            }}>
                            <TableHead>
                                <TableRow>
                                    {['Id', 'Banner', 'Title', 'Description', 'Link', 'Action'].map((th, i) => {
                                        return (
                                            <TableCell
                                                key={i}
                                                sx={{
                                                    fontSize: 'medium',
                                                    fontWeight: 'bold'
                                                }}>
                                                {th}
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {allAds.map(ads => {
                                    const { id, title, description, img, affiliate_link } = ads;

                                    return (
                                        <TableRow
                                            sx={{
                                                ":hover": {
                                                    backgroundColor: 'rgb(55 65 81 / 0.1)'
                                                }
                                            }}
                                            key={id}>

                                            {/* Id */}
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                align="left">
                                                {id}
                                            </TableCell>

                                            {/* Banner */}
                                            <TableCell
                                                sx={{ p: 1.1 }}
                                                align="left">
                                                <Fade
                                                    in={true}>
                                                    <img className='tw-h-20 tw-rounded-sm' src={admobBanner} loading="lazy" alt={title} />
                                                </Fade>
                                            </TableCell>

                                            {/* Title */}
                                            <TableCell>
                                                {title}
                                            </TableCell>

                                            {/* Description */}
                                            <TableCell align="left">
                                                {description}
                                            </TableCell>

                                            {/* Affiliate Link */}
                                            <TableCell align="left">
                                                <Tooltip
                                                    placement='top'
                                                    title='Affiliate Link'>
                                                    <Link
                                                        target='blank'
                                                        href={affiliate_link} underline="hover" >
                                                        Visit
                                                    </Link>
                                                </Tooltip>
                                            </TableCell>

                                            {/* Action Buttons */}
                                            <TableCell sx={{ px: 1 }}>
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
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </Fade>
                </TableContainer>
            </div>
        </section >
    );
};

export default AdMobAds;