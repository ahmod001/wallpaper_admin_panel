import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { getLocalStorage } from '../../../assets/appStorage/appStorage';


const PasswordField = ({ placeholder }) => {
    const [showPassword, setShowPassword] = useState(false)
    const methods = useFormContext()
    const { formState: { errors } } = methods

    return (
        <>
            <Controller
                name="password"
                control={methods.control}
                rules={{ required: true, minLength: 6 }}
                render={({ field }) => (
                    <FormControl
                        variant="outlined"
                        fullWidth
                        size='small'
                        color='action'
                        error={Boolean(errors.password)}
                    >
                        <InputLabel htmlFor="outlined-adornment-password">
                            {`${placeholder || 'Password'}`}</InputLabel>
                        <OutlinedInput
                            defaultValue={getLocalStorage('loginInfo').password || ''}
                            type={showPassword ? 'text' : 'password'}
                            label={`${placeholder || 'Password'}`}
                            
                            {...field}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowPassword(!showPassword)}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {errors.password && <p className='text-danger mt-1 mb-0'>Password is invalid.</p>}
                    </FormControl>
                )}
            />

        </>

    );
};

export default PasswordField;