import { Add, Search } from '@mui/icons-material';
import { Button, Tooltip } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar, SearchIconWrapper, StyledInputBase } from "./MuiCustomSearchBar/MuiCustomSearchBar";

// This subComponent will serve as the topmost layer for all content components
const ComponentHeader = ({ button, btnNavigateTo, buttonName, placeholder }) => {
    const navigate = useNavigate()

    // Search-bar Handler 
    const handleSearch = (e) => {
        const searchValue = (e.target.value).toLowerCase()
        console.log(searchValue);
    }

    return (
        <header className='tw-flex tw-justify-between sm:tw-px-0.5 tw-px-1 tw-align-middle tw-h-20'>
            {/* Search Bar */}
            <SearchBar className='my-auto'>
                <SearchIconWrapper>
                    <Search />
                </SearchIconWrapper>
                <StyledInputBase
                    type='search'
                    placeholder={`${placeholder}`}
                    onChange={handleSearch}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </SearchBar>


            {/* Create new element button */}
            {button &&
                <Tooltip
                    placement="top"
                    title={`Create new ${buttonName.toLowerCase()}`}>
                    <Button
                        onClick={() => navigate(`${btnNavigateTo}`)}
                        color='success'
                        size='small'
                        className='text-light my-auto'
                        variant="contained"
                        startIcon={<Add fontSize='inherit' />}>
                        {`${buttonName}`}
                    </Button>
                </Tooltip>}

        </header>
    );
};

export default ComponentHeader;