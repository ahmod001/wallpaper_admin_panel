import styled from "@emotion/styled";
import { InputBase, alpha } from "@mui/material";

export const SearchBar = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.13),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.20),
    },
    width: '11rem',
    [theme.breakpoints.up('sm')]: {
        height: 38,
        width: 'auto',
    },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '10rem',
        fontSize:'0.875rem',

        [theme.breakpoints.up('md')]: {
            width: '10rem',
            fontSize:'medium',
            '&:focus': {
                width: '13rem',
            },
        },
    },
}));