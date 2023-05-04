import React, { useMemo, useState } from 'react';
import { Button, FormControl, Input, InputLabel, MenuItem, Select, TextField, Tooltip } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const FormEditor = (properties) => {
    const { add, edit, targetName, editingComponentObject, titleLabel, imgLabel, goBackLocation, actionHandler } = properties;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [currentWallpaperSrc, setCurrentWallpaperSrc] = useState('')
    const navigate = useNavigate();

    useMemo(() => {
        edit && setCurrentWallpaperSrc(editingComponentObject.img)
    }, [])


    // Submit Button handler//
    const onSubmit = (data) => {
        actionHandler(data)
    }

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

                    {/* Category */}
                    {targetName.toLowerCase() === 'wallpaper' ? <div className='row'>
                        <label className='col-md-3 lg:tw-text-lg col-4 tw-tracking-wide  tw-font-semibold' htmlFor="title">Category</label>

                        <FormControl variant='filled'
                            className='col' required color='error' fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                            <Select
                                size='small'
                                labelId="demo-simple-select-label"
                                defaultValue={edit ? editingComponentObject.category : ''}
                                {...register('category', { required: true })}
                            >
                                <MenuItem key={0} value=''>None</MenuItem>
                                <MenuItem key={1} value='car'>{'Car'}</MenuItem>
                                <MenuItem key={2} value='fight'>{'Fight'}</MenuItem>
                                <MenuItem key={3} value='other'>{'Other'}</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                        // Description 
                        : <div className='row'>
                            <label className='col-md-3 lg:tw-text-lg col-4 tw-tracking-wide  tw-font-semibold' htmlFor="title">Description</label>

                            <TextField variant='filled' size='small'
                                hiddenLabel
                                placeholder={'Enter Description'}
                                multiline
                                rows={2}
                                {...register('description')}
                                defaultValue={edit ? editingComponentObject.description : ''}
                                className='col' color='error' fullWidth>

                            </TextField>
                        </div>}

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

                    {/* Wallpaper Tags */}
                    {targetName.toLowerCase() === 'wallpaper' && <div className='row'>
                        <label className='col-md-3 col-4 lg:tw-text-lg tw-tracking-wide tw-font-semibold' htmlFor="title">Wallpaper Tags </label>
                        <TextField
                            defaultValue={edit ? editingComponentObject.tags : ''}
                            {...register('wallpaper_tags')}
                            className='col' type='text' label='Enter Tags' color='error' placeholder='Car, Racing, Game' fullWidth variant='filled' />
                    </div>}

                    {/* Status */}
                    {targetName.toLowerCase() === 'wallpaper' && <div className='row'>
                        <label className='col-md-3 col-4 lg:tw-text-lg tw-tracking-wide tw-font-semibold' htmlFor="title">Status</label>

                        <Tooltip title={`Select Status`} placement='top-start'>
                            <FormControl variant='filled' size='small'
                                {...register('active')} className='col' color='error' fullWidth>

                                <Select
                                    defaultValue={edit ? editingComponentObject.active : true}
                                    hiddenLabel
                                >
                                    <MenuItem key={0} value={true}>Active</MenuItem>
                                    <MenuItem key={1} value={false}>Inactive</MenuItem>
                                </Select>
                            </FormControl>
                        </Tooltip>
                    </div>}

                    {/* Submit*/}
                    <div className='col-md-9 col-8 mt-4 tw-ml-auto'>
                        {add ?
                            <Tooltip placement='top' title={`Add New ${targetName}`}>
                                <Button type='submit' variant="contained" color='error' size='small' value={'add'}>
                                    Add
                                </Button>
                            </Tooltip>
                            :
                            <Tooltip placement='top' title={`Save ${targetName}`}>
                                <Button key={1} type='submit' variant="contained" color='error' size='small' value={'edit'}>
                                    Edit
                                </Button>
                            </Tooltip>
                        }
                    </div>
                </form>
            </div>
        </section>
    );
};

export default FormEditor;