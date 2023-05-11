import { Box, Button, Dialog, DialogActions, DialogTitle, Fade, Zoom } from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import React, { forwardRef, useState } from 'react';

const transition = forwardRef(function Transition(props, ref) {
    return <Fade ref={ref} {...props} />;
});

const FullScreenPopUp = ({ error, message,open, handleClose}) => {

    return (
        <Dialog
            TransitionComponent={transition}
            open={open}
            onClose={handleClose}>
            <Box sx={{
                backgroundColor: '#1a2234',
                width: '20rem',
            }}>
                {/* Success Icon */}
                <DialogTitle
                    sx={{
                        fontSize: '4.5rem',
                        pt: 0,
                        pb: 1,
                        textAlign: 'center',
                    }}>
                    <Zoom
                        in={true}>
                        {error ?
                            <ErrorRoundedIcon
                                color='error'
                                fontSize={'inherit'} />
                            :
                            <CheckCircleRoundedIcon
                                color='success'
                                fontSize={'inherit'} />}
                    </Zoom>
                </DialogTitle>

                {/* Massage */}
                <DialogTitle
                    sx={{
                        fontSize: '1.03rem',
                        pt: 0,
                        pb: 2,
                        textAlign: 'center',
                    }}>
                    {message}
                </DialogTitle>

                {/* OK Button */}
                <DialogActions
                    sx={{
                        pb: 1.5,
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Button
                        onClick={handleClose}
                        size='small'
                        variant='outlined'>
                        Ok
                    </Button>
                </DialogActions>

            </Box>
        </Dialog>
    );
};

export default FullScreenPopUp;