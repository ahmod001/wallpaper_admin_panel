import React, { forwardRef, Transition} from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grow } from "@mui/material";
import { Warning } from '@mui/icons-material';

const transition = forwardRef(function Transition(props, ref) {
    return <Grow ref={ref} {...props} />;
});

const PopUpDialog = (
    { isActionBtnClicked, setIsActionBtnClicked, confirmAction }) => {

    const handleClose = () => {
        setIsActionBtnClicked(!isActionBtnClicked)
    };

    return (
        <Dialog
            open={isActionBtnClicked}
            keepMounted
            TransitionComponent={transition}
            onClose={handleClose}>
            <Box sx={{ backgroundColor: '#252e44' }} >

                {/* Title */}
                <DialogTitle>
                    {'Are you sure?'}
                </DialogTitle>

                {/* Warning */}
                <DialogContent>
                    <DialogContentText>
                        <Warning
                            className='mb-1'
                            color='warning'
                            fontSize='inherit' />{'You will not be able to recover this.'}
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    {/* Cancel-btn */}
                    <Button
                        sx={{ color: 'rgb(209 213 219)' }}
                        onClick={handleClose}>
                        Cancel
                    </Button>
                    
                      {/* Confirm-btn */}
                      <Button
                        color='error'
                        onClick={confirmAction}>
                        Confirm
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};

export default PopUpDialog;