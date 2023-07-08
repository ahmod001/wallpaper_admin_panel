import React, { useState } from 'react';
import { Alert, Button, Checkbox, Fade, FormControl, FormControlLabel, FormHelperText, InputLabel, OutlinedInput, TextField } from "@mui/material";
import PasswordField from './PasswordField/PasswordField';
import { Controller, FormProvider, useForm } from "react-hook-form";
import { getLocalStorage, setLocalStorage } from '../../assets/appStorage/appStorage'
import { Lock, LockOpen } from '@mui/icons-material';
import FullScreenPopUp from "../FullScreenPopUp/FullScreenPopUp";
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [isRememberMe, setIsRememberMe] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);
    const [isSignInFailed, setIsSignInFailed] = useState(false);

    const methods = useForm();
    const { register, handleSubmit, control, formState: { errors } } = methods;

    const navigate = useNavigate()
    const { from } = useLocation().state || { from: { pathname: '/' } }

    // Form Submit btn handler 
    const onSubmit = (data) => {
        const defaultUser = {
            email: 'admin@gmail.com',
            password: 'admin123'
        }
        if (defaultUser.email === data.email &&
            defaultUser.password === data.password) {
            navigate(from)
            sessionStorage.setItem('user_info', JSON.stringify(data))
        } else {
            setIsSignInFailed(true)
        }
    }

    // Close error Pop_up Handler
    const handleClose = () => {
        setIsSignInFailed(false)
    }

    return (
        <section className='tw-flex tw-h-screen tw-justify-center tw-align-middle tw-space-y-1'>

            {/* If there any authentication , this pop_up error will show */}
            <FullScreenPopUp
                error={true}
                message={'No user found'}
                open={isSignInFailed}
                handleClose={handleClose} />

            {/* Main Component */}
            <Fade in={true}>
                <div className='m-auto tw-space-y-2'>
                    {/* Brand Icon*/}
                    <div className='tw-h-16 tw-flex tw-justify-center tw-space-x-2 '>
                        <img src="/logo.png"
                            className='my-auto tw-h-8 tw-rounded-full tw-object-cover' alt="logo" />

                        <h3 className='my-auto tw-font-bold'>
                            HD Wallpaper
                        </h3>
                    </div>

                    {/* Sign_in form */}
                    <div className={`tw-w-96 tw-rounded-md navyBlue tw-py-9 tw-px-3 
                    tw-space-y-7 tw-text-left`}>

                        {/* Form Title */}
                        <h3 className='tw-text-center text-uppercase tw-tracking-wider tw-font-bold tw-text-xl'>
                            {isSignIn ? 'Sign In' : 'Forgot Password'}
                        </h3>

                        <FormProvider {...methods}>
                            <form onSubmit={handleSubmit(onSubmit)}
                                className={`${isSignIn ? 'tw-space-y-4'
                                    : 'tw-space-y-6'} px-3`}>

                                <div className='tw-space-y-7'>
                                    {/* Email  Field*/}
                                    <Controller
                                        name="email"
                                        control={control}
                                        rules={{
                                            required: true,
                                            pattern: {
                                                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}/,
                                            }
                                        }}
                                        defaultValue="admin@gmail.com"
                                        render={({ field, fieldState: { error } }) => (
                                            <FormControl
                                                fullWidth
                                                size="small"
                                                variant="outlined"
                                                error={Boolean(error)}
                                                color={error ? 'error' : 'primary'}
                                            >
                                                <InputLabel htmlFor="email-input">Email</InputLabel>
                                                <OutlinedInput
                                                    {...field}
                                                    id="email-input"
                                                    label="Email"
                                                    type="email"
                                                    size="small" // Added size prop here
                                                    autoComplete="off"
                                                />
                                                {error && (
                                                    <FormHelperText>
                                                        Invalid Email
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                        )}/>

                                    {/* Password Fields*/}
                                    {isSignIn ?
                                        <PasswordField />
                                        : <PasswordField
                                            placeholder={'New Password'} />}
                                </div>

                                {/* Remember_Me Checkbox here*/}
                                {isSignIn &&
                                    <FormControlLabel
                                        onClick={() => setIsRememberMe(!isRememberMe)}
                                        control={
                                            <Checkbox
                                                color="error"
                                                size="small" />}
                                        label="Remember me" />}

                                {isSignIn ?
                                    // Sign in Button 
                                    <Button
                                        value='logIn'
                                        color='error'
                                        type='submit'
                                        className='tw-w-full'
                                        variant="contained">
                                        Sign In
                                    </Button>

                                    // Reset_Password Button 
                                    : <Button
                                        value='resetPassword'
                                        color='error'
                                        type='submit'
                                        className='tw-w-full'
                                        variant="contained">
                                        Reset password
                                    </Button>}
                            </form>
                        </FormProvider>

                        {/* Form Togglers goes here */}
                        {/* <div className='tw-text-gray-200 tw-text-center tw-text-sm 
                    active:tw-text-red-400 hover:tw-text-gray-300 tw-cursor-pointer'>
                            {isSignIn ?
                                <span onClick={() => setIsSignIn(!isSignIn)}>
                                    <Lock
                                        className='mb-1 tw-mr-0.5'
                                        fontSize='inherit' />
                                    Forgot your password?
                                </span>

                                : <span onClick={() => setIsSignIn(!isSignIn)}>
                                    <LockOpen
                                        className='mb-1 tw-mr-0.5'
                                        fontSize='inherit' />
                                    Login
                                </span>
                            }
                        </div> */}
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default SignIn;