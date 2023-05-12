import React, { useContext, useEffect, useState } from 'react';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import { setLocalStorage } from "../../assets/appStorage/appStorage";
import { Fade, Tooltip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../../App';
import PopUpDialog from "../PopUpDialog/PopUpDialog";
import SnackBar from '../SnackBar/SnackBar';

const fakeCategories = [
    {
        id: 0,
        name: 'Category',
        img: "https://media.istockphoto.com/id/485150094/photo/happy-family-standing-on-the-beach.jpg?s=170667a&w=0&k=20&c=YlW-E-oWom6FV4JSZzLInCqc625CyMI7X9JivwjJzBQ=",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sapiente.Magnam, sapienteMagnam, sa'
    },
    {
        id: 1,
        name: 'Category',
        img: "https://media.istockphoto.com/id/485150094/photo/happy-family-standing-on-the-beach.jpg?s=170667a&w=0&k=20&c=YlW-E-oWom6FV4JSZzLInCqc625CyMI7X9JivwjJzBQ=",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sapiente.Magnam, sapienteMagnam, sa'
    },
    {
        id: 2,
        name: 'Category',
        img: "https://media.istockphoto.com/id/485150094/photo/happy-family-standing-on-the-beach.jpg?s=170667a&w=0&k=20&c=YlW-E-oWom6FV4JSZzLInCqc625CyMI7X9JivwjJzBQ=",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sapiente.Magnam, sapienteMagnam, sa'
    },
    {
        id: 3,
        name: 'Category',
        img: "https://media.istockphoto.com/id/485150094/photo/happy-family-standing-on-the-beach.jpg?s=170667a&w=0&k=20&c=YlW-E-oWom6FV4JSZzLInCqc625CyMI7X9JivwjJzBQ=",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sapiente.Magnam, sapienteMagnam, sa',
    }, {
        id: 4,
        name: 'Category',
        img: "https://media.istockphoto.com/id/485150094/photo/happy-family-standing-on-the-beach.jpg?s=170667a&w=0&k=20&c=YlW-E-oWom6FV4JSZzLInCqc625CyMI7X9JivwjJzBQ=",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sapiente.Magnam, sapienteMagnam, sa',
    }
]

const Categories = () => {
    // Using Context API
    const { CurrentPage } = useContext(AdminContext)
    const [currentPage, setCurrentPage] = CurrentPage;

    setTimeout(() => {
        setCurrentPage('Categories')
    }, 1)

    const navigate = useNavigate()
    setLocalStorage('componentId', 2)

    // All Categories goes here
    const [categories, setCategories] = useState([]);
    setLocalStorage('categories', categories)

    // Get Data
    useEffect(() => {
        setCategories(fakeCategories)
    }, []);

    // Delete Category //
    const [isDeleteBtnClicked, setIsDeleteBtnClicked] = useState(false);
    const [targetedCategoryId, setTargetedCategoryId] = useState(null);
    const [isDeletedSuccessfully, setIsDeletedSuccessfully] = useState(false);

    // Delete Btn Handler
    const deleteBtnHandler = (id) => {
        setTargetedCategoryId(id)
        setIsDeleteBtnClicked(!isDeleteBtnClicked)
    }

    // Confirm Delete Button Handler
    const confirmDelete = () => {
        setIsDeleteBtnClicked(!isDeleteBtnClicked)
        setIsDeletedSuccessfully(!isDeletedSuccessfully)
        setCategories(categories.filter(category => category.id !== targetedCategoryId))
    }

    return (
        <section className='container tw-min-h-screen tw-mt-4 tw-mb-5'>

            {/*  Dialog for delete confirmation */}
            <PopUpDialog
                isActionBtnClicked={isDeleteBtnClicked}
                setIsActionBtnClicked={setIsDeleteBtnClicked}
                confirmAction={confirmDelete} />

            {/* Successfully Deleted Pop_up */}
            <SnackBar
                message={'Deleted Successfully'}
                isActionSuccessful={isDeletedSuccessfully}
                setIsActionSuccessful={setIsDeletedSuccessfully} />

            {/* Main Content */}
            <div className='navyBlue container tw-rounded-lg tw-space-y-5 pb-3'>

                {/*Table Header */}
                <ComponentHeader
                    placeholder='Search By Title...'
                    button={true}
                    btnNavigateTo='/categories/add'
                    buttonName='Category' />

                {/* Table */}
                <TableContainer
                    sx={{
                        borderRadius: 0,
                        borderColor: 'rgba(169, 169, 169, 0.2)'
                    }}
                    component={Paper}>
                    <Fade
                        onDurationChange={() => 1500}
                        in={true}>
                        <Table
                            sx={{
                                minWidth: 650,
                                backgroundColor: '#1a2234'
                            }}>
                            <TableHead>
                                <TableRow>
                                    {['Id', 'Image', 'Name', 'Description', 'Action'].map((th, i) => {
                                        return (
                                            <TableCell
                                                key={i}
                                                sx={{
                                                    fontSize: 'medium',
                                                    fontWeight: 'bold'
                                                }}>
                                                {th}
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {categories.map(category => {
                                    const { id, img, description, name } = category;

                                    return (
                                        <TableRow
                                            sx={{
                                                ":hover": {
                                                    backgroundColor: 'rgb(55 65 81 / 0.1)'
                                                }
                                            }}
                                            key={id}>

                                            {/* Id */}
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                align="left">
                                                {id}
                                            </TableCell>

                                            {/* Image */}
                                            <TableCell sx={{ p: 1.1 }}>
                                                <Fade
                                                    in={true}
                                                    onDurationChange={() => 1000}>
                                                    <img
                                                        className='tw-h-20 tw-rounded-sm'
                                                        src={img}
                                                        loading='lazy'
                                                        alt={name} />
                                                </Fade>
                                            </TableCell>

                                            {/* Name */}
                                            <TableCell>
                                                {name}
                                            </TableCell>

                                            {/* Description*/}
                                            <TableCell align="left">
                                                {description}
                                            </TableCell>

                                            {/* Action Buttons */}
                                            <TableCell >
                                                <div className='tw-grid tw-grid-cols-2 tw-gap-x-1'>

                                                    {/* Edit */}
                                                    <Tooltip arrow placement='top' title='Edit'>
                                                        <IconButton
                                                            onClick={() => {
                                                                navigate(`/categories/edit/${category.id}`)
                                                            }}

                                                            className='col' aria-label="edit">
                                                            <Edit fontSize='inherit' />
                                                        </IconButton>
                                                    </Tooltip>

                                                    {/*Delete*/}
                                                    <Tooltip arrow placement='top' title='Delete'>
                                                        <IconButton
                                                            onClick={() => deleteBtnHandler(category.id)} color='error' className='col' aria-label="delete">
                                                            <Delete fontSize='inherit' />
                                                        </IconButton>
                                                    </Tooltip>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </Fade>
                </TableContainer>
            </div>
        </section>
    );
};

export default Categories;