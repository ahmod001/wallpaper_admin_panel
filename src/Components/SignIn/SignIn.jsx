import React, { useState } from 'react';
import { Alert, Button, Checkbox, Fade, FormControlLabel, TextField } from "@mui/material";
import PasswordField from './PasswordField/PasswordField';
import { FormProvider, useForm } from "react-hook-form";
import { getLocalStorage, setLocalStorage } from '../../assets/appStorage/appStorage'
import { Lock, LockOpen } from '@mui/icons-material';

const SignIn = () => {
    // This state will toggle the form between 
    // ForgotPassword & SignIn
    const [isSignin, setIsSignin] = useState(true)

    const methods = useForm();
    const { register, handleSubmit, formState: { errors } } = methods;

    // State for RememberMe checkbox
    const [isRememberMe, setIsRememberMe] = useState(false)

    // // Form data will stored here
    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: ''
    // })


    // Submit btn handler 
    const onSubmit = (data) => {
        console.log(data);
        isRememberMe && setLocalStorage('loginInfo', data);
    }

    return (
        <section className='tw-flex tw-h-screen tw-justify-center tw-align-middle tw-space-y-1'>
            <Fade in={true} onDurationChange={3000}>
                <div className='m-auto'>

                    {/*Main Title */}
                    <div className='tw-h-16 tw-flex tw-justify-center tw-space-x-1 '>
                        <img src="/logo.png" className='my-auto tw-h-8 tw-rounded-full tw-object-cover' alt="logo" />
                        <h3 className='my-auto tw-text-base tw-font-bold'>HD Wallpaper
                        </h3>
                    </div>

                    {/* Sign_in form */}
                    <div className='tw-w-96 tw-rounded-md navyBlue tw-py-8 tw-px-3 tw-space-y-5 tw-text-left'>
                        <h3 className='tw-text-center text-uppercase tw-tracking-wider tw-font-bold tw-text-xl'>Sign In</h3>

                        <FormProvider {...methods}>
                            <form onSubmit={handleSubmit(onSubmit)}
                                action="post" className='tw-space-y-6 px-3'>

                                {/* Email  */}
                                <TextField {...register("email", { pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}/, required: true })}

                                    color={`${errors.email ? 'error' : 'action'}`}
                                    fullWidth autoFocus
                                    label="Email" type='email' size='small' variant="outlined"
                                    defaultValue={getLocalStorage('loginInfo').email || ''}
                                />

                                {/*Email error goes here */}
                                {errors.email && <p className='text-danger mt-1 mb-0'>Email is invalid.</p>}

                                {/* Password */}
                                {isSignin === true ?
                                    < PasswordField /> : isSignin === false ? < PasswordField placeholder={'New password'} /> : undefined}

                                {/* Remember me Checkbox */}
                                {isSignin && <FormControlLabel onClick={() => setIsRememberMe(!isRememberMe)} control={<Checkbox color="error" size="small" />} label="Remember me" />}

                                {/* Form_Error goes here */}
                                <Alert className={`${isSignin ? 'mt-1' : 'mt-3'}`} severity="error">{'error'}</Alert>


                                {/* Action Buttons */}
                                {isSignin ? <Button color='error' type='submit' className='tw-w-full' variant="contained">Login</Button>

                                    : <Button color='error' type='submit' className='tw-w-full' variant="contained">
                                        Reset password</Button>}
                            </form>
                        </FormProvider>

                        {/* Form Togglers goes here */}
                        <div className='tw-text-gray-200 tw-text-center tw-text-sm 
                    active:tw-text-red-400 hover:tw-text-gray-300 tw-cursor-pointer'>
                            {isSignin ? <span onClick={() => setIsSignin(!isSignin)}>
                                <Lock fontSize='inherit' /> Forgot your password?
                            </span>

                                : <span onClick={() => setIsSignin(!isSignin)}>
                                    <LockOpen fontSize='inherit' /> Login
                                </span>
                            }
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default SignIn;