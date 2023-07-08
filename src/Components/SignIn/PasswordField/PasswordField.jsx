import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { getLocalStorage } from '../../../assets/appStorage/appStorage';

const PasswordField = ({ placeholder }) => {

    const [showPassword, setShowPassword] = useState(false);
    const methods = useFormContext();
    const { formState: { errors } } = methods;

    return (
        <Controller
            name="password"
            control={methods.control}
            rules={{ required: true, minLength: 6 }}
            defaultValue={'admin123'}

            render={({ field }) => (
                <FormControl
                    variant="outlined"
                    size='small'
                    fullWidth
                    color='action'
                    error={Boolean(errors.password)}
                >
                    <InputLabel htmlFor="outlined-adornment-password">
                        {`${placeholder || 'Password'}`}
                    </InputLabel>

                    <OutlinedInput
                        type={showPassword ? 'text' : 'password'}
                        label={`${placeholder || 'Password'}`}
                        {...field}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                >
                                    {showPassword ?
                                        <VisibilityOff fontSize='small' />
                                        : <Visibility fontSize='small' />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    {Boolean(errors.password) && (
                        <FormHelperText>
                            Password is too short
                        </FormHelperText>
                    )}
                </FormControl>
            )}
        />
    );
};

export default PasswordField;