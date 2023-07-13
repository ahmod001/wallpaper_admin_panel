import { Button, Checkbox, Fade, FormControlLabel, FormHelperText, TextField, Tooltip } from '@mui/material';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { setLocalStorage } from '../../assets/appStorage/appStorage';
import { AdminContext } from "../../App";
import FullScreenPopUp from '../FullScreenPopUp/FullScreenPopUp';
import SnackBar from '../SnackBar/SnackBar';

// defaultAdmin
const defaultAdmin = {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: 'admin1234',
    img: 'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1377d4/_orig/pixomatic_1572877223091.png'
}

const Settings = () => {
    // Using Context API
    const { CurrentPage } = useContext(AdminContext)
    const [currentPage, setCurrentPage] = CurrentPage;
    setTimeout(() => {
        setCurrentPage('Settings')
    }, 1);
    setLocalStorage('componentId', 7)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [passwordShow, setPassWordShow] = useState(false);
    const [admin, setAdmin] = useState({});
    const [profilePicture, setProfilePicture] = useState('/admin.jpg');

    // Get Data
    useMemo(() => {
        setAdmin(defaultAdmin)
        setProfilePicture(defaultAdmin.img)
        setLocalStorage('profilePicture', defaultAdmin.img)
    }, [])

    // These State will control Pop_up Dialogs
    const [isSaveBtnClicked, setIsSaveBtnClicked] = useState(false);
    const [isProfileUpdated, setIsProfileUpdated] = useState(false)

    // Submit Button handler//
    const onSubmit = (data) => {
        console.log(data);
        setIsSaveBtnClicked(!isSaveBtnClicked)
        setIsProfileUpdated(true)
    }


    return (
        <section className='container tw-min-h-screen container tw-mt-4 mb-5'>

            {/* Show Pop_up SnackBar updated successfully  */}
            {isProfileUpdated ?
                <SnackBar
                    isActionSuccessful={isSaveBtnClicked}
                    setIsActionSuccessful={setIsSaveBtnClicked}
                    message={`Settings updated successfully`} />

                //Show Pop_up SnackBar If Update Failed 
                : <SnackBar
                    error={true}
                    isActionSuccessful={isSaveBtnClicked}
                    setIsActionSuccessful={setIsSaveBtnClicked}
                    message={`Unable to update settings`} />}
            <Fade
                in={true}
                onDurationChange={() => 1500}>
                <div className='container navyBlue px-4 py-3 pb-4 tw-space-y-12 tw-rounded-md '>

                    {/*Profile Picture Preview will show here*/}
                    <img
                        loading='lazy'
                        src={profilePicture}
                        className={`tw-rounded-md tw-pointer-events-none tw-object-center tw-object-cover tw-ring-4 tw-ring-gray-700 tw-shadow-gray-500 tw-shadow-md lg:tw-w-44 lg:tw-h-44 tw-w-36 tw-h-36`}
                        alt='Profile-picture' />

                    <form onSubmit={handleSubmit(onSubmit)}
                        className='tw-space-y-4 sm:tw-w-11/12'>

                        {/* Image */}
                        <div className='row'>
                            <label className='col-md-3 col-4 lg:tw-text-lg tw-tracking-wide  tw-font-semibold' htmlFor="title">Image</label>
                            <div className='col tw-px-0 tw-space-y-4'>
                                <Tooltip title='Select Profile Picture' placement='top-start'>
                                    <TextField
                                        hiddenLabel
                                        inputProps={{
                                            accept: "image/*",
                                            onChange: (e) => {
                                                return (setProfilePicture(URL.createObjectURL(e.target.files[0])))
                                            }
                                        }}

                                        variant='filled' size='normal'
                                        {...register('img', { required: true })}
                                        required
                                        color='action'
                                        fullWidth
                                        type='file' />
                                </Tooltip>
                            </div>
                        </div>

                        {/* Name */}
                        <div className='row'>
                            <label
                                className='col-md-3 col-4 tw-tracking-wide lg:tw-text-lg tw-font-semibold'
                                htmlFor="title">Name</label>

                            <TextField
                                className='col'
                                required
                                value={admin ? admin.name : ''}
                                {...register('name', { required: true })}
                                type='text'
                                hiddenLabel
                                placeholder='Enter your name*' color='error'
                                fullWidth
                                variant='filled' />
                        </div>

                        {/* Email */}
                        <div className='row'>
                            <label
                                className='col-md-3 col-4 tw-tracking-wide lg:tw-text-lg tw-font-semibold' htmlFor="title">Email</label>

                            <TextField
                                defaultValue={admin ? admin.email : ''}
                                className='col'
                                required
                                {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                                type='text'
                                hiddenLabel
                                helperText={errors.email &&
                                    <FormHelperText sx={{ color: 'tomato' }}>
                                        Invalid email
                                    </FormHelperText>}
                                placeholder='Enter your email*'
                                color='error'
                                fullWidth
                                variant='filled' />
                        </div>

                        {/* Password*/}
                        <div className='row '>
                            <label
                                className='col-md-3 col-4 tw-tracking-wide lg:tw-text-lg tw-font-semibold' htmlFor="title">Password</label>

                            <TextField
                                className='col'
                                defaultValue={admin ? admin.password : ''}
                                required
                                {...register('password', { required: true, minLength: 6 })}
                                type={passwordShow ? 'text' : 'password'}
                                label='Enter Password'

                                helperText={errors.password &&
                                    <FormHelperText sx={{ color: 'tomato' }} >
                                        Too short password
                                    </FormHelperText>}

                                placeholder='Minimum 6 characters required' color='error'
                                fullWidth
                                variant='filled' />

                            {/* Show Password */}
                            <FormControlLabel
                                className='col-8 mt-2 col-md-9 ms-auto'
                                control={
                                    <Checkbox size='small'
                                        onChange={() => setPassWordShow(!passwordShow)}
                                        color="error" />
                                }
                                label="Show Password" />
                        </div>

                        {/* Save btn */}
                        <div className='col-md-9 col-8 mt-4 tw-ml-auto'>

                            <Tooltip
                                placement='top'
                                title='Save Settings'>
                                <Button
                                    type='submit'
                                    variant="contained"
                                    color='error'
                                    size='small'
                                    value='Save'>
                                    Save
                                </Button>
                            </Tooltip>
                        </div>
                    </form>
                </div >
            </Fade>
        </section >
    );
};

export default Settings;