import { Button, TextField, Tooltip } from '@mui/material';
import React from 'react';

const Settings = () => {
    
    return (
        <section className='container tw-min-h-screen container tw-mt-4 mb-5'>
            <div className='container navyBlue px-4 py-3 pb-3 tw-space-y-5 tw-rounded-md '>
                {/* GO Back Button */}
                <Button variant="text" onClick={() => navigate(goBackLocation)} color='error' size='large' startIcon={<ArrowBack fontSize='inherit' />}>
                    Back
                </Button>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)}
                    className='tw-space-y-6 sm:tw-w-11/12'>

                    {/* Title */}
                    <div className='row'>
                        <label className='col-md-3 col-4 tw-tracking-wide lg:tw-text-lg tw-font-semibold' htmlFor="title">{titleLabel}</label>
                        <TextField
                            required defaultValue={edit ? editingComponentObject[titleLabel.toLowerCase()] : ''}
                            {...register(`${titleLabel.toLowerCase()}`, { required: true })}
                            className='col' size='normal' type='text'
                            hiddenLabel
                            placeholder={`Enter ${targetName} ${titleLabel}*`} color='error'
                            autoFocus={add ? true : false} fullWidth variant='filled' />
                    </div>

                    {/* Image */}
                    <div className='row'>
                        <label className='col-md-3 col-4 lg:tw-text-lg tw-tracking-wide  tw-font-semibold' htmlFor="title">{imgLabel}</label>
                        <div className='col tw-px-0 tw-space-y-4'>
                            <Tooltip title='Select Image File' placement='top-start'>
                                <TextField hiddenLabel
                                    inputProps={{
                                        accept: "image/*",
                                        onChange: (e) => {
                                            return (setCurrentWallpaperSrc(URL.createObjectURL(e.target.files[0])))
                                        }
                                    }}

                                    variant='filled' size='normal'
                                    {...register('img', { required: edit ? false : true })} required={edit ? false : true}
                                    color='action' fullWidth type='file' />
                            </Tooltip>

                            {/*Selected Image preview will show here*/}
                            <img src={currentWallpaperSrc}
                                className={`${!currentWallpaperSrc && 'tw-hidden'} tw-rounded-md tw-pointer-events-none tw-object-cover tw-h-44`} alt='' />
                        </div>
                    </div>

                    {/* Save btn */}
                    <div className='col-md-9 col-8 mt-4 tw-ml-auto'>
                        <Tooltip placement='top' title='Save Settings'>
                            <Button type='submit' variant="contained" color='error' size='small' value='Save'>
                                Save
                            </Button>
                        </Tooltip>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Settings;