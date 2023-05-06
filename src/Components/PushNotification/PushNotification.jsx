import React, { useContext } from 'react';
import { setLocalStorage } from '../../assets/appStorage/appStorage';
import { Button, TextField, Tooltip } from '@mui/material';
import { Send } from "@mui/icons-material";
import { useForm } from 'react-hook-form';
import { AdminContext } from '../../App';

const PushNotification = () => {
    // Using Context API
    const { CurrentPage } = useContext(AdminContext)
    const [currentPage, setCurrentPage] = CurrentPage;
    setTimeout(() => {
        setCurrentPage('Push Notification')
    }, 1);

    setLocalStorage('componentId', 6)

    const { register, handleSubmit } = useForm();

    // Submit Button handler
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <section className='container container tw-mt-4 tw-h-screen'>
            <div className='container navyBlue p-4 tw-flex tw-align-middle tw-h-96 tw-rounded-md '>

                <form onSubmit={handleSubmit(onSubmit)}
                    action="push_notification" className=' my-auto tw-space-y-5 sm:tw-w-11/12' method="post">

                    {/* Title */}
                    <div className='row'>
                        <label className='col-md-3 col-4 tw-tracking-wide sm:tw-text-lg tw-font-semibold' htmlFor="title">Title</label>
                        <TextField
                            required {...register('title', { required: true })}
                            className='col'  hiddenLabel type='text' placeholder='Enter Title*' color='error' autoFocus fullWidth variant='filled' />
                    </div>

                    {/* Massage */}
                    <div className='row'>
                        <label className='col-md-3 col-4 tw-tracking-wide sm:tw-text-lg tw-font-semibold' htmlFor="title">Massage</label>

                        <TextField required {...register('massage', { required: true })}
                            className='col'
                            multiline
                            rows={2}
                            size='small' type='text' hiddenLabel placeholder='Enter Massage*' color='error' fullWidth variant='filled' />
                    </div>

                    {/* External Link */}
                    <div className='row'>
                        <div className='col-md-3 col-4'>
                            <label className='tw-tracking-wide sm:tw-text-lg tw-font-semibold' htmlFor="title">External Link</label><br />
                            <span className='md:tw-text-sm lg:tw-text-xs xl:tw-text-sm tw-text-xs tw-text-gray-400'>(Optional)</span>
                        </div>

                        <TextField {...register('external_link')}
                            className='col'
                             type='url' placeholder='https://example.com' label='Enter Link' color='error' fullWidth variant='filled' />
                    </div>

                    {/* Submit button */}
                    <div className='col-md-9 col-8 mt-4 tw-ml-auto'>
                        <Tooltip placement='top' title='Send Notification'>
                            <Button type='submit' variant="contained" color='error' size='small' endIcon={<Send fontSize='inherit' />}>
                                Send
                            </Button>
                        </Tooltip>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default PushNotification;