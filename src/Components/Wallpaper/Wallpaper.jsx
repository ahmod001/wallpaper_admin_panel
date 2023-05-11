import { Category, ChatBubble, Delete, Download, Star, Visibility } from '@mui/icons-material';
import { Button, Card, CardActionArea, CardActions, CardContent, Fade, Switch, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Wallpaper = ({ wallpaper, deleteBtnHandler, statusBtnHandler }) => {
    const navigate = useNavigate();

    // Get All data from Props
    const { id, img, title, category, ratings, rated_by_users, downloaded, active } = wallpaper;

    return (
        <Fade in={true} onDurationChange={() => 1500}>
            <Card className='col sm:tw-w-full tw-w-9/12'
                sx={{
                    marginX: 'auto',
                    background: `${active ? '#252e44' : 'transparent'}`,
                }}>
                <CardActionArea onClick={() => navigate(`/wallpapers/edit/${id}`)}>

                    {/* Wallpaper */}
                    <div className='tw-relative tw-h-52 tw-overflow-hidden tw-pointer-events-none'>
                        {img ? <img className='tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover tw-object-center'
                            src={img}
                            loading="lazy" alt={title} />

                            // Image-Loading-Skeleton
                            : <div className='placeholder-glow'>
                                <div className='placeholder bg-secondary tw-h-screen tw-w-full' />
                            </div>}
                    </div>
                    <CardContent >

                        {/* Title */}
                        <Typography sx={{ fontSize: 20, fontWeight: 'bold', color: `${active ? '#f5f5f5' : 'rgb(156 163 175)'}` }} variant="h6" component="div">
                            {title}
                        </Typography>

                        <div className={`${active ? 'tw-text-gray-400' : 'tw-text-gray-600'} tw-space-y-2`}>
                            <ul className='tw-grid tw-text-sm tw-gap-y-1 tw-grid-cols-1'>

                                {/* Views */}
                                <li className='col'>
                                    <Visibility color='error' className='mb-1' fontSize='inherit' /> <span className='tw-font-semibold'>Views -</span>  {400}
                                </li>

                                {/* Rating*/}
                                <li className='col'>
                                    <ChatBubble color='error' fontSize='inherit' /> <span className='tw-font-semibold'>Rating -</span> {'4.5'}<Star color='warning' className='mb-1' fontSize='inherit' /> <span className='tw-text-xs'>({rated_by_users})</span>
                                </li>

                                {/* Category */}
                                <li className='col'>
                                    <Category color='error' className='mb-1' fontSize='inherit' /> <span className='tw-font-semibold'>Category -</span> {category}
                                </li>

                                {/* Downloads */}
                                <li className='col'>
                                    <Download color='error' fontSize='inherit' /> <span className='tw-font-semibold'>Downloaded -</span> {downloaded}
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </CardActionArea>

                {/* Action Buttons goes here */}
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>

                    {/* wallpaper Status_Btn */}
                    <Tooltip title='Active' placement='top'>
                        <Switch color='warning' checked={active}
                            onChange={() => statusBtnHandler(id)} label='Active' />
                    </Tooltip>

                    {/* Delete_btn */}
                    <Button onClick={() => deleteBtnHandler(id)}
                        disabled={!active} size='small' color='error' variant="outlined" endIcon={<Delete fontSize='inherit' />}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Fade>
    );
};

export default Wallpaper;