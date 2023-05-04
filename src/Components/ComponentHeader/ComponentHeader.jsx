import { Add, Search } from '@mui/icons-material';
import { Button, FormControl, Input, InputAdornment, InputLabel, Tooltip } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

// This sub_component will be use on the top of all content component//
const ComponentHeader = ({ button, btnNavigateTo, buttonName, placeholder }) => {
    const navigate = useNavigate()

    // Search-bar Handler 
    const handleSearch = (e) => {
        const searchValue = (e.target.value).toLowerCase()
        console.log(searchValue);
    }

    return (
        <header className='tw-flex tw-justify-between sm:tw-px-5 tw-px-4 tw-align-middle tw-h-20'>
            {/* Search Bar */}
            <FormControl onChange={handleSearch} color='error' className='my-auto tw-w-44 sm:tw-w-64' variant="standard">
                <Input
                placeholder={`${placeholder}`}
                    type='text'
                    endAdornment={
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    } />
            </FormControl>

            {/* Add new element button */}
            {button && <Tooltip  placement="top" title={`Add new ${buttonName.toLowerCase()}`}>
                <Button onClick={() => navigate(`${btnNavigateTo}`)}
                    color='success' size='small' className='text-light my-auto' variant="contained" startIcon={<Add fontSize='inherit' />}>
                    {`Add ${buttonName}`}
                </Button>
            </Tooltip>}

        </header>
    );
};

export default ComponentHeader;