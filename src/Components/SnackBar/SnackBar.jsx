import { Alert, Slide, Snackbar } from '@mui/material';
import React, { Transition, forwardRef } from 'react';

const transition = forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const SnackBar = ({ message, error, isActionSuccessful, setIsActionSuccessful }) => {

    const handleClose = () => {
        setIsActionSuccessful(!isActionSuccessful)
    }

    return (
        <Snackbar
            TransitionComponent={transition}
            open={isActionSuccessful}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            onClose={handleClose}>

            <Alert
                onClose={handleClose}
                severity={error ? 'error' : "success"}
                sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default SnackBar;